"use client"
import { useState } from 'react';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from 'next/link';


export default function UserInfo() {
  const { data: session } = useSession();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-row gap-4 mt-8  w-screen  h-screen">

      {/*Dashboard Element 1*/}

      <div className="flex flex-row items-start justify-start w-screen  h-screen">
        <div className="shadow-2xl  h-auto  w-full items-center rounded-xl  bg-zince-300/10 flex flex-col gap-2 ">
          <img src="nextst.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

          <div className='flex flex-col gap-7 w-auto items-center text-center '>
            <h1 className='text-4xl font-news  mt-14'>BloomPath</h1>
            <p className='text-center font-newsa  mr-4'>Bloompath is your personal guide through the garden of career possibilities, where each petal represents a unique path waiting to be discovered.</p>
            <p className='text-center font-newsa  mr-4'>Like a delicate rose, your career journey unfolds, guided by your passions and interests.</p>
            <p className='text-center font-newsa  mr-4'>As you explore, Bloompath helps you bloom into your full potential, offering tailored suggestions and insights into fields that align with your natural talents.</p>
            <p className='text-center font-newsa mb-16  mr-4'> Let Bloompath be the sunlight that illuminates
              your path to a fulfilling future.</p>
          </div>


        </div>
      </div>

      {/*Dashboard Element 2*/}

      <div className="flex flex-row items-start justify-center w-screen h-screen">
        <div className="shadow-2xl  items-center rounded-xl w-full bg-zince-300/10 flex flex-col gap-2 ">
          <img src="conf.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />
          <div className='flex flex-col gap-4 w-auto items-center text-center '>
            <h1 className='text-xl font-news  mt-14'>Unsure of Your Path?</h1>
            <h1 className='text-xl font-newsa  mt-4'>Take Our Character Test for Personalized Career Recommendations!</h1>
            <p className='text-center font-newsa  mr-4'>
              Embark on a journey of self-discovery with Bloompath's Character Test, designed to uncover your unique traits and preferences. </p>
            <p className='text-center font-newsa  mr-4'>This immersive experience guides you through a series of insightful questions, illuminating aspects of your personality and interests. </p>
            <p className='text-center font-newsa  mr-4'>Based on your responses, Bloompath crafts personalized career recommendations, helping you navigate the vast landscape of possibilities.</p>
            <p className='text-center font-newsa  mr-4'> Let your character be the compass that leads you to a fulfilling career path.</p>
            <Link href={'/Character'} className="bg-blue-500 mb-5 rounded-md font-newsa text-white  px-6 py-2 mt-3">Take the Test</Link>
          </div>


        </div>
      </div>



      {/*User Profile*/}
      <div className="flex flex-row mr-14  items-start justify-end w-1/3  h-1/2">
        <div className="shadow-2xl w-full justify-center  items-center rounded-xl h-full  bg-zince-300/10 flex flex-col gap-2 ">
          <h1 className=" font-news text-2xl mb-4 mt-4  ">Profile</h1>
          <Image src="/user_1177568.png" alt="your-name" width={60} height={60} className="rounded-full" />
          <div className="text-base font-newsa">
            Name: <span className="text-base font-newsa">{session?.user?.name}</span>
          </div>
          <div className="text-base font-newsa">
            Email: <span className="text-base font-newsa ">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-blue-500 font-newsa text-white  px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      </div>


    </div >
  );
}
