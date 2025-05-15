import React, { useState } from 'react';
// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { MyApproach } from './data/Data';

const MyApproachCanvas = () => {
  return (
    <section className=''>
      <h1 className='text-lg md:text-3xl text-neutral-50 text-center font-bold'>Turning Vision into Reality:<span className='Colorfull-text'>My Process</span></h1>
     <div className="py-20 flex flex-col lg:flex-row flex-wrap gap-4 items-stretch">
  {MyApproach.map((data, index) => (
    <div key={index} className="w-full lg:w-[32%] flex">
      <div className="flex flex-col justify-between w-full h-full">
        <GridItem
          icon={data.icon}
          title={data.title}
          description={data.description}
        />
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 text-neutral-50">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MyApproachCanvas;
