// types/listing.ts

import { Chronological } from "./Chronological";

export type ListingKind = "blog" | "excerpt";

export interface ListablePost {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  image: string;
  alt: string;
  tags?: string[];
  category: string;
  kind: ListingKind;
}

export interface Listable extends Chronological {
  slug: string;
  title: string;
  image: string;
  alt: string;
  category: string;
}
