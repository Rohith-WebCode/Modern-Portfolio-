import { Spotlight } from '../components/ui/Spotlight'
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import StarParticles from "../components/ui/StarParticles";
import { FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div className='pb-20 pt-36' >
       <StarParticles/>
      <div>
        <Spotlight  className={"-top-40 -left-10 md:-top-20 md:-left-32 h-screen"} fill={"white"}/>
        <Spotlight  className={"top-50 left-20 h-[80vh] w-[50vw]"} fill={"purple"}/>
        <Spotlight  className={"top-28  h-[80vh] w-[50vw]"} fill={"blue"}/>
      </div>
      <div className="h-screen w-full flex flex-col items-center justify-center antialiased absolute top-0 left-0">
      <BackgroundBeams />
      </div>
      <div className='flex justify-center relative my-20 z-10' >
      <div className='max-w-[80vw] md:max-w-[rem] lg:max-w-[65vw] flex flex-col justify-center my-4'>
       <motion.h2 className='text-neutral-200 text-4xl md:text-5xl lg:text-6xl text-center font-bold py-4 leading-snug tracking-wide' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:2}}>Your Journey To The Infinite Web Begins <span className='text-blue-500 dark:text-blue-500'>Here</span></motion.h2>
      
      <p className=' md:tracking-wider my-4 text-sm md:text-lg text-[#d2d0dd] text-center font-Poppins font-bold'>Your Vision, My Code – Let’s Build Something Extraordinary.</p>
      <div className='flex justify-center'>
      <button className="relative inline-flex h-12  overflow-hidden rounded-lg p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium  backdrop-blur-3xl">
        <h2 className='bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 text-transparent font-Poppins'>Let's Connect
        </h2> <FaLocationArrow className='text-[#d2d0dd] ml-2'/> 
        </span>
      </button>
      </div>
      </div>
      
      </div>
    </motion.div>
  )
}

export default Home