/**
 * O site precisa buildar e publicar mesmo antes do Sanity existir.
 * Enquanto as variáveis não estiverem definidas, `isSanityConfigured` é false
 * e o blog simplesmente aparece vazio — nada quebra.
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const isSanityConfigured = projectId.length > 0;
