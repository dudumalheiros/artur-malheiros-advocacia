import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";
import type { Image as SanityImage } from "sanity";

import { sanityClient } from "./client";
import { isSanityConfigured } from "./env";

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  coverImage?: SanityImage & { alt?: string };
};

export type Post = PostSummary & {
  body: PortableTextBlock[];
};

export const CATEGORY_LABELS: Record<string, string> = {
  "familias-sucessoes": "Famílias e Sucessões",
  societario: "Societário",
  contratos: "Contratos",
  imobiliario: "Imobiliário",
  previdenciario: "Previdenciário",
  consumidor: "Consumidor",
  geral: "Geral",
};

const summaryFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  coverImage
`;

/**
 * O blog nunca pode derrubar o site.
 *
 * Se o Sanity estiver fora do ar, o dataset não existir ainda ou as
 * credenciais estiverem erradas, a página de artigos aparece vazia e a
 * landing page continua no ar normalmente — em vez de quebrar o build
 * ou devolver erro 500 para quem só queria o telefone do escritório.
 */
async function safeFetch<T>(operation: string, run: () => Promise<T>, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    return await run();
  } catch (error) {
    // Só a mensagem: o objeto de erro completo do Sanity polui o log do build
    // com headers e responseBody a cada página gerada.
    const detalhe = error instanceof Error ? error.message : String(error);
    console.error(`[sanity] ${operation} falhou: ${detalhe}`);
    return fallback;
  }
}

export async function getAllPosts(): Promise<PostSummary[]> {
  return safeFetch(
    "getAllPosts",
    () =>
      sanityClient.fetch<PostSummary[]>(
        groq`*[_type == "post" && defined(slug.current)]
          | order(publishedAt desc) { ${summaryFields} }`,
        {},
        { next: { revalidate: 60 } },
      ),
    [],
  );
}

export async function getPostSlugs(): Promise<string[]> {
  return safeFetch(
    "getPostSlugs",
    () =>
      sanityClient.fetch<string[]>(
        groq`*[_type == "post" && defined(slug.current)].slug.current`,
      ),
    [],
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return safeFetch(
    "getPostBySlug",
    () =>
      sanityClient.fetch<Post | null>(
        groq`*[_type == "post" && slug.current == $slug][0] {
          ${summaryFields},
          body
        }`,
        { slug },
        { next: { revalidate: 60 } },
      ),
    null,
  );
}
