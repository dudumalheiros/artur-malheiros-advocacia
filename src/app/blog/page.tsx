import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { urlForImage } from "@/sanity/client";
import { CATEGORY_LABELS, getAllPosts } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos e orientações sobre Direito das Famílias, Sucessões, Previdenciário, Imobiliário e Consumidor, escritos pelo Dr. Artur Malheiros.",
  alternates: { canonical: "/blog" },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background pt-32 pb-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-body font-medium mb-3">
              Conteúdo Jurídico
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Artigos
            </h1>
            <div className="w-12 h-px bg-gold mx-auto mb-4" />
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Orientações práticas sobre mudanças na lei e dúvidas frequentes —
              em linguagem clara, sem juridiquês.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-center font-body text-muted-foreground">
              Nenhum artigo publicado ainda. Volte em breve.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group bg-card border border-border hover:border-gold/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {post.coverImage && (
                      <div className="relative aspect-[16/10] bg-navy">
                        <Image
                          src={urlForImage(post.coverImage)
                            .width(800)
                            .height(500)
                            .url()}
                          alt={post.coverImage.alt ?? ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-gold font-body font-medium mb-2">
                        {CATEGORY_LABELS[post.category] ?? post.category}
                      </p>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-gold transition-colors">
                        {post.title}
                      </h2>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <time
                        dateTime={post.publishedAt}
                        className="font-body text-xs text-muted-foreground/70"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
