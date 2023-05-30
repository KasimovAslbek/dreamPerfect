import React from 'react';
import bed from '../img/bed.png';
import drop from '../img/drop.png';
import woman from '../img/woman.png';
import stars from '../img/stars.png';
import family from '../img/family.png';

function Coursefor() {
  return (
    <div className='text-gray-600 mb-16 sm:mb-24'>
      <div className='mx-8 mt-10 lg:mx-36'>
        <h2 className='text-2xl sm:text-4xl font-extrabold text-center sm:text-start'>
          Who is this course for?
        </h2>
        <p className='font-semibold text-lg text-center sm:text-start sm:text-2xl pt-2.5'>
          Moms who want:
        </p>
      </div>
      <div className='mt-20 px-8 lg:px-0 flex flex-wrap justify-center gap-x-6 gap-y-16'>
        <div className='w-full lg:w-1/3 xl:w-1/4 relative min-h-[115px] bg-indigo-500 text-white rounded-lg'>
          <img
            className='mx-auto absolute -top-10 left-1/3 sm:left-1/2 sm:-ml-16 lg:left-1/3 lg:ml-5'
            src={bed}
            alt=''
          />
          <p className='flex items-center justify-center pt-8 mb-2 px-4'>
            Get enough sleep. Sleep is a basic human need
          </p>
        </div>
        <div className='w-full lg:w-1/3 xl:w-1/4 border relative min-h-[115px] bg-white rounded-lg'>
          <img
            className='mx-auto absolute -top-10 left-1/3 sm:left-1/2 sm:-ml-16 lg:left-1/3 lg:ml-5'
            src={drop}
            alt=''
          />
          <p className='flex items-center justify-center pt-8 mb-2 px-4'>
            Understand why the baby is crying and how to help him. Read each signal and find a causal relationship
          </p>
        </div>
        <div className='w-full lg:w-1/3 xl:w-1/4 relative min-h-[115px] bg-indigo-500 text-white rounded-lg'>
          <img
            className='mx-auto absolute -top-10 left-1/3 sm:left-1/2 sm:-ml-16 lg:left-1/3 lg:ml-5'
            src={woman}
            alt=''
          />
          <p className='flex items-center justify-center pt-8 mb-2 px-4'>
            Have free time for yourself. Engage in new hobbies, work, fitness, and romance. Free plan your day
          </p>
        </div>
        <div className='w-full lg:w-1/3 xl:w-1/4 border relative min-h-[115px] bg-white rounded-lg'>
          <img
            className='mx-auto absolute -top-10 left-1/3 sm:left-1/2 sm:-ml-16 lg:left-1/3 lg:ml-5'
            src={stars}
            alt=''
          />
          <p className='flex items-center justify-center pt-8 mb-2 px-4'>
            Putting your baby to bed is quick and easy. No more "dancing with tambourines". Reduce your presence in the room
          </p>
        </div>
        <div className='w-full lg:w-1/3 xl:w-1/4 relative min-h-[115px] bg-indigo-500 text-white rounded-lg'>
          <img
            className='mx-auto absolute -top-10 left-1/3 sm:left-1/2 sm:-ml-16 lg:left-1/3 lg:ml-5'
            src={family}
            alt=''
          />
          <p className='flex items-center justify-center pt-8 mb-2 px-4'>
            Build healthy relationships with your child
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coursefor;
