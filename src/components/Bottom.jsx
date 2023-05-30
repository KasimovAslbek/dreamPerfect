import React from 'react';
import Navbar from "./Navbar";
import wolve from '../img/wolve2.png';
import instagram from '../img/instagram.png';
import logo from '../img/logo.png';
import moon from '../img/moon.png';
import star from '../img/starBottom.png';

function Bottom() {
  return (
    <div className='mb-5'>
      <div className='hidden lg:block'>
        <Navbar />
      </div>
      <div className='relative lg:hidden'>
        <img className='w-full object-cover' src={wolve} alt='' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center text-center text-white gap-2.5 cursor-pointer w-2/3'>
          <img className='w-[30px] h-[30px]' src={instagram} alt='' />
          <p>Sleep Consultant Ekaterina Parfenova</p>
        </div>
      </div>
      <div className='flex justify-center gap-4 -mt-5 lg:hidden'>
        <img className='h-fit mt-auto' src={star} alt='' />
        <img className='h-fit my-auto' src={logo} alt='' />
        <img className='h-fit mb-auto' src={moon} alt='' />
      </div>
    </div>
  );
}

export default Bottom;