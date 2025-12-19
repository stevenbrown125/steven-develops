export interface Tag {
  title: string;
  slug: string;
  icon: string;
}

export interface Taggable {
  slug: string;
  tags?: string[];
}
