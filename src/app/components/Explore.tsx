'use client'
import react from 'react'
import { title } from 'process'
import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"

function Explore() {
  const Explore = [
    {
      id: 1,
      title1: '50+ Beautiful rooms',
      title2: 'inspiration',
      description: 'Our designer already made a lot of beautiful prototype of rooms that inspire you ',
      buttonText: 'Explore More',
      buttonLink: '#',
      image: '/images/sidebar1.png',
      roomType: '01 === Bed Room',
      roomName: 'Inner Peace',
    },
    {
      id: 2,
      image: '/images/sidebar2.png',
      roomType: '02 === Dining Room',
      roomName: 'Elegant Feast',
    },

    {
      id: 3,
      image: '/images/image7.png',
      roomType: '03 === Living Room',
      roomName: 'Cozy Vibes',

    },
    {
      id: 4,
      image: '/images/sidebar4.png',
      roomType: '04 === Work Place',
      roomName: 'Ideas Mind',

    },

  ];
  const [currentExplore, setCurrentExplore] = useState(0);
  const nextExplore = () => {
    setCurrentExplore((prev) => (prev + 1) % Explore.length);
  };
  const prevExplore = () => {
    setCurrentExplore((prev) => (prev - 1 + Explore.length) % Explore.length);
  };



  return (
    <section className='bg-[#FCF8F3] py-16 '>

      <div className='container mx-auto px-4 md:px-8 ml-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#3A3A3A] leading-tight mb-6'>
              {Explore[currentExplore].title1}
            </h1>
            <h1 className='text-4xl md:text-5xl font-bold text-[#3A3A3A] leading-tight mb-6'>
              {Explore[currentExplore].title2}
            </h1>
            <p className='text-gray-500 text-lg mb-8'>
              {Explore[currentExplore].description}
            </p>

            <a href={Explore[currentExplore].buttonLink}
              className='bg-[#B88E2F] hover:bg-yellow-700 text-white text-lg font-medium py-3 px-9 transition duration-300 '>
              {Explore[currentExplore].buttonText}
            </a>
          </div>
          <div className='relative group grid grid-cols-2 gap-4'>
            {[Explore[currentExplore], Explore[(currentExplore + 1) % Explore.length]].map((Explore, index) => (
              <div key={index} className='relative'>
                <img
                  src={Explore.image}
                  alt={Explore.roomName}
                  className='w-[372px] h-[486px] object-cover' />
                <div className='absolute bottom-6 left-10 bg-white bg-opacity-90 p-4 px-6'>
                  <p className='text-sm text-gray-500 mb-1'> {Explore.roomType}</p>
                  <h3 className='text-lg font-bold text-[#3A3A3A]'>{Explore.roomName}</h3>
                </div>
              </div>
            ))}
            <button onClick={nextExplore}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-4 text-[#B88E2F] hover:bg-yellow-300 transition duration-300'>
              <IoIosArrowForward />
            </button>
          
          </div>

        </div>

        <div className='flex justify-center mt-8 space-x-3'>
       {Explore.map((_, index) =>(
      <button 
      key={index}
      onClick={() => setCurrentExplore(index)}
      className={`w-3 h-3 rounded-full ${
        currentExplore === index ? 'bg-[#B88E2F]' : 'bg-gray-300'
      }`}>

      </button>



       ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;