import React from 'react';
import girl from '../img/girl.png';
import cloud1 from '../img/cloud1.png';
import cloud2 from '../img/cloud2.png';
import cloud3 from '../img/cloud3.png';
import cloud4 from '../img/cloud4.png';
import pinkCloud from '../img/pinkCloud.png';
import instagram from '../img/instagram.png';

function Walk() {
  return (
    <div className='xl:flex mt-10 md:mt-24 text-gray-600 mx-8 lg:mx-36 mb-16 lg:mb-24'>
      <div className='xl:w-1/3'>
        <h2 className='text-2xl sm:text-4xl font-extrabold text-center sm:text-start'>Let's walk this path together</h2>
        <p className='font-semibold text-lg text-center sm:text-start sm:text-2xl pt-2.5 md:w-2/3'>Ekaterina Parfenova - author and course leader</p>
        <img src={girl} alt='' />
      </div>
      <div className='xl:w-2/3 xl:mt-32 md:font-bold'>
        <div className='md:flex justify-center gap-24'>
          <div className='relative'>
            <img className='hidden md:block' src={cloud1} alt='' />
            <p className='pb-2.5 md:w-1/2 text-center md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
              Gathered <span className='text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text'>effective and soft solution methods</span> baby sleep problems
            </p>
          </div>
          <div className='md:h-fit md:mt-auto relative'>
            <img className='hidden md:block' src={cloud2} alt='' />
            <p className='pb-2.5 md:w-1/2 text-center md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
              <span className='text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text'>Improve sleep</span> while breast-feeding
            </p>
          </div>
        </div>
        <div className='hidden md:flex justify-center relative w-fit mx-auto'>
          <img src={pinkCloud} alt='' />
          <div className='flex w-2/3 text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2.5 cursor-pointer'>
            <img className='w-[30px] h-[30px]' src={instagram} alt='' />
            <p>Go to profile</p>
          </div>
        </div>
        <div className='md:flex justify-center md:gap-48'>
          <div className='h-fit mt-auto relative'>
            <img className='hidden md:block' src={cloud3} alt='' />
            <p className='pb-2.5 md:w-1/2 text-center md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
              Returned sleep to <span className='text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text'>3000+</span> families
            </p>
          </div>
          <div className='relative'>
            <img className='hidden md:block' src={cloud4} alt='' />
            <p className='pb-2.5 md:w-1/2 text-center md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
              More than <span className='text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text'>3 years</span> of daily practice and training
            </p>
          </div>
          <div className='flex md:hidden justify-center items-center text-white bg-gradient-to-r from-pink-300 to-pink-500 shadow-md rounded gap-2.5 cursor-pointer py-3 font-bold'>
            <img className='w-[30px] h-[30px]' src={instagram} alt='' />
            <p>Go to profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Walk;
