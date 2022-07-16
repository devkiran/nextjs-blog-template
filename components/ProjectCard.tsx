import type { Project } from "../types";

const ProjectCard = ({ project, key }: { project: Project; key: string }) => {
  return (
    <div className="space-y-3 rounded-lg border-2 p-4">
      <img src={project.image} alt={project.name} className="rounded-lg" />
      <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
      <p className="text-base">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
