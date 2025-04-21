import React from 'react'
import { Projects } from './data/Data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20'> 
      <h1 className='text-2xl md:text-5xl text-neutral-50 text-center'>Things I’ve Built</h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-15 mt-10'>
        {Projects.map((project,index)=>(
          <div key={index} 
          className='text-neutral-50 h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            
            <PinContainer title={project.title} href={project.link} >
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[37vh] mb-10'>
               {/* <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                  
               </div>  */}
               <img src={project.img} alt={project.title} className='z-10 absolute bottom-0 w-full h-full object-cover'/>
                </div>
                <h1 className='font-bold lg:text-xl text-base line-clamp-1 py-1.5' >{project.title}</h1>
                <p className='lg:text-base lg:font-normal font-light text-sm'>{project.dec}</p>
                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {project.iconLists.map((Icon,i)=>(
                      <div key={i} className="p-2">
                       <Icon className='text-neutral-50 '/>
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-neutral-50'>Check Live Site</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                  </div>
                </div>
            </PinContainer>
         
          </div>
        ))}

      </div>
      

    </div>
  )
}

export default RecentProjects