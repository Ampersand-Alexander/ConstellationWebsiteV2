//todo resize spline for when page shrinks

import React from "react";
import Spline from "@splinetool/react-spline";
import AnimatedBody from "../animations/AnimatedBody";

const Ruby = () => {
    return (
        <section className="mx-auto flex w-[100%] flex-col lg:flex-row lg:gap-20 relative z-10 w-full flex items-center justify-center overflow-hidden bg-[#000000] bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56" id="greetings h-[100%]">
            <div className="flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#FFFFFF] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed md:ml-40 lg:mb-16  lg:max-w-[90%] lg:text-[24px] lg:ml-80">
                <AnimatedBody text="My passion lies in creating software that is both beautiful and functional. I’ve been designing for over 8 years and recently started getting into programming." />

                <AnimatedBody
                    delay={0.1}
                    text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
                />

                <AnimatedBody
                    delay={0.2}
                    text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
                />
            </div>
            <Spline scene="https://prod.spline.design/8cPpnsbOgnRFs5wH/scene.splinecode" className="w-[50%] h-full" />
        </section>
    );
};

export default Ruby;
