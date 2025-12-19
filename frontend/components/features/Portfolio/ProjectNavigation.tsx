// components/features/Portfolio/ProjectNavigation.tsx

import { Project } from "@/types";
import ProjectNavCard from "./ProjectNavCard";

interface Props {
  previous: Project | null;
  next: Project | null;
}

const ProjectNavigation: React.FC<Props> = ({ previous, next }) => {
  if (!previous && !next) return null;

  return (
    <section className="grid gap-6 pt-4 sm:grid-cols-2">
      {previous && (
        <div className="order-1 sm:order-2">
          <ProjectNavCard project={previous} type="previous" />
        </div>
      )}

      {next && (
        <div className="order-2 sm:order-1">
          <ProjectNavCard project={next} type="next" />
        </div>
      )}
    </section>
  );
};

export default ProjectNavigation;
