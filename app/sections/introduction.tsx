// TODO : 
// title doesnt fade in on initial load, 
// needs a scroll down text
// lock scroll on initial load
// cursor text

import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Introduction = () => {
    return (
        <section
            className="relative z-300 w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-30 lg:pb-56"
            id="about"
            style={{
                backgroundImage: `url(${"/introfadebckground.png"})`, // Set the background image here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#000000', // Fallback background color
            }}
        >
            <div className="mx-auto flex w-[100%] flex-col items-start lg:max-w-[1212.8px]">
                <div className="mb-16 lg:mb-32"></div> {/* Add whitespace above */}
                <AnimatedTitle
                    text={"I'm Alexander, an Aspiring Software Engineer."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[1.2em] tracking-tighter text-[#FFFFFF] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[18px]"}
                    charSpace={"mr-[0.001em]"}
                />
                <div className="mb-16 lg:mb-80"></div> {/* Add whitespace below */}
            </div>
        </section>
    );
};

export default Introduction;