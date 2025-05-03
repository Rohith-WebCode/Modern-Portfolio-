import React from 'react'
import img from '../assets/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper.jpg'
import { FaArrowCircleRight } from 'react-icons/fa'

const FooterContact = ({onContactClick}) => {
  return (
    <section id='Contact' className="relative w-screen h-screen overflow-hidden p-0">
  
    {/* Background Image */}
    <div className="absolute inset-0 w-screen">
      <img src={img} alt="background" className="object-cover w-full h-full opacity-25" />
    </div>
  
    {/* Black Overlay with Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-transparent"></div>
  
   
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto lg:mx-auto">
      <div className=''>

      <span className="text-neutral-50 text-2xl md:text-4xl lg:text-5xl tracking-wide leading-tight">
        <h3 className='text-nowrap'>FROM CONCEPT TO <span className="Colorfull-text font-bold">CREATION</span></h3><br />
       <h3 className='mt-[-2rem] text-nowrap'> LET'S MAKE IT <span className="Colorfull-text font-bold">HAPPEN!</span></h3>
      </span>

     <button className="relative h-12 overflow-hidden p-[1px] rounded-full text-lg my-5">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium  backdrop-blur-3xl">
            <h2 className='text-white  flex items-center gap-3 '  onClick={onContactClick}> Get In Touch<FaArrowCircleRight/></h2> 
            </span>
          </button>
          <div className=''>
          <h4 className='text-white text-sm font-semibold lg:text-2xl tracking-wid'>Open to full-time opportunities and freelance collaborations.</h4>
          <h4 className='text-[#afb0b6] my-2 text-xs font-extralight tracking-wide text-balance lg:text-lg max-w-lg lg:max-w-2xl'>Passionate about building dynamic web applications and creating intuitive user experiences.</h4>
          </div>
    </div>
      </div>

  
  </section>
  
  )
}

export default FooterContact