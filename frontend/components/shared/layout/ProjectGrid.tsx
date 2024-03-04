import ProjectCard from "@/components/features/Portfolio/ProjectCard"
import { Project } from "@/types"

interface ProjectGridProps {
  title: string
  projects: Project[]
}
const ProjectGrid: React.FC<ProjectGridProps> = ({ title, projects }) => {
  return (
    <div className="relative flex-grow mx-auto max-w-screen-2xl animate-fade-in-slide-down">
      <h2 className="heading-hr">All {title} Projects</h2>
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4"
        itemScope
        itemType="http://schema.org/ItemList"
      >
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <ProjectCard project={project} key={`post-${i}`} />
          ))
        ) : (
          <p className="col-span-3 px-2 pt-4">
            Nothing yet! Stay tuned.. perhaps subscribe to my RSS feed?
          </p>
        )}
      </section>
    </div>
  )
}

export default ProjectGrid
