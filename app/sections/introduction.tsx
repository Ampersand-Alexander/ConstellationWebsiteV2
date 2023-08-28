import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Introduction = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#FFFFFF] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"I'm Alexander, an Aspiring Software Engineer."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[1.2em] tracking-tighter text-[#000000] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
        </section>
    );
};

export default Introduction;