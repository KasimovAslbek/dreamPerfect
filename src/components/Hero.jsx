import React from 'react'
import baby from '../img/baby.png'
import leftBg from '../img/left-bg.png'
import mobile from '../img/mobile.png'
import motherAndGirl from '../img/mother-and-girl.png'
import pointer from '../img/pointer.png'
import polygon from '../img/polygon.png'
import rightBg from '../img/right-bg.png'
import clock from '../img/clock.png'
import motherMobile from '../img/motherMobile.png'
import wolve from '../img/wolve.png'


function Hero() {
  return (
    <div className=''>
        <div className='relative lg:flex lg:pl-8 xl:pl-0 '>
           <div className='lg:w-1/2 z-20'>
            <div className='md:w-fit mx-auto lg:ml-auto pt-12 lg:pt-40 xl:pt-72'>
                <div className='flex items-center gap-1.5 justify-center'>
                    <h2 className='text-2xl md:text-4xl xl:text-5xl font-bold text-gray-600  md:text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text'>Healthy Baby Sleep</h2>
                    <img className='hidden md:block' src={baby} alt="" />
                </div>
                <div  className='relative'>
                    <img className='w-full mt-5 md:hidden' src={wolve} alt="" />
                    <p className='font-semibold text-lg text-white md:text-2xl w-full md:pt-4 md:my-5 md:text-gray-600 text-center absolute md:relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto' >Transformative online motherhood course</p>
                </div>
                <div className='hidden md:flex gap-8 text-gray-700 font-medium pt-10 justify-center'>
                    <div className='flex items-center gap-1'>
                        <img src={polygon} alt="" />
                        <p>7 learning modules</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={polygon} alt="" />
                        <p>Unique techniques</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={polygon} alt="" />
                        <p>Soft Methods</p>
                    </div>
                </div>
                <div className='hidden md:flex items-center gap-10 pt-9 justify-center'>
                    <button className='flex items-center gap-0.5 xl:gap-2.5 pr-3 xl:px-14 py-1.5 bg-gradient-to-r from-pink-300 to-pink-500 shadow-md rounded text-white text-lg font-bold'>
                    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_1475)">
                        <path d="M22.388 10.5224L25.1734 15.9307C25.3019 16.2175 25.6019 16.3814 25.9018 16.4633L32.1583 17.3238C32.9724 17.4467 33.2724 18.389 32.7153 18.9217L28.173 23.1418C27.9587 23.3466 27.8302 23.6744 27.873 23.9612L28.9443 29.9022C29.0729 30.6806 28.2587 31.2543 27.5302 30.8855L21.9595 28.0994C21.6595 27.9355 21.3167 27.9355 21.0596 28.0994L15.4888 30.8855C14.7603 31.2543 13.9033 30.6806 14.0747 29.9022L15.146 23.9612C15.1888 23.6744 15.1031 23.3466 14.846 23.1418L10.3037 18.9217C9.70375 18.389 10.0466 17.4057 10.8608 17.3238L17.1172 16.4633C17.4171 16.4224 17.7171 16.2175 17.8457 15.9307L20.631 10.5224C20.9739 9.82587 22.0023 9.82587 22.388 10.5224Z" fill="url(#paint0_linear_1_1475)"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_1_1475" x="0" y="0" width="43" height="41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1475"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1475" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_1475" x1="12.5" y1="10" x2="31" y2="31" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFD869"/>
                        <stop offset="1" stopColor="#FFAE35"/>
                        </linearGradient>
                        </defs>
                    </svg>

                        <p>Take a cource</p>
                    </button>
                    <button className=' flex items-center gap-2.5 px-4 xl:px-14 py-3 border border-solid  border-gradient rounded drop-shadow-md  text-gray-700 text-lg font-bold'>
                        <img src={clock} alt="" />
                        <p>In installments</p>
                    </button>
                </div>
            </div>
            </div>
            <div className='lg:w-1/2 '>
                <img className='hidden md:block py-8 lg:pt-24 xl:pl-12 lg:pb-72 w-full px-16 lg:px-0' src={motherAndGirl} alt="" />
                <img className='md:hidden w-full' src={motherMobile} alt="" />
            </div>
            <div className='mx-8'>
            <button className='flex justify-center md:hidden md:mx-0 items-center gap-0.5 xl:gap-2.5 w-full max-w-sm mx-auto pr-3 xl:px-14 py-1.5 bg-gradient-to-r from-pink-300 to-pink-500 shadow-md rounded text-white text-lg font-bold'>
                    <svg className='z-50 block' width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_1475)">
                        <path d="M22.388 10.5224L25.1734 15.9307C25.3019 16.2175 25.6019 16.3814 25.9018 16.4633L32.1583 17.3238C32.9724 17.4467 33.2724 18.389 32.7153 18.9217L28.173 23.1418C27.9587 23.3466 27.8302 23.6744 27.873 23.9612L28.9443 29.9022C29.0729 30.6806 28.2587 31.2543 27.5302 30.8855L21.9595 28.0994C21.6595 27.9355 21.3167 27.9355 21.0596 28.0994L15.4888 30.8855C14.7603 31.2543 13.9033 30.6806 14.0747 29.9022L15.146 23.9612C15.1888 23.6744 15.1031 23.3466 14.846 23.1418L10.3037 18.9217C9.70375 18.389 10.0466 17.4057 10.8608 17.3238L17.1172 16.4633C17.4171 16.4224 17.7171 16.2175 17.8457 15.9307L20.631 10.5224C20.9739 9.82587 22.0023 9.82587 22.388 10.5224Z" fill="url(#paint0_linear_1_1475)"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_1_1475" x="0" y="0" width="43" height="41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1475"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1475" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_1475" x1="12.5" y1="10" x2="31" y2="31" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFD869"/>
                        <stop offset="1" stopColor="#FFAE35"/>
                        </linearGradient>
                        </defs>
                    </svg>

                        <p>Take a cource</p>
                    </button>
                    </div>

            <div className='absolute hidden lg:block bottom-10 left-0'><img  src={leftBg} alt="" /></div>
            <div className='absolute hidden lg:block bottom-0 right-0'><img src={rightBg} alt="" /></div>
            <div className='hidden  relative lg:absolute bottom-11 xl:bottom-0 lg:-mb-40 xl:-mb-10 justify-center mt-16 lg:mt-0 mx-auto lg:z-50 md:flex lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 gap-4'>
                <div>
                    <p className='font-medium w-52 pt-10 text-[#5E5E5E]'>Interactive platform for your learning</p>
                    <img className='mx-auto pt-4' src={pointer} alt="" />
                </div>
                <img src={mobile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero