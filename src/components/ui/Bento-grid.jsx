import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:min-h-[18rem] md:grid-cols-2 lg:grid-cols-3",
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
  onContactClick
}) => {
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    console.log("Clicked copy button");
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
      <div className={`w-full`}>
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
         <h1>{title}</h1> 
        </div>
        {  id === "5" && 
            <div onClick={handleCopy}
              className="pointer-events-auto flex items-center gap-2 justify-center text-center cursor-pointer"
            >
              {copied ? (
                <TiTick className="text-green-500 text-2xl" />
              ) : (
                <FaCopy className="text-xl text-[#afb0b6]" />
              )}
              <p className=" text-xs md:text-lg lg:text-base font-medium text-[#afb0b6]">
                rohithprakash19@gmail.com
              </p>
            </div>
          
      
              }
        <div
          className="text-[#afb0b6] text-xs md:text-lg lg:text-base">
          {description}
        </div>
        {id === "3" && 
            <div className='flex py-10'>
              <h2 className='text-neutral-50  flex items-center gap-3 hover:text-2xl' onClick={onContactClick}> Get In Touch<FaArrowCircleRight/></h2> 
              </div>
              }


      </div>
      
    </div>
  );
};
