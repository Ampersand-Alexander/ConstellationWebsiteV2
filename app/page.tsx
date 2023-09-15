'use client'

// ruby does not have text to the left of it, 
// color pallet is boring, 
// something about the greeting animation is boring,

import Image from 'next/image'
import Spline from '@splinetool/react-spline';

import PreLoader from "./components/other/PreLoader";

import Navbar from "./sections/navbar";
import Landing from "./sections/landing";
import Introduction from "./sections/introduction";
import Ruby from "./sections/ruby";
import Projects from './sections/projects';
import Skills from './sections/skills';

export default function Home() {
  return (
    <>
      <PreLoader />
      <main
                className="flex flex-col items-center justify-center bg-white overflow-y-scroll hide-scrollbar"
            ></main>
        <Navbar />
        <Landing />
        <Introduction />
        <Ruby />
        <Projects />
        <Skills />

    </>
  )
}
