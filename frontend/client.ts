import { createClient } from '@sanity/client'
import { cache } from "react";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_API_KEY,
  apiVersion: "2023-05-03",
  dataset: "production",
  useCdn: false,
});

const clientFetch = cache(client.fetch.bind(client));

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
export default clientFetch;