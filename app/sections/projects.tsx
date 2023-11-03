import React from "react";
import Link from "next/link";

const Projects = () => {
  const projectCards = [
    {
      title: "Course Manager API",
      link: "https://github.com/Ampersand-Alexander/course-manager",
      background: "/keyboard.png",
      button: "clicky"
    },
    {
      title: "Project 2",
      description: "",
      link: "/project2",
      background: "/keyboard.png",
      button: "Fast"
    },
    {
      title: "Project 3",
      description: "",
      link: "/project3",
      background: "/keyboard.png",
      button: "Powerful"
    },
  ];

  return (
    <section 
      className="relative w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-30 lg:pb-56"
      id="projects"
     >
      <div className="mx-auto flex w-[100%] flex-col lg:gap-20 relative z-10 w-full flex items-center justify-center overflow-hidden bg-[#000000] bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56" id="greetings h-[100%]">
        {projectCards.map((project, index) => (
          <div className="project-card text-[#000000] rounded-lg p-6 my-4 w-full lg:w-200 " key={index} style={{ backgroundImage: `url(${project.background})`, backgroundSize: 'cover' }}>
            <div className="overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.link}>
              <h1 className="view-button bg-[#000000]">{project.button}</h1>
            </Link>
          </div>
        ))}
      </div>  
    </section>
  );
};

export default Projects;
