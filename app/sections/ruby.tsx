import React from "react";
import Spline from "@splinetool/react-spline";
import AnimatedBody from "../animations/AnimatedBody";

const Ruby = () => {
    return (
        <section
            className="mx-auto flex w-full flex-col lg:flex-row lg:gap-20 relative z-11 items-center justify-center overflow-hidden bg-[#000000] bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 h-[100%]"
            id="greetings"
            style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 25, 0.7)",
                zIndex: 1,
                paddingTop: "200px",
                position: "relative", // Set the position to relative
                display: "flex",
                flexDirection: "row"
            }}
        >
            <div className="w-full md:w-1/4 lg:w-2/4 lg:transform -translate-x-2/4">
                <div className="flex w-full mt-15 flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#FFFFFF] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed md:ml-40 lg:mb-16 lg:max-w-[90%] lg:text-[24px] lg:ml-80">
                    <div className="body-text">
                        <AnimatedBody className="body-text" delay={0.3} text="Manipulating technology to do cool innovative things is my favorite pastime. This led me to today where I have gotten into coding to bring my visions to life." />
                    </div>
                    <div className="body-text">
                        <AnimatedBody
                            delay={0.5}
                            text="From defining new possibilities to creating your most far-fetched imagination, my goal is to share and make those ideas happen."
                        />
                    </div>
                    <div className="body-text">
                        <AnimatedBody
                            delay={0.7}
                            text="Currently, I'm working on my own projects and striving towards higher heights, but I’m always willing to try new opportunities in the journey forward."
                        />
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
                <Spline scene="https://prod.spline.design/8cPpnsbOgnRFs5wH/scene.splinecode" className="w-full h-full" />
            </div>
        </section>
    );
};

export default Ruby;
