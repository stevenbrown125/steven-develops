import { createClient } from '@sanity/client'
import { cache } from "react";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_API_KEY,
  apiVersion: "2023-05-03",
  dataset: "production",
  useCdn: false,
});

const clientFetch = cache(client.fetch.bind(client));

export default clientFetch;