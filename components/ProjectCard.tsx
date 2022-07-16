import type { Project } from "types";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project; key: string }) => {
  return (
    <div className="rounded-lg border-2 p-4">
      <Link href={project.url}>
        <a>
          <div className="space-y-3">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg"
            />
            <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
            <p className="text-base">{project.description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
