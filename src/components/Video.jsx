import React from 'react';
import videoBig from '../img/video.png';
import videoMini from '../img/videoMini.png';

function Video() {
  return (
    <div className='mx-8 mb-20 lg:mb-32 lg:mx-36 sm:relative'>
      <div className='block sm:absolute text-gray-500 text-center sm:text-start sm:text-white font-bold sm:top-0 sm:left-0 sm:w-1/2 text-2xl md:text-3xl xl:text-4xl sm:p-2.5 xl:p-8 pb-8 sm:pb-0'>
        <h2>Touch course snippets before purchase</h2>
        <p className='font-semibold text-sm hidden sm:block md:text-xl xl:text-2xl pt-1 xl:pt-3 md:w-2/3'>
          Visual demonstration of the learning process
        </p>
      </div>

      <img
        className='hidden sm:block w-full object-cover cursor-pointer bg-indigo-400'
        src={videoBig}
        alt=''
      />

      <div>
        <img
          className='sm:hidden w-full object-cover cursor-pointer bg-indigo-400'
          src={videoMini}
          alt=''
        />
      </div>
    </div>
  );
}

export default Video;
