import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Hero = () => {
  return (
    <main id='ourHero' className="flex flex-row h-screen w-screen  ">
      <div className="mt-24   flex flex-col gap-8 ml-2 text-3xl  justify-around    w-3.5 h-3.5">

        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 mr-2 sm:text-xl     animate-bounce" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 sm:text-xl    mr-2 animate-bounce" />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-500 sm:text-xl   animate-bounce" />
        </a>

      </div>


      <div className="mt-32 xl:mt-64     flex flex-col text-center items-center justify-center  w-1/2 h-1/2 ">
        <h1 id='anim' className='font-extrabold md:text-4xl xl:text-5xl font-news sm:text-xl  '>BloomPath</h1>
        <h2 className='font-newsa text-xs mt-4 '>Navigating Your Career Journey with Wise Decisions</h2>
        <div className='gap-4 flex flex-row '>
          <Link href={"/LoginPage"} id='buttonG' className="bg-blue-500 hover:bg-blue-700     text-white font-bold py-2 px-4 rounded mt-4">Get Started</Link>
          <Link href={"/testPage"} id='buttonG' className="bg-green-500  hover:bg-green-300 text-white font-bold py-2 px-4 rounded mt-4">Learn More</Link>
        </div>

      </div>

      <div id="hero" className="mt-16 flex flex-col md:h-screen md:w-screen    rounded-lg  text-center items-center justify-center xl:h-screen  w-1/2 h-1/2 ">

      </div>
    </main>
  )
}

export default Hero