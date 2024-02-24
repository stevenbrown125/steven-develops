import {
    getAllProjects,
    getProjectBySlug,
} from "@/lib/sanityQueries";
import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
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
    const project: Project = await getProjectBySlug(slug);
    // const { title, description } = await getSiteMetaData();
    // const pageTitle = `${title} | ${post.title}`;
    // const pageDescription = post.excerpt ? post.excerpt : description;
    return {
    };
}

export default async function AllProjectsPage({ params }: Page) {
    if (!params) return {}

    const project: Project = await getProjectBySlug(params.slug);


    return (
        <></>
    );
}
