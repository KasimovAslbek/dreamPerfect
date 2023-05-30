import React from 'react';
import footer1 from '../img/footer1.png';
import footer2 from '../img/footer2.png';
import footer3 from '../img/footer3.png';

function Footer() {
  return (
    <>
      <div className='hidden lg:block w-full h-[1px] bg-gradient-to-r from-purple-300 to-indigo-500 bg-opacity-50'></div>
      <div className='mx-8 lg:mx-36 relative mb-7'>
        <div className='hidden lg:flex gap-24'>
          <img className='h-fit mt-auto' src={footer1} alt='' />
          <img className='h-fit my-auto' src={footer2} alt='' />
          <img className='h-fit mt-auto' src={footer3} alt='' />
        </div>
        <div className='lg:flex gap-16 text-center lg:text-start justify-end items-center lg:absolute top-0 right-0 mt-7 pb-7 space-y-2 lg:space-y-0'>
          <a className='block underline text-black opacity-50' href='https://www.example.com'>
            Legal information
          </a>
          <a className='block underline text-black opacity-50' href='https://www.example.com'>
            Agreement-offer
          </a>
          <p className='lg:w-1/3'>©2021 All rights reserved. IP Parfenova E.K. TIN 772088906245 OGRNIP 320774600467642</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
