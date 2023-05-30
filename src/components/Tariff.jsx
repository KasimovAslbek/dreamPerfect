import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const data = [
  { id: 1, title: 'Yourself', place: 100, desc : ["– access to the course for 6 months"] , firsPrice: "849$", currentPrice : 599},
  { id: 2, title: 'RESULT', place: 50, desc : ["– access to the course for 6 months", "– Feedback chat (up to 10 people) with the Curator:", "Chat work 6 weeks from the start The curator is a mentor, a stick, a carrot and support all rolled into one. Working hours of curators:", "Mon - Fri", "8:00 - 15:00 Moscow time " ], firsPrice: "12 590$", currentPrice : 859},
  { id: 3, title: 'PREMIUM', place: 4, desc : ["– access to the course for 6 months", "– individual accompaniment of a personal sleep consultant of the Dreamprf center Accompanying includes:", "– Duration of support 6 weeks", "– Analysis of a personal questionnaire and a Sleep diary", "– Strategy preparation", "– Video call 60 minutes", "– Reporting days once every 3-4 days (analysis of the Sleep diary and adjustment of work)", "– Final call 20-30 minutes"] , firsPrice: "21 490$", currentPrice : 14490},
  { id: 4, title: 'VIP', place: 1, desc : ["- access to the course for 6 months", "- personal support from Ekaterina Parfenova", "In the support includes:", "- Duration of support 6 weeks", "- Analysis of a personal questionnaire and sleep diary", "- Strategy preparation", "- 60-minute video call", "- Reporting days once every 3-4 days (analysis of sleep diary and adjustment of work)", "- Additional 2 video calls for 20 minutes each, if necessary", "- Final call 20-30 minutes"] , firsPrice: "", currentPrice : 30990},
];
function Tariff() {
    const [activeIndex, setActiveIndex] = useState(1);

      const handleSlideChange = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
      const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderCardDesc = (desc) => {
    if (isMobile) {
      return desc.map((item, index) => <p key={index}>{item}</p>);
    } else {
      return desc.slice(0, 2).map((item, index) => <p key={index}>{item}</p>);
    }
  };
  return (
    <div className='text-gray-500 mx-8  lg:mx-36'>
        <h2 className='text-2xl sm:text-4xl font-extrabold text-center md:text-start mb-10 lg:mb-0'>Tariff</h2>
        <div className='flex flex-col-reverse lg:flex-col'>
            <div className='mb-10 mt-16 lg:mt-0'>
                <p className='mb-8 font-semibold text-lg text-center sm:text-start sm:text-2xl pt-2.5'>Take advantage of <span className='text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text '>interest-free installments</span></p>
                <div className='text-gray-600'>
                    <ol className='flex flex-wrap gap-x-12 gap-y-1'>
                        <li className='flex items-center gap-1 w-full lg:w-1/3 xl:w-1/4'>
                            <svg width="6" height="6" className='min-w-[8px]' viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3" fill="url(#paint0_linear_1_2510)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_2510" x1="-8.84481e-08" y1="3.06667" x2="3.72571" y2="5.97757" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A3A1FB"/>
                                <stop offset="1" stopColor="#817FF1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            According to the passport, 18+
                        </li>
                        <li className='flex items-center gap-1 w-full lg:w-1/3 xl:w-1/4'>
                            <svg width="6" height="6" className='min-w-[8px]' viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3" fill="url(#paint0_linear_1_2510)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_2510" x1="-8.84481e-08" y1="3.06667" x2="3.72571" y2="5.97757" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A3A1FB"/>
                                <stop offset="1" stopColor="#817FF1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            No interest for 4 months
                        </li>
                        <li className='flex items-center gap-1 w-full lg:w-1/3 xl:w-1/4'>
                            <svg width="6" height="6" className='min-w-[8px]' viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3" fill="url(#paint0_linear_1_2510)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_2510" x1="-8.84481e-08" y1="3.06667" x2="3.72571" y2="5.97757" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A3A1FB"/>
                                <stop offset="1" stopColor="#817FF1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            The first installment is only in a month, now you don't pay anything
                        </li>
                        <li className='flex items-center gap-1 w-full lg:w-1/3 xl:w-1/4'>
                            <svg width="6" height="6" className='min-w-[8px]' viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3" fill="url(#paint0_linear_1_2510)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_2510" x1="-8.84481e-08" y1="3.06667" x2="3.72571" y2="5.97757" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A3A1FB"/>
                                <stop offset="1" stopColor="#817FF1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            The bank does not work with the other countries
                        </li>
                        <li className='flex items-center gap-1 w-full lg:w-1/3 xl:w-1/4'>
                            <svg width="6" height="6" className='min-w-[8px]' viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3" fill="url(#paint0_linear_1_2510)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_2510" x1="-8.84481e-08" y1="3.06667" x2="3.72571" y2="5.97757" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#A3A1FB"/>
                                <stop offset="1" stopColor="#817FF1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            Possible only for citizens of the EU
                        </li>
                    </ol>
                </div>

            </div>
            <div className="relative lg:mx-3 xl:mx-8 hidden lg:block">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        slidesOffsetBefore = {15}
        slidesOffsetAfter = {15}
        modules={[Pagination]}
        breakpoints={{
            250: {
               slidesOffsetBefore : 50,
               slidesPerView:1.3,
               spaceBetween : 26
             },
             640: {
               slidesOffsetBefore : 100,
               slidesPerView:2.5,
               spaceBetween : 26
             },
             768: {
                slidesOffsetBefore : 15,
                slidesPerView:1,
                spaceBetween : 30,
                slidesOffsetAfter : 15,
             },
             1024: {
                slidesOffsetBefore : 15,
                slidesPerView:2,
                spaceBetween : 30,
                slidesOffsetAfter : 15,
             },
             1280: {
               slidesOffsetBefore : 15,
               slidesPerView:3,
               spaceBetween : 30,
               slidesOffsetAfter : 15,
             },
             
           }}
        className="mySwiper text-gray-500"
      >
        {data.map((card, index) => (
                    <SwiperSlide key={card.id}>
                        <div onClick={() => handleSlideChange(index)} className={`w-11/12 lg:max-w-[320px]  shadow-2xl rounded-xl border cursor-pointer ${activeIndex === index ? '' : 'lg:brightness-150'}`}>
                            <div className='flex justify-between w-full pl-5'>
                                <h2 className='pt-4 text-2xl font-semibold'>"{card.title}"</h2>
                                <div className='px-5 py-4 bg-indigo-400 rounded-xl text-white font-medium'>{card.place} place</div>
                            </div>
                            <div className='font-medium p-5 min-h-[250px]'>
                                <p>What is included:</p>
                                <div>{renderCardDesc(card.desc)}</div>
                                <p className='hidden lg:block text-transparent bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text pt-2.5 cursor-pointer'>More...</p>
                            </div>
                            <div className='p-5  font-semibold text-xl min-h-[100px]'>
                                <p className='text-gray-400 line-through'>{card.firsPrice}</p>
                                <p className='text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text '>{card.currentPrice}$</p>
                            </div>
                            <div className='px-5 flex flex-col gap-2.5 pb-8'>
                                <button className='bg-gradient-to-r from-pink-300 to-pink-500 text-center w-full font-bold text-white py-3 rounded'>Buy</button>
                                <button className='border border-solid py-3 border-pink-500 rounded '>In installments</button>
                            </div>
                        
                        </div>
                    </SwiperSlide>))}

      </Swiper>
      <div className="swiper-button-next absolute top-1/2 -left-12  cursor-pointer">
      <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.407272 14.1493L11.7695 25.8306C12.0323 26.101 12.3831 26.25 12.7571 26.25C13.1312 26.25 13.482 26.101 13.7448 25.8306L14.5815 24.9706C15.126 24.4102 15.126 23.4993 14.5815 22.9398L5.04041 13.1304L14.5921 3.31025C14.8549 3.03985 15 2.6794 15 2.29504C15 1.91026 14.8549 1.5498 14.5921 1.2792L13.7554 0.419355C13.4924 0.148962 13.1418 -1.62452e-07 12.7677 -1.95153e-07C12.3937 -2.27854e-07 12.0428 0.148962 11.7801 0.419355L0.407273 12.1114C0.143856 12.3826 -0.000824701 12.7448 4.9617e-06 13.1298C-0.000824769 13.5163 0.143856 13.8782 0.407272 14.1493Z" fill="url(#paint0_linear_1_2502)"/>
        <defs>
        <linearGradient id="paint0_linear_1_2502" x1="15" y1="13.125" x2="1.24521e-06" y2="13.125" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EFA1AC"/>
        <stop offset="1" stopColor="#E783C5"/>
        </linearGradient>
        </defs>
        </svg>
      </div>
      <div className="swiper-button-prev absolute top-1/2 -right-24 cursor-pointer">
      <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5927 12.1007L3.23054 0.419356C2.96774 0.148962 2.61694 0 2.24288 0C1.86882 0 1.51802 0.148962 1.25522 0.419356L0.418477 1.27941C-0.126 1.83983 -0.126 2.75068 0.418477 3.31025L9.95959 13.1196L0.407891 22.9398C0.145097 23.2101 0 23.5706 0 23.955C0 24.3397 0.145097 24.7002 0.407891 24.9708L1.24464 25.8306C1.50764 26.101 1.85824 26.25 2.23229 26.25C2.60635 26.25 2.95716 26.101 3.21995 25.8306L14.5927 14.1386C14.8561 13.8674 15.0008 13.5052 15 13.1202C15.0008 12.7337 14.8561 12.3718 14.5927 12.1007Z" fill="url(#paint0_linear_1_2503)"/>
        <defs>
        <linearGradient id="paint0_linear_1_2503" x1="-9.77889e-08" y1="13.125" x2="15" y2="13.125" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EFA1AC"/>
        <stop offset="1" stopColor="#E783C5"/>
        </linearGradient>
        </defs>
      </svg>

      </div>

            </div>
            <div className='lg:hidden flex flex-col gap-5 '>

            {data.map((card) => (
                    <div key={card.id} >
                        <div  className="w-full sm:w-11/12 lg:max-w-[320px]  shadow-2xl rounded-xl border cursor-pointer ">
                            <div className='flex justify-between w-full pl-5'>
                                <h2 className='pt-4 text-2xl font-semibold'>"{card.title}"</h2>
                                <div className='px-5 py-4 bg-indigo-400 rounded-xl text-white font-medium'>{card.place} place</div>
                            </div>
                            <div className='font-medium p-5 text-sm'>
                                <p>What is included:</p>
                                <div>{renderCardDesc(card.desc)}</div>
                                <p className='hidden lg:block text-transparent bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text pt-2.5 cursor-pointer'>More...</p>
                            </div>
                            <div className='p-5  font-semibold text-xl min-h-[100px]'>
                                <p className='text-gray-400 line-through'>{card.firsPrice}</p>
                                <p className='text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text '>{card.currentPrice}$</p>
                            </div>
                            <div className='px-5 flex flex-col gap-2.5 pb-8'>
                                <button className='bg-gradient-to-r from-pink-300 to-pink-500 text-center w-full font-bold text-white py-3 rounded'>Buy</button>
                                <button className='border border-solid py-3 border-pink-500 rounded '>In installments</button>
                            </div>
                        
                        </div>
                    </div>))}
            </div>

        </div>
    </div>
    
  )
}

export default Tariff