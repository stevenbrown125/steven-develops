export interface CanonicalRef {
  url: string;
  siteName?: string;
}

export interface ExcerptPost {
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    url?: string;
  };
  image: string;
  alt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  canonical: CanonicalRef;
  isExcerpt: true;
}
