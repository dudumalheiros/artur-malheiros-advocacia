import { ADDRESS, EMAIL, INSTAGRAM_HANDLE, PHONE_E164 } from "@/lib/contact";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Dados estruturados de escritório de advocacia.
 * É o que alimenta o painel lateral do Google em buscas locais
 * do tipo "advogado família Recife".
 */
export function LegalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    url: SITE_URL,
    email: EMAIL,
    telephone: `+${PHONE_E164}`,
    image: `${SITE_URL}/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Av. República do Líbano, 251, RioMar Trade Center, Torre 1, Sala 1206",
      addressLocality: "Recife",
      addressRegion: "PE",
      postalCode: "51110-160",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "Recife" },
    sameAs: [`https://instagram.com/${INSTAGRAM_HANDLE}`],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Direito das Famílias",
      "Sucessões",
      "Direito Societário",
      "Contratos",
      "Direito Imobiliário",
      "Direito Previdenciário",
      "Direito do Consumidor",
    ],
    description: ADDRESS,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Dados estruturados de artigo, usados em cada post do blog. */
export function BlogPostingJsonLd({
  title,
  description,
  slug,
  publishedAt,
  imageUrl,
}: {
  title: string;
  description?: string;
  slug: string;
  publishedAt: string;
  imageUrl?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    image: imageUrl ? [imageUrl] : undefined,
    author: { "@type": "Person", name: "Artur Malheiros" },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
