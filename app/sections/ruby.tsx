//todo resize spline for when page shrinks

import React from "react";
import Spline from "@splinetool/react-spline";
import AnimatedBody from "../animations/AnimatedBody";

const Ruby = () => {
    return (
        <section
            className="mx-auto flex w-[100%] flex-col lg:flex-row lg:gap-20 relative z-11 w-full flex items-center justify-center overflow-hidden bg-[#000000] bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 h-[100%]"
            id="greetings"
            style={{
                background: 'rgb(0,0,0)',
                backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 39%, rgba(19,19,19,1) 100%)',
            }}
        >
            <div className="flex w-[100%] mt-15 flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#FFFFFF] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed md:ml-40 lg:mb-16  lg:max-w-[90%] lg:text-[24px] lg:ml-80">
                <AnimatedBody text="Manipulating technology to do cool innovative things is my favorite pastime. This lead me to today where I have gotten into coding to bring my visions to life." />

                <AnimatedBody
                    delay={0.1}
                    text="From defining new possibilities to creating your most far fetched imagination, my goal is to share and make those ideas happen."
                />

                <AnimatedBody
                    delay={0.2}
                    text="Currently, I'm working on my own projects and striving towards higher heights, but I’m always willing to try to new opportunities in the journey forward."
                />
            </div>
            <Spline scene="https://prod.spline.design/8cPpnsbOgnRFs5wH/scene.splinecode" className="w-[50%] h-full" />
        </section>
        // <section className="mx-auto flex w-[100%] flex-col lg:flex-row lg:gap-20 relative z-11 w-full flex items-center justify-center overflow-hidden bg-[#000000] bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56" id="greetings h-[100%]">
        //     <div className="flex w-[100%] mt-15 flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#FFFFFF] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed md:ml-40 lg:mb-16  lg:max-w-[90%] lg:text-[24px] lg:ml-80">
        //         <AnimatedBody text="Manipulating technology to do cool innovative things is my favorite pastime. This lead me to today where I have gotten into coding to bring my visions to life." />

        //         <AnimatedBody
        //             delay={0.1}
        //             text="From defining new possibilities to creating your most far fetched imagination, my goal is to share and make those ideas happen."
        //         />

        //         <AnimatedBody
        //             delay={0.2}
        //             text="Currently, I'm working on my own projects and striving towards higher heights, but I’m always willing to try to new opportunities in the journey forward."
        //         />
        //     </div>
        //     <Spline scene="https://prod.spline.design/8cPpnsbOgnRFs5wH/scene.splinecode" className="w-[50%] h-full" />
        // </section>
    );
};

export default Ruby;
