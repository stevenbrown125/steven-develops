import {
    getAllProjects,
    getProjectBySlug,
} from "@/lib/sanityQueries";
import { Page } from "@/types/Page";
import { Project as IProject } from "@/types/Project";
import Project from "@/components/ui/Portfolio/Project";
import { Metadata } from "next";

export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Page): Promise<Metadata> {
    if (!params) return {}

    const { slug } = params;
    const project: IProject = await getProjectBySlug(slug);
    // const { title, description } = await getSiteMetaData();
    // const pageTitle = `${title} | ${post.title}`;
    // const pageDescription = post.excerpt ? post.excerpt : description;
    return {
    };
}

export default async function AllProjectsPage({ params }: Page) {
    if (!params) return {}

    const project: IProject = await getProjectBySlug(params.slug);


    return (
        <Project project={project}></Project>
    );
}
