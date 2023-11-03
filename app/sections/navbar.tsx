"use client";
import Link from "next/link";
import React from "react";
import AnimatedBody from "../animations/AnimatedBody";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        window.scrollTo({
            top: document.getElementById(href)?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(25, 25, 25, 0.15)', backdropFilter: 'blur(5px)' }}>
            <div className="container mx-auto">
                <ul className="flex space-x-6 p-4 sm:space-x-20">
                        <Link
                            href="#home"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Home Section"
                        >
                            <img src="/crown.png" alt="Logo" className="nav-item w-8 h-8" />
                        </Link>
                    <li className="nav-item">
                        <Link
                            href="#home"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Home Section"
                        >
                            <AnimatedBody delay={4.0} text="Home"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="#greetings"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to About Section"
                        >
                            <AnimatedBody delay={4.5} text="About Me"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="#projects"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Projects Section"
                        >
                            <AnimatedBody delay={5.0} text="Projects"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href="#contact"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Contact Section"
                        >
                            <AnimatedBody delay={5.5} text="Contact"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
