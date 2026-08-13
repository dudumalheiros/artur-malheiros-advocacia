import type { SchemaTypeDefinition } from "sanity";

/**
 * Estrutura de um post do blog.
 *
 * Os títulos e descrições são em português porque quem usa este painel
 * é o Dr. Artur, não um desenvolvedor.
 */
const post: SchemaTypeDefinition = {
  name: "post",
  title: "Artigo",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required().max(90),
      description: "O título que aparece no site e no Google.",
    },
    {
      name: "slug",
      title: "Endereço no site",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
      description:
        'Gerado a partir do título. Ex.: "pix-pensao" vira /blog/pix-pensao',
    },
    {
      name: "excerpt",
      title: "Resumo",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(200),
      description:
        "2 ou 3 linhas. É o que aparece na listagem, no Google e na prévia do WhatsApp.",
    },
    {
      name: "coverImage",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Descrição da imagem",
          type: "string",
          description: "Para leitores de tela e para o Google.",
        },
      ],
      description:
        "Aparece na listagem e na prévia quando o link for compartilhado.",
    },
    {
      name: "category",
      title: "Área do Direito",
      type: "string",
      options: {
        list: [
          { title: "Famílias e Sucessões", value: "familias-sucessoes" },
          { title: "Societário", value: "societario" },
          { title: "Contratos", value: "contratos" },
          { title: "Imobiliário", value: "imobiliario" },
          { title: "Previdenciário", value: "previdenciario" },
          { title: "Consumidor", value: "consumidor" },
          { title: "Geral", value: "geral" },
        ],
        layout: "dropdown",
      },
      initialValue: "geral",
      validation: (rule) => rule.required(),
    },
    {
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    },
    {
      name: "body",
      title: "Texto do artigo",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Parágrafo", value: "normal" },
            { title: "Subtítulo", value: "h2" },
            { title: "Subtítulo menor", value: "h3" },
            { title: "Citação", value: "blockquote" },
          ],
          lists: [
            { title: "Lista com marcadores", value: "bullet" },
            { title: "Lista numerada", value: "number" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Descrição da imagem", type: "string" },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  orderings: [
    {
      title: "Mais recentes",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
};

export const schemaTypes: SchemaTypeDefinition[] = [post];
