import React from "react";
import Link from "next/link";
import AnimatedBody from "../animations/AnimatedBody";

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
    <section className="relative w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-30 lg:pb-56" id="projects">
      <div className="absolute top-0 left-0 mx-auto flex w-[100%] flex-col lg:gap-10 relative z-10 w-full flex items-center justify-left overflow-hidden bg-[#000000] bg-center pt-16 pb-20 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 h-[100%]">
        {projectCards.map((project, index) => (
          <Link href={project.link} key={index}>
            <div className="flex w-[100%] flex-col text-[18px] font-medium text-[#FFFFFF] sm:items-center sm:justify-center md:items-center md:text-[20px] lg:items-center lg:mb-16  lg:max-w-[90%] lg:text-[24px]">
              <AnimatedBody delay={0.5} text={project.title}/>
            </div>
            
            <div className="project-card text-white rounded-lg p-6 w-full lg:w-200 h-200 border-2 border-customPink relative" style={{ backgroundImage: `url(${project.background})`, backgroundSize: 'cover' }}>
              <h2 className="overlay z-5">click to see more</h2>
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>               
                  <div className="hover-effect absolute top-0 left-0 w-full h-full bg-customPink opacity-0 rounded-lg transition-opacity duration-300"></div>

            </div>
          </Link>
        ))}
      </div>  
    </section>
  );
};

export default Projects;
