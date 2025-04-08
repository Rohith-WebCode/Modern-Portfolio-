import Img from '../../assets/grid1.png'
import Img2 from '../../assets/grid3.png'
import Img3 from '../../assets/grid4.png'


export const gridItems = [
    
    { 
      id:'1',
      title:'Hi, I’m Rohith Prakash',
      description:'I create intuitive and visually appealing websites using the latest web technologies for a smooth user experience.',
      img:Img,
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "w-full sm:h-[276px] h-fit object-contain",
      titleClassName: "text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "",
      spareImg: "",  
    },
    { 
      id:'2',
      title:'Tech Stack',
      description:'I leverage a diverse set of technologies, frameworks, and tools to craft seamless, scalable, and high-performance applications.',
      img:'',
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "w-full sm:h-[276px] h-fit object-contain",
      titleClassName: "text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-base font-generalsans",
    },
    { 
      id:'3',
      title:'Global Availability, Hassle-Free Communication',
      description:'Available across time zones for seamless communication and collaboration—wherever you are.',
      img:'',
      className: "lg:col-span-1 md:col-span-3 lg:row-span-2 ",
      imgClassName: "",
      titleClassName: "text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-base font-generalsans",
      spareImg: "",  
    },
    { 
      id:'4',
      title:'Beyond Code: A Passion for Innovation',
      description:'Coding is more than just a profession for me—it s a creative journey. I thrive on solving complex problems and bringing ideas to life through code. With a constant drive to explore new technologies and refine my skills, I’m always pushing the boundaries of what’s possible.',
      img:Img2,
      className: "lg:col-span-2 md:col-span-3 lg:row-span-2 xl:h-[28rem]",
      imgClassName: "w-full sm:h-[276px] h-fit object-contain",
      titleClassName: "text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-base font-generalsans",
      spareImg: "",  
    },
    { 
      id:'5',
      title:'Contact me',
      description:'',
      img:Img3,
      className: "lg:col-span-1 md:col-span-3 md:row-span-1 xl:h-[20rem]",
      imgClassName: "w-full md:h-[126px] h-[276px] object-cover sm:object-top lg:mb-15",
      titleClassName: "text-[#afb0b6] text-base mb-2 text-center font-generalsans",
      descriptionClassName: "",
      spareImg: "",  
    },
  
]

export const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];