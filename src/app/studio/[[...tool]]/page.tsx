/**
 * Painel de administração do Sanity, servido em /studio.
 *
 * `noindex` para que o Google nunca coloque a tela de login nos resultados.
 * Enquanto as variáveis de ambiente não existirem, mostra as instruções
 * de configuração em vez de estourar erro 500.
 */
import type { Metadata, Viewport } from "next";

import { isSanityConfigured } from "@/sanity/env";
import { StudioSetupNotice } from "./SetupNotice";
import { Studio } from "./Studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Painel de conteúdo",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  if (!isSanityConfigured) return <StudioSetupNotice />;
  return <Studio />;
}
