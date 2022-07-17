import type { NextPage } from "next";
import projects from "data/projects";
import ProjectCard from "components/ProjectCard";
import Layout from "components/Layout";

const Projects: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-lg">
          These are a collection of code snippets I have used in the past and
          saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
