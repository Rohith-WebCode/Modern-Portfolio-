import React from 'react'
import { Projects } from './data/Data'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className='py-20'> 
      <h1 className='text-2xl md:text-5xl text-neutral-50 text-center'>Things I’ve Built</h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {Projects.map((project,index)=>(
          <div key={index} 
          className='text-neutral-50 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            
            <PinContainer title={project.title} href={project.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[35vh]'>
               <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>

               </div> 
               <img src={project.img} alt={project.title} className='z-10 absolute bottom-0'/>
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 py-1.5' >{project.title}</h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm'>{project.dec}</p>
                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {project.iconLists.map((Icon,i)=>(
                      <div key={i}>
                       <Icon className='text-neutral-50'/>
                      </div>
                    ))}
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