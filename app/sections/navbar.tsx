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
        <nav className="fixed top-0 left-0 right-0 bg-[#E58989] shadow-lg z-50">
            <div className="container mx-auto">
                <ul className="flex space-x-20 p-4">
                    <li>
                        <Link
                            href="#home"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Home Section"
                        >
                            <h4 className="text-[12px] sm:text-[14px] md:text-[16px]">
                                Home
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to About Section"
                        >
                            <h4 className="text-[12px] sm:text-[14px] md:text-[16px]">
                                About Me
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#projects"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Projects Section"
                        >
                            <h4 className="text-[12px] sm:text-[14px] md:text-[16px]">
                                Projects
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contact"
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label="Scroll to Contact Section"
                        >
                            <h4 className="text-[12px] sm:text-[14px] md:text-[16px]">
                                Contact
                            </h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
