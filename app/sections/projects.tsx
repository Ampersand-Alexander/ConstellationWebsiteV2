import React from "react";
import Link from "next/link";
import AnimatedBody from "../animations/AnimatedBody";
import Blur from "../components/container/blurbackground";

const Projects = () => {
  const projectCards = [
    {
      title: "Titan Rover Autonomous",
      link: "https://titan-rover.github.io/website/",
      background: "/rover.png",
    },
    {
      title: "Solenoid-Enabled Keyboard",
      description: "",
      link: "/project2",
      background: "/keyboard.png",
    },
    {
      title: "Arduino Based Project",
      description: "",
      link: "/project3",
      background: "/tba.png",
    },
  ];
  return (
      <section className="relative w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-30 lg:pb-56" 
                    id="projects"
                    style={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(0, 0, 25, 0.7)",
                      zIndex: 1,}}>
            <div className="absolute top-0 left-0 mx-auto flex w-[100%] flex-col lg:gap-10 relative z-10 w-full flex items-center justify-left overflow-hidden bg-center pt-16 pb-20 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 h-[100%]">
              {projectCards.map((project, index) => (
                <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer">
                  <div className="flex w-[100%] flex-col text-[18px] font-medium text-[#FFFFFF] sm:items-center sm:justify-center md:items-center md:text-[20px] lg:items-center lg:mb-16  lg:max-w-[90%] lg:text-[24px]">
                    <AnimatedBody delay={0.5} text={project.title}/>
                  </div>
                  <div className="project-card text-white rounded-lg p-6 w-full lg:w-200 h-200 border-2 border-customGrey relative" style={{ backgroundImage: `url(${project.background})`, backgroundSize: 'cover' }}>
                    <h2 className="overlay z-5"></h2>
                  </div>
                </Link>
              ))}
            </div>  
      </section>   
  );
};

export default Projects;
