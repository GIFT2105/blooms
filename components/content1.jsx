import Link from 'next/link'
import React from 'react'


const Content1 = () => {
  return (
    <main className="flex md:mt-32   flex-col items-center text-center  w-screen  ">
      <div className='flex flex-col text-center w-screen  justify-center gap-4 items-center'>
        <h1 className='sm:text-4xl font-extrabold font-news '>WHO WE ARE ?</h1>
        <p className='mt-4  text-center  font-newsa  ' >
          BloomPath is a revolutionary app
          meticulously crafted to empower individuals in South Africa,
          particularly students at tech universities,
          in making informed decisions about their career paths.
          Designed with precision and foresight,
          this app addresses the crucial need to avoid hasty
          and regrettable career choices,
          offering a comprehensive toolkit
          for career exploration and planning.
        </p>
        <Link id='buttonG' href={"/LoginPage"} className="bg-blue-500 hover:bg-blue-700 font-newsas   text-white font-bold py-2 px-4 rounded mt-4">Read More</Link>
      </div>

    </main>
  )
}

export default Content1
