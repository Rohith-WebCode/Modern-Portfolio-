import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from './data/Data'

const Grid = () => {
  return (
    <section id='about' className='py-4'>
        <BentoGrid>
            {gridItems.map((iteam)=>(
                <BentoGridItem
                id={iteam.id}
                key={iteam.id}
                title={iteam.title}
                description={iteam.description} 
                className={iteam.className}
                img = {iteam.img}
                imgClassName= {iteam.imgClassName}
                titleClassName= {iteam.titleClassName}
                spareImg= {iteam.spareImg}
                />
            ))
            }
        </BentoGrid>

    </section>
  )
}

export default Grid