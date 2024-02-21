"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Content2 = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'RESUME CHECKBOX TOOL',
            description: "A resume checkbox tool is a feature that allows users to easily check off completed tasks or sections when creating or updating their resumes. It provides a convenient way for users to track their progress and ensure they've included all necessary information.",
        },
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
            title: 'Character Assessment Tool',
            description: "If you find yourself uncertain about your next steps, consider undergoing a comprehensive character assessment to receive tailored recommendations through our career guidance tool.",
      },
        {
            url: 'https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Just want to explore your options?',
            description: "Embark on a journey of exploration and discovery. Let's navigate through endless career possibilities together.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <main className="flex flex-col items-center mt-16 text-center h-screen w-screen">
            <div className='flex flex-col text-center w-screen justify-center gap-4 items-center'>
                <h1 className='sm:text-4xl font-extrabold font-news '>Tools</h1>
                <div className='flex flex-row w-screen h-screen '>
                    <div className='h-screen w-screen'>
                        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                            <div
                                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                            >
                            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 text-white'>
                            <h1 className='text-4xl font-bold'>{slides[currentIndex].title}</h1>
                            <p className='text-center w-screen max-w-screen-lg break-words font-newsa'>
                                {slides[currentIndex].description}
                            </p>
                            <button className='bg-black py-2 px-4 rounded-md'>Read More</button>
                        </div>
                        
                        
                            </div>
                            {/* Left Arrow */}
                            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactLeft onClick={prevSlide} size={30} />
                            </div>
                            {/* Right Arrow */}
                            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                                <BsChevronCompactRight onClick={nextSlide} size={30} />
                            </div>
                            <div className='flex top-4 justify-center py-2'>
                                {slides.map((slide, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}
                                    >
                                        <RxDotFilled />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content2;
