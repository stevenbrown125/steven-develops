
import ProjectCard from "@/components/features/Portfolio/ProjectCard"
import { Project } from "@/types"

interface ProjectGridProps {
    title: string,
    projects: Project[]
}
const ProjectGrid = ({ title, projects }: ProjectGridProps) => {
    return (
        <div className="relative flex-grow max-w-screen-2xl mx-auto animate-fade-in-slide-down">
            <h2 className="heading-hr">All {title} Projects</h2>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6" itemScope itemType="http://schema.org/ItemList">
                {projects.map((project, i) => (
                    <ProjectCard project={project} key={`post-${i}`} />
                ))}
            </section>
        </div>
    )
}

export default ProjectGrid
