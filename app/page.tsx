'use client'

import Image from 'next/image'
import Spline from '@splinetool/react-spline';

import PreLoader from "./components/other/PreLoader";


import Introduction from "./sections/introduction"
import Ruby from "./sections/ruby"

export default function Home() {
  return (
    <>
      <PreLoader />
      <main
                className="flex flex-col items-center justify-center bg-white"
            ></main>
        <Introduction />
        <Ruby />
    </>
  )
}
