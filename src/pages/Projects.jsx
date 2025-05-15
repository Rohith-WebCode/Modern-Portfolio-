import { FullProject } from '../components/data/Data'
import { PinContainer } from '../components/ui/3d-pin'
import {  FaLocationArrow } from 'react-icons/fa'

export const FullProjects = () => {
  return (
    <div className='py-28'>
        <h1 className='text-lg md:text-3xl text-neutral-50 text-center font-bold'>Things I’ve <span className='Colorfull-text'>Built</span></h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-5 md:gap-y-20  mt-10'>
         {FullProject.map((project,index)=>(
            <div key={index} 
             className='text-neutral-50 h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    
            <PinContainer title={project.title} href={project.link} >
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[37vh]'>
                 {/* <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                          
                     </div>  */}
                 <img src={project.img} alt={project.title} className='z-10 absolute bottom-0 w-full h-full object-cover' loading="lazy"/>
                        </div>
                        <h1 className='font-bold lg:text-xl text-base line-clamp-1 py-1.5' >{project.title}</h1>
                        <p className='text-[#afb0b6] text-xs md:text-lg lg:text-base font-medium lg:font-normal'>{project.dec}</p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                          <div className='flex items-center'>
                            {project.iconLists.map((Icon,i)=>(
                              <div key={i} className="p-2">
                               <Icon className='text-neutral-50 '/>
                              </div>
                            ))}
                          </div>
                          <div className='flex justify-center items-center'>
                            <p className='flex lg:text-xl md:text-xs text-sm text-[#afb0b6]'>Check Live Site</p>
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
