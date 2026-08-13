import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotos do blog vêm do CDN do Sanity.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    formats: ["image/avif", "image/webp"],
    // O Next 16 só otimiza qualidades desta lista (padrão: [75]).
    // 90 é para o retrato do Dr. Artur, que já chega comprimido do WhatsApp.
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
