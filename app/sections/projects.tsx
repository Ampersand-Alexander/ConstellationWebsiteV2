import React from "react";
import Link from "next/link";

const Projects = () => {
  const projectCards = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "/project1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      link: "/project2",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      link: "/project3",
    },
  ];

  return (
    <section
            className="relative z-300 w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-30 lg:pb-56"
            id="projects"
        >
      <div className="mx-auto flex w-[100%] flex-col lg:flex-row lg:gap-20 relative z-10 w-full flex items-center justify-center overflow-hidden bg-[#000000] bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56" id="greetings h-[100%]">
        {projectCards.map((project, index) => (
          <div className="project-card text-[#000000] background-" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.link}>
              <h1 className="view-button">View Project</h1>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
