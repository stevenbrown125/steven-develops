export interface ProjectMetadata {
  title: string;
  slug: string;
  description: string;
  image: string;
  tabletImage?: string;
  mobileImage?: string;
  technologies: string[];
  startDate: string;
  completionDate: string;
  liveURL: string;
}

// This is what your app actually works with (includes the route slug)
export type Project = ProjectMetadata & {
  slug: string;
};

export interface ProjectProps {
  project: Project;
}
