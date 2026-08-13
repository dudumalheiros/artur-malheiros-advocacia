import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/**
 * Fontes auto-hospedadas pelo Next — sem @import bloqueando a renderização,
 * que era o gargalo de LCP na versão Vite.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Artur Malheiros | Advocacia em Recife",
    template: "%s | Artur Malheiros Advocacia",
  },
  description:
    "Escritório de advocacia em Recife com atuação em Direito das Famílias, Sucessões, Societário, Contratos, Imobiliário, Previdenciário e Consumidor.",
  authors: [{ name: "Artur Malheiros Advocacia" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Artur Malheiros Advocacia",
    title: "Artur Malheiros | Advocacia em Recife",
    description:
      "Direito das Famílias, Sucessões, Societário e Contratos em Recife. Mais de 15 anos de trajetória jurídica.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1a2a4e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
