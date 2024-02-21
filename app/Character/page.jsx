"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Nav from '../../components/nav';
import Quiz from '../../components/quizs';

const CharacterTest = () => {

  return (
    <main className="flex w-screen h-screen  flex-col items-center   text-black">
      <Nav />
      <h1 className='mt-5 text-center font-serif text-white bg-black rounded-md'>Not sure what to do?...take a character test and get recommendations</h1>
      <Quiz />
    </main>
  );
};

export default CharacterTest;