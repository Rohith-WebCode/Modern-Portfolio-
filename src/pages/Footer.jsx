import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='' >
  <div className="mx-auto ">
    <div className="h-[.1rem] w-screen bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-70"></div>
  </div>
  <div className='mx-auto max-w-6xl px-4 flex flex-col md:flex-row md:justify-between items-center py-5'>
    <h3 className='text-[#afb0b6] text-xs'>Copyright © {new Date().getFullYear()} Rohith Prakash.</h3>
    <div className='text-[#afb0b6]  flex gap-3'>
       <a href='https://github.com/Rohith-WebCode'><FaGithub/></a>
       <a href='https://www.instagram.com/_.rohith.p_'><FaInstagram/></a>
       <a href='https://www.linkedin.com/in/rohithprakash-dev'><FaLinkedin/></a>
    </div>

  </div>
</section>

  )
}

export default Footer