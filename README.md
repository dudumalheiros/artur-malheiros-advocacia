# Artur Malheiros Advocacia

Site institucional e blog do escritório Artur Malheiros Advocacia (Recife/PE).

**Produção:** https://arturmalheiros.com

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS |
| CMS | Sanity 6 (painel em `/studio`) |
| Hospedagem | Vercel |
| Domínio | KingHost (DNS) → Vercel |

Requer **Node 20.9+**.

## Rodando local

```sh
npm install
cp .env.local.example .env.local   # preencha depois de criar o projeto no Sanity
npm run dev
```

O site sobe em http://localhost:3000. Sem as variáveis do Sanity ele funciona
normalmente — só a página de artigos fica vazia.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | build de produção |
| `npm start` | serve o build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript sem emitir |
| `npm test` | Vitest |

## Conectando o Sanity

1. Crie um projeto em [sanity.io/manage](https://sanity.io/manage)
2. Copie o **Project ID**
3. Preencha `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. Defina as mesmas variáveis na Vercel (Settings → Environment Variables)
5. Em **API → CORS origins** no painel do Sanity, libere `http://localhost:3000`
   e `https://arturmalheiros.com`

O painel de conteúdo fica em `/studio`.

## Estrutura

```
src/
  app/                 rotas (App Router)
    page.tsx           landing page
    blog/              listagem e post individual
    studio/            painel do Sanity
    sitemap.ts         sitemap.xml gerado
    robots.ts          robots.txt gerado
  components/          seções da landing + Button
  sanity/              schema, cliente e queries
  lib/
    contact.ts         telefone, e-mail e endereço — fonte única
    site.ts            URL pública do site
```

### Onde mexer no conteúdo fixo

- **Telefone, e-mail, endereço, Instagram:** `src/lib/contact.ts`
- **Áreas de atuação:** `src/components/SpecialtiesSection.tsx`
- **Texto do "Sobre":** `src/components/AboutSection.tsx`
- **Domínio do site:** `src/lib/site.ts`

Artigos do blog **não** ficam no código — são criados pelo `/studio`.

## Pendências

- [ ] Foto profissional do Dr. Artur (a seção "Sobre" ainda usa placeholder)
- [ ] Número de inscrição na OAB no rodapé (exigência do Provimento 205/2021)
- [ ] `og:image` padrão em `public/og-default.jpg` (1200×630)
- [ ] Favicon com o monograma da marca (hoje é o padrão do scaffold)
- [ ] Logo em vetor — o `BrandLogo.tsx` atual é uma aproximação em SVG
- [ ] Revisar textos promocionais à luz do Provimento 205/2021 da OAB
