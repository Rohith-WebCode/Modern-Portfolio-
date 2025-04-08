import { FaArrowRight } from "react-icons/fa";
import { cn } from "../../utils/cn";
import {CardDemo} from "./GridSkillsImag";
import {GlobeDemo} from './Gridglobe'
import { useState } from "react";
import {FaCopy} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:min-h-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description, 
  img ,
  imgClassName,
  titleClassName,
  descriptionClassName,
  spareImg
}) => {
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    const text = "RohithPrakash19@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(()=>{
       setCopied(false)
    },2000)
  };
  return (
    <div
      className={cn(
        "group/bento  shadow-input row-span-1 flex flex-col justify-between  space-y-4  relative overflow-hidden rounded-3xl border border-red-500 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
      <div className={`w-full relative `}>
        {img && (
          <img 
          src={img}
          alt={img}
          className={cn(imgClassName,'object-cover object-center')}
          />
        )}
        {id === '3' && <GlobeDemo/>}

      {id==="2" && <CardDemo/>}
      </div>
        <div
          className={cn(titleClassName,`mt-2 mb-2 font-bold text-neutral-600 dark:text-neutral-200`)}>
          {title}
        </div>
        <div
          className={cn("text-[#afb0b6] text-base font-generalsans font-normal")}>
          {description}
        </div>
        {id === "3" && 
         <div className='flex justify-center py-4'>
              <button className="relative inline-flex h-12 w-90 overflow-hidden rounded-lg p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium  backdrop-blur-3xl">
                <h2 className='bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-transparent font-Poppins'>Contact Me</h2> <FaArrowRight className='text-[#d2d0dd] ml-2'/> 
                </span>
              </button>
              </div>
              }

        {  id === "5" && (
      <div
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#d2d0dd] justify-center text-center cursor-pointer"
      >
        {copied ? (
          <TiTick className="text-green-500 text-2xl" />
        ) : (
          <FaCopy className="text-xl text-[#afb0b6]" />
        )}
        <p className=" xl:text-xl font-medium text-[#afb0b6]">
          rohithprakash19@gmail.com
        </p>
      </div>
    )

        }

      </div>
      
    </div>
  );
};
