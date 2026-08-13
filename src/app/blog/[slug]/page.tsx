import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/Button";
import { BlogPostingJsonLd } from "@/components/JsonLd";
import { urlForImage } from "@/sanity/client";
import {
  CATEGORY_LABELS,
  getPostBySlug,
  getPostSlugs,
} from "@/sanity/queries";
import { whatsappLink } from "@/lib/contact";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <Image
          src={urlForImage(value).width(1400).url()}
          alt={value.alt ?? ""}
          width={1400}
          height={900}
          className="rounded-lg w-full h-auto"
        />
        {value.alt && (
          <figcaption className="text-center text-xs text-muted-foreground mt-2">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const ogImage = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(630).url()
    : undefined;

  return (
    <div className="min-h-screen flex flex-col">
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        publishedAt={post.publishedAt}
        imageUrl={ogImage}
      />
      <Header />

      <main className="flex-1 bg-background pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Todos os artigos
          </Link>

          <p className="text-[11px] uppercase tracking-[0.15em] text-gold font-body font-medium mb-3">
            {CATEGORY_LABELS[post.category] ?? post.category}
          </p>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            {post.title}
          </h1>

          <time
            dateTime={post.publishedAt}
            className="font-body text-sm text-muted-foreground"
          >
            {formatDate(post.publishedAt)}
          </time>

          <div className="w-12 h-px bg-gold my-8" />

          {post.coverImage && (
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-10 bg-navy">
              <Image
                src={urlForImage(post.coverImage).width(1400).height(788).url()}
                alt={post.coverImage.alt ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 42rem"
                priority
                className="object-cover"
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none font-body prose-headings:font-display prose-headings:text-foreground prose-a:text-gold prose-strong:text-foreground">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>

          <aside className="mt-16 border-t border-border pt-10 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Tem uma dúvida sobre o seu caso?
            </h2>
            <p className="font-body text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Este artigo tem caráter informativo e não substitui uma orientação
              jurídica individual.
            </p>
            <Button variant="gold" size="lg" className="px-8" asChild>
              <a
                href={whatsappLink(
                  `Olá, Dr. Artur. Li o artigo "${post.title}" e gostaria de tirar uma dúvida.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
              </a>
            </Button>
          </aside>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
