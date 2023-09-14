"use client";
import Link from "next/link";
import React from "react";

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
        <nav>
            <Link
            href="#home"
                data-blobity-magnetic="false"
                onClick={handleScroll}
                aria-label="Scroll to Home Section"
                >
                <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
        Home
                </h4>
            </Link>

            <Link
                href="#about"
                data-blobity-magnetic="false"
                onClick={handleScroll}
                aria-label="Scroll to About Section"
            >
                <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
        About Me
                </h4>
            </Link>

            <Link
                href="#projects"
                data-blobity-magnetic="false"
                onClick={handleScroll}
                aria-label="Scroll to About Section"
            >
                <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
        Projects
                </h4>
            </Link>

            <Link
                href="#contact"
                data-blobity-magnetic="false"
                onClick={handleScroll}
                aria-label="Scroll to Contact Section"
            >
                <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
        Contact
                </h4>
            </Link>
        </nav>
);
};

export default NavBar;