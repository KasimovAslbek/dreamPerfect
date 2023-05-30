import React, { useState } from "react";
import sleeping from '../img/sleeping.svg';
import bigStar from '../img/bigStar.png';
import down from '../img/down.png';

function Programm() {
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionId(id === activeAccordionId ? null : id);
  };

  const data = [
    {
      id: 0,
      title: "Newborn baby",
      desc: "The 'Newborn Baby' section of the course program equips you with essential knowledge and practical skills to nurture and care for your newborn, covering topics such as bonding, feeding, sleep patterns, and creating a safe environment. You will gain confidence in understanding your baby's needs and fostering a peaceful and harmonious start to your motherhood journey.",
    },
    {
      id: 1,
      title: "Important Terms",
      desc: "The 'Important Terms' section of the course program provides you with a comprehensive overview of key terms and terminology related to motherhood and newborn care. This section aims to familiarize you with essential concepts and vocabulary to enhance your understanding and communication in the realm of parenting and infant well-being.",
    },
    {
      id: 2,
      title: "Developmental Leaps and Sleep Regressions",
      desc: "In the 'Developmental Leaps and Sleep Regressions' section, you will explore the fascinating world of your baby's developmental leaps and understand how they impact sleep patterns. This section will provide insights into the various stages of cognitive and physical growth, helping you navigate sleep regressions with strategies to support your baby's development and ensure optimal sleep habits.",
    },
    {
      id: 3,
      title: "Basics of healthy sleep",
      desc: "In the 'Basics of Healthy Sleep' section, you will gain a fundamental understanding of the importance of sleep for both you and your baby. This section will cover essential principles and practices for establishing healthy sleep routines, promoting optimal sleep environments, and implementing effective strategies to support restful sleep for you and your little one.",
    },
    {
      id: 4,
      title: "Baby nutrition",
      desc: "In the 'Baby Nutrition' section, you will explore the crucial aspects of nourishing your baby with a focus on their nutritional needs and introducing solid foods. This section will cover topics such as breastfeeding, formula feeding, introducing solid foods, and establishing healthy eating habits, equipping you with the knowledge and guidance to provide your baby with a well-balanced and nourishing diet during their early stages of growth and development.",
    },
    {
      id: 5,
      title: "Mode and Rhythm of the day",
      desc: "In the 'Mode and Rhythm of the Day' section, you will learn how to establish a structured and balanced daily routine for you and your baby. This section will guide you in creating a predictable schedule that incorporates feeding, sleeping, playtime, and other essential activities, allowing for a sense of stability, comfort, and optimal development for your little one.",
    },
    {
      id: 6,
      title: "Working with associations to fall asleep",
      desc: "In the 'Working with Sleep Associations' section, you will discover effective strategies to understand and address sleep associations that may impact your baby's ability to self-soothe and achieve restful sleep. This section will provide insights and techniques for gently transitioning away from sleep props or associations, empowering you to foster healthy sleep habits and promote independent sleep skills for your baby.",
    },
    {
      id: 7,
      title: "Self-sleeping",
      desc: "In the 'Self-sleeping' section, you will explore the importance of promoting self-sleeping skills for your baby. This section will guide you in understanding the benefits of independent sleep, providing practical tips and techniques to encourage your baby to self-soothe and develop healthy sleep habits, leading to more restful nights for both you and your little one.",
    },
  ];

  return (
    <div className='ml-8 lg:ml-36'>
      <h1 className='text-2xl sm:text-4xl font-extrabold text-center sm:text-start'>Course program</h1>
      <p className='font-semibold text-lg text-center sm:text-start sm:text-2xl pt-2.5'>Learn the formula for peace motherhood</p>
      <div className='flex mt-10'>
        <div className='w-full lg:w-1/2 space-y-4 mr-8 lg:mr-0'>
          <div className='flex relative shadow-lg rounded-2xl text-sm sm:text-2xl'>
            <div className='bg-indigo-400 h-16 w-[84px] rounded-2xl relative flex items-center justify-center'>
              <img className='-ml-2' src={bigStar} alt='' />
            </div>
            <div className='bg-white h-16 w-full transform -ml-3 rounded-l-full flex items-center justify-between'>
              <div className='w-full'>
                <p className='text-center px-8 text-gray-500 font-medium'>Introduction</p>
              </div>
              <img className='mr-9' src='' alt='' />
            </div>
          </div>

          {data.map((item) => (
            <div key={item.id}>
              <div className='flex relative shadow-2xl rounded-2xl bg-white'>
                <div className='bg-indigo-400 h-16 w-[84px] rounded-2xl relative flex items-center justify-center font-black text-white'>
                  <p className='-rotate-90 -ml-6'>Modul</p>
                  <p className='text-4xl -ml-3 font-extralight'>{item.id}</p>
                </div>
                <div className='bg-white h-16 w-full transform -ml-3 rounded-l-full flex items-center justify-between'>
                  <div
                    className='w-full cursor-pointer'
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={item.id === activeAccordionId}
                    aria-controls={`flush-collapse-${item.id}`}
                  >
                    <p className='text-center px-4 sm:px-8 font-medium text-gray-500 text-sm sm:text-2xl'>{item.title}</p>
                  </div>
                  <img
                    className='mr-9 cursor-pointer'
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={item.id === activeAccordionId}
                    aria-controls={`flush-collapse-${item.id}`}
                    src={down}
                    alt=''
                  />
                </div>
              </div>
              {item.id === activeAccordionId && (
                <div id={`flush-collapse-${item.id}`} className='transition-all duration-500 !bg-white'>
                  <div className=''>
                    <p className='text-base text-neutral-700 dark:text-neutral-300 p-4 border-t s font-normal'>{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='hidden lg:block lg:w-1/2'>
          <img className='static pt-20' src={sleeping} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Programm;
