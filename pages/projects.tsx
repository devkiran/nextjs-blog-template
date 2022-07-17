import type { NextPage } from "next";
import projects from "data/projects";
import { ProjectCard, Layout } from "components";
import { NextSeo } from "next-seo";

const Projects: NextPage = () => {
  return (
    <Layout>
      <>
        <NextSeo title="My Projects" description="My Projects" />
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-lg">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Projects;
