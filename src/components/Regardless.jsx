import React from 'react';
import paper from '../img/paper.png';
import bam from '../img/bam.png';
import circle1 from '../img/circle1.png';
import circle2 from '../img/circle2.png';
import circle3 from '../img/circle3.png';
import ploygon2 from '../img/ploygon2.png';

function Regardless() {
  return (
    <div className="flex relative lg:bg-[#F0F3FF] my-10">
      <div className="relative lg:w-1/2 ml-8 lg:ml-36 text-gray-500">
        <h2 className="text-4xl font-bold xl:w-1/2 pt-10 pb-8">Regardless of the chosen tariff</h2>
        <div className="z-50 xl:w-2/3 space-y-4 pb-16 mr-8 lg:mr-0">
          <div className="flex items-center gap-2.5">
            <img src={ploygon2} alt="" />
            <p>Clear, understandable, structured information for the smoothest possible sleep</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={ploygon2} alt="" />
            <p>Short video lessons (recorded so that mom can watch 2-3 lessons for 1 baby nap)</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={ploygon2} alt="" />
            <p>Additional materials. Guides, checklists, video examples, diagrams, tables and presentations.</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={ploygon2} alt="" />
            <p>Bonus lessons from a pediatrician / breastfeeding consultant</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={ploygon2} alt="" />
            <p>Workbook/basic abstract «DREAMBOOK»</p>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={ploygon2} alt="" />
            <p>Electronic sleep diary (with automatic calculation of sleep indicators)</p>
          </div>
        </div>
        <img className="absolute w-36 bottom-0 right-0 -mr-16 lg:hidden overflow-y-hidden" src={paper} alt="" />
      </div>
      <div className="relative lg:w-1/2">
        <img className="absolute bottom-0 right-0 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-50" src={paper} alt="" />
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block" src={bam} alt="" />
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block" src={circle1} alt="" />
        <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden 2xl:block" src={circle2} alt="" />
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden 2xl:block' src={circle3} alt="" />
      </div>
    </div>
  );
}

export default Regardless;

