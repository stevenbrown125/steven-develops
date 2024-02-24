import { PortableTextBlock } from "@portabletext/types";
import { Photo } from "./Photo";
import { Technology } from "./Technology";

export interface Project {
    title: string;
    slug: string;
    description: string;
    icon: Photo;
    technologies: Technology[];
    startDate: string;
    endDcompletionDate: string;
    liveURL: string;
    body: PortableTextBlock;

}