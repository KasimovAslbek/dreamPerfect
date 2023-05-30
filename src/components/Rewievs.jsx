import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import response1 from '../img/response1.png';
import response2 from '../img/response2.png';
import leftVector from '../img/left-vector.png';
import rightVector from '../img/right-vector.png';
import star from '../img/bigStar.png';

SwiperCore.use([Pagination, Navigation]);

const images = [response1, response2, response1, response2, response1, response2];

function Reviews() {
  return (
    <div className='text-gray-500 ml-8 lg:ml-36'>
      <h2 className='text-2xl sm:text-4xl font-extrabold text-center'>Reviews of the previous course</h2>
      <p className='font-semibold text-lg text-center sm:text-2xl pt-2.5 md:w-1/3 mx-auto mb-10'>
        <span className='text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text'>
          More than 2,000 mothers
        </span>{' '}
        and their babies now sleep peacefully
      </p>
      <div className='relative flex justify-center sm:gap-4 items-center mb-7'>
        <div className='swiper-button-next cursor-pointer'>
          <img className='h-6 lg:h-8' src={leftVector} alt='' />
        </div>
        <div className='w-9/12 sm:w-72 mx-4'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            slidesOffsetBefore={15}
            slidesOffsetAfter={15}
            centeredSlides
            modules={[Pagination]}
            pagination={true}
            className='mySwiper text-gray-500'
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='w-full h-[475px] flex items-center justify-center mb-10'>
                  <img className='' src={item} alt='' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='swiper-button-prev cursor-pointer'>
          <img className='h-6 lg:h-8' src={rightVector} alt='' />
        </div>
      </div>
      <div className='flex justify-center max-w-[300px] mx-auto items-center text-white bg-gradient-to-r from-pink-300 to-pink-500 shadow-md rounded gap-2.5 cursor-pointer py-3 font-bold mb-24'>
        <img className='w-[30px] h-[30px]' src={star} alt='' />
        <p>Start learning</p>
      </div>
    </div>
  );
}

export default Reviews;
