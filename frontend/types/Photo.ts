export interface Photo {
  href: string;
  dimensions: {
    width: number;
    aspectRatio: number;
    height: number;
  }
  alt: string;
};
