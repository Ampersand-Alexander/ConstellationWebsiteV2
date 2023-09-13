// TODO : 
// title doesnt fade in on initial load, 
// needs a scroll down text
// lock scroll on initial load
import { motion } from "framer-motion";

import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Landing = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <div className="absolute inset-0">
                <video className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
                    <source src="/hero.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
            </div>
        </motion.section>
    );
};

export default Landing;