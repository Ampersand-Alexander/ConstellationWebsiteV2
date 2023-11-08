import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import Spline from "@splinetool/react-spline";
import AnimatedBody from "../animations/AnimatedBody";

const Skills = () => {
    return (
        <section
            className=""
            id="greetings"
            style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 25, 0.7)",
                zIndex: 1,
                paddingTop: "200px",
                position: "relative",
                display: "flex",
                flexDirection: "row"
        }}>
            <div className="body-text">
                <AnimatedTitle
                        delay={5.0}
                        text={"Skills"}
                        className={"mb-0 mt-500 text-left text-[40px] font-bold leading-[1.2em] tracking-tighter sm:text-[45px] md:mb-0 md:text-[60px] lg:text-[80px]"}
                        wordSpace={"mr-[18px]"}
                        charSpace={"mr-[0.001em]"}
                />
            </div>      
        </section>
        
    );
};

export default Skills;