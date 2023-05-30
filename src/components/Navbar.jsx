import React, { useState } from 'react';

import logo from '../img/logo.png';
import instagram from '../img/instagram.png';
import hamburger from '../img/hamburger.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex items-center justify-between lg:py-5 lg:px-8 xl:px-28'>
      <div className='flex w-full lg:w-fit items-center justify-between py-7 lg:p-0 px-7'>
        <div className='lg:hidden'>
          <button
            className='block lg:hidden text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={hamburger} alt='' />
          </button>

          <div
            className={`flex lg:hidden bg-indigo-300 z-30 absolute top-0 left-0 w-full sm:w-96 items-center gap-14 ${
              menuOpen ? '' : 'hidden'
            }`}
          >
            <button onClick={() => setMenuOpen(!menuOpen)} className='absolute top-5 left-7'>
              <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='0.646447' y1='17.6464' x2='17.6464' y2='0.646447' stroke='#212121' />
                <line y1='-0.5' x2='24.0416' y2='-0.5' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 18 18)' stroke='#212121' />
              </svg>
            </button>
            <ul className='flex flex-col gap-8 text-xl font-lato text-[#212121] mx-auto sm:mx-14 my-16 sm:my-12'>
              <li>
                <a href='https://www.example.com/'>Course audience</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Program</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Tariff</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Author</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Reviews</a>
              </li>
              <li>
                <a href='https://www.example.com/'>Course fragment</a>
              </li>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='flex rounded gap-2 items-center max-w-[256px] px-6 pt-3 pb-2.5 text-start shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] font-medium'
              >
                <img src={instagram} alt='' />
                <p>Sleep consultant Erik Franklin</p>
              </button>
            </ul>
          </div>
        </div>
        <img src={logo} alt='' />
      </div>
      <div className='hidden lg:flex gap-4 xl:gap-14'>
        <ul className='flex items-center font-semibold gap-4 xl:gap-7'>
          <li>
            <a href='https://www.example.com/'>Course audience</a>
          </li>
          <li>
            <a href='https://www.example.com/'>Program</a>
          </li>
          <li>
            <a href='https://www.example.com/'>Tariff</a>
          </li>
          <li>
            <a href='https://www.example.com/'>Author</a>
          </li>
          <li>
            <a href='https://www.example.com/'>Reviews</a>
          </li>
          <li>
            <a href='https://www.example.com/'>Course fragment</a>
          </li>
        </ul>
        <button className='flex rounded gap-2 items-center max-w-[256px] px-6 pt-3 pb-2.5 text-start shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] font-medium'>
          <img src={instagram} alt='' />
          <p>Sleep consultant Erik Franklin</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
