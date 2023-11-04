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
            /*style={{scaleY: scrollYProgress}}*/
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        >
            <div className="absolute inset-0 z-0" style={{height: "100vh"}}>
                <video ref={backgroundRef} className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
                    <source src="/fractal.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent" ref={backgroundRef} />
            </div>
        </motion.section>
    );
};

export default Landing;
