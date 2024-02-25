import { PortableTextBlock } from "@portabletext/types";
import { Photo } from "./Photo";
import { Technology } from "./Technology";

export interface Project {
    title: string;
    slug: string;
    description: string;
    image: Photo;
    technologies: Technology[];
    startDate: string;
    completionDate: string;
    liveURL: string;
    body: PortableTextBlock;
}

export interface ProjectProps {
    project: Project;
}