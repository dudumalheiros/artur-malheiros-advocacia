import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImage } from "sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

export const sanityClient = createClient({
  // O placeholder mantém o cliente construível antes do Sanity ser criado;
  // nenhuma query chega a rodar enquanto `isSanityConfigured` for false.
  projectId: isSanityConfigured ? projectId : "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: SanityImage) => builder.image(source);
