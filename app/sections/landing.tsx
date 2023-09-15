// TODO : 
// title doesnt fade in on initial load, 
// needs a scroll down text
// lock scroll on initial load
import { motion } from "framer-motion";

import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import Spline from "@splinetool/react-spline";

const Landing = () => {
    return (
        <motion.section
            className="relative flex h-[100vh] w-full justify-center overflow-y-scroll hide-scrollbar"
            id="home"
            initial="initial"
            animate="animate"
        >
            <div className="absolute inset-0 z-0">
                <video className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
                    <source src="/tempbck.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
            </div>
            <div className="x-center y-center z-11">
                <Spline scene="https://prod.spline.design/8cPpnsbOgnRFs5wH/scene.splinecode" className="w-[50%] h-full z-1" />
            </div>
        </motion.section>
    );
};

export default Landing;