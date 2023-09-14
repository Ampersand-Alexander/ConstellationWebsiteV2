//TODO: spice it up with some space themed intros

import React, { useEffect } from "react";
import gsap from "gsap";

const PreLoader: React.FC = () => {
    useEffect(() => {
        // Disable scroll on mount
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline();

        // Preloader Animation
        const preLoaderAnim = () => {
            tl.to(".texts-container", {
                duration: 0,
                opacity: 1,
                ease: "Power4.easeOut",
            })
                .from(".texts-container span", {
                    duration: 2,
                    delay: 1,
                    y: 120,
                    skewY: 15,
                    ease: "Power4.easeOut",
                })
                .to(
                    ".preloader",
                    {
                        duration: 2,
                        opacity: 0,
                        ease: "Power4.easeOut",
                        onComplete: mobileLanding,
                    },
                )
                .to(".preloader", {
                    duration: 0.1,
                    css: { display: "none" },
                });
        };

        const mobileLanding = () => {
            if (window.innerWidth < 763) {
                tl.from(".landing__main2", {
                    duration: 1,
                    delay: 0,
                    opacity: 0,
                    y: 80,
                    ease: "expo.easeOut",
                });
            }

            // Enable scroll when animation is complete
            document.body.style.overflow = "auto";
            document.body.classList.add("hide-scrollbar");
        };

        preLoaderAnim();
    }, []); // Empty dependency array to run the animation only on mount

    return (
        <div
            className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[20px] sm:text-[32px] md:text-[45px] lg:text-[70px]"
            style={{
                height: "100vh",
                width: "100%",
                background: "#000000",
                color: "#FFFFFF",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 55,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden !important",
            }}
        >
            <div
                className="texts-container w-500 flex h-100 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#FFFFFF] opacity-0 sm:gap-[20px] sm:text-[30px] md:text-[45px] lg:text-[70px]"
                style={{
                    height: "100px",
                }}
            >
                <span>Greetings.</span>
                <div className="sub hidden"></div>
            </div>
        </div>
    );
};

export default PreLoader;