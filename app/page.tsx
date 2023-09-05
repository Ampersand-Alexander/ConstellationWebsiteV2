'use client'

// ruby does not have text to the left of it, 
// color pallet is boring, 
// something about the greeting animation is boring,

import Image from 'next/image'
import Spline from '@splinetool/react-spline';

import PreLoader from "./components/other/PreLoader";


import Introduction from "./sections/introduction"
import Ruby from "./sections/ruby"
import Projects from './sections/projects';

export default function Home() {
  return (
    <>
      <PreLoader />
      <main
                className="flex flex-col items-center justify-center bg-white"
            ></main>
        <Introduction />
        <Ruby />
        <Projects />
    </>
  )
}
