'use client'

import Image from 'next/image'
import Spline from '@splinetool/react-spline';

import PreLoader from "./components/other/PreLoader";


import Greetings from "./sections/greetings"
import Ruby from "./sections/ruby"

export default function Home() {
  return (
    <>
      <PreLoader />
      <main
                className="flex flex-col items-center justify-center bg-black"
            ></main>
        <Greetings />
        <Ruby />
    </>
  )
}
