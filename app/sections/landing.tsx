import { motion, useTransform, useScroll} from "framer-motion";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedTitle from "../animations/AnimatedTitle";

const Landing = () => {
    const { scrollYProgress } = useScroll();
    const titleRef = useRef(null);
    const backgroundRef = useRef(null);
    return (
        <motion.section
            className="relative flex h-[100vh] w-full justify-center items-center overflow-y-scroll hide-scrollbar"
            id="home"
            initial="initial"
            animate="animate"
            style={{scaleX: scrollYProgress}}
        >
            <div className="absolute inset-0 z-0">
                <video ref={backgroundRef} className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
                    <source src="/tempbck.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent" ref={backgroundRef} />
            </div>

            <div className="absolute top-1/8 left-1/2 transform -translate-x-3/4 -translate-y-1/2 text-white text-center landing-content">
                <AnimatedTitle
                    delay={5.0}
                    text={"I'm Alexander, an Aspiring Software Engineer."}
                    className={"mb-0 text-left text-[40px] font-bold leading-[1.2em] tracking-tighter sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"}
                    wordSpace={"mr-[18px]"}
                    charSpace={"mr-[0.001em]"}
                    style={{ y: translateYTitle }}
                    ref={titleRef}
                />
            </div>
        </motion.section>
    );
};

export default Landing;
