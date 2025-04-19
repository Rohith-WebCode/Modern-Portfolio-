import Img from '../../assets/grid1.png'
import Img2 from '../../assets/grid3.png'
import Img3 from '../../assets/grid4.png'
import { FaLaptopCode, FaReact,FaJs,FaNode,FaHtml5,FaCss3,FaPhp } from 'react-icons/fa';       
import { MdPhoneIphone } from 'react-icons/md';      
import { BiCodeAlt } from 'react-icons/bi';          
import P1 from '../../assets/project9_img.png'
import P2 from '../../assets/project11_img.png'
import { SiTailwindcss,SiMongodb,SiVercel,SiRender,SiExpress, SiMysql, SiBootstrap } from "react-icons/si";
import { GiMagicSwirl } from "react-icons/gi";
export const gridItems = [
    
    { 
      id:'1',
      title:'Hi, I’m Rohith Prakash',
      description:'I create intuitive and visually appealing websites using the latest web technologies for a smooth user experience.',
      img:Img,
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "w-full sm:h-[276px] h-fit object-contain",
      titleClassName: "text-lg lg:text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-xs md:text-lg lg:text-base font-generalsans",
      spareImg: "",  
    },
    { 
      id:'2',
      title:'Tech Stack',
      description:'I leverage a diverse set of technologies, frameworks, and tools to craft seamless, scalable, and high-performance applications.',
      img:'',
      className: "lg:col-span-1 md:col-span-1 md:row-span-1",
      imgClassName: "w-full sm:h-[276px] h-fit object-contain",
      titleClassName: "text-lg lg:text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-xs md:text-lg lg:text-base font-generalsans",
    },
    { 
      id:'3',
      title:'Global Availability, Hassle-Free Communication',
      description:'Available across time zones for seamless communication and collaboration—wherever you are.',
      img:'',
      className: "lg:col-span-1 md:col-span-1 lg:row-span-2 ",
      imgClassName: "",
      titleClassName: "text-lg lg:text-xlfont-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-xs md:text-lg lg:text-base font-generalsans",
      spareImg: "",  
    },
    { 
      id:'4',
      title:'Beyond Code: A Passion for Innovation',
      description:'Coding is more than just a profession for me—it s a creative journey. I thrive on solving complex problems and bringing ideas to life through code. With a constant drive to explore new technologies and refine my skills, I’m always pushing the boundaries of what’s possible.',
      img:Img2,
      className: "lg:col-span-2 md:col-span-1 lg:row-span-2 xl:h-[28rem]",
      imgClassName: "w-full sm:h-[276px] h-fit object-contain",
      titleClassName: "text-lg lg:text-xl font-semibold mb-2 text-white font-generalsans",
      descriptionClassName: "text-[#afb0b6] text-xs md:text-lg lg:text-base font-generalsans",
      spareImg: "",  
    },
    { 
      id:'5',
      title:'Contact me',
      description:'',
      img:Img3,
      className: "lg:col-span-1 md:col-span-1 md:row-span-1 xl:h-[20rem]",
      imgClassName: "w-full sm:h-[372px] md:h-[276px] h-fit object-contain mb-[-8rem]",
      titleClassName: "text-white text-lg lg:text-xl mb-2 font-semibold text-center font-generalsans",
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
  export const Services = [
    {
      title: "Web Development",
      description: "I build fast, scalable, and modern websites using the latest technologies.",
      img: FaLaptopCode, // example icon component
      className: "md:top-0 md:left-0", // top-left
    },
    {
      title: "Responsive Web Design",
      description: "I create mobile-friendly, stunning designs that adapt to any screen size.",
      img: MdPhoneIphone,
      className: "md:top-35 md:right-0", // right and shifted down
      classNameforcard: "md:mt-[1.5rem]"
    },
    {
      title: "API Integration",
      description: "I build seamless API integrations that boost performance and user experience.",
      img: BiCodeAlt,
      className: "md:bottom-0 md:left-0", // bottom-left
    },
  ];
  

  export const Projects = [

    {
      id:1,
      title:" ClarityPix – AI Text-to-Image Generator",
      dec: "ClarityPix is an AI-powered tool that turns user-input text into stunning images using the ClipDrop text-to-image API. Designed with a sleek and user-friendly interface, it enables users to visualize ideas instantly through AI-generated art.",
      img: P1,
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"https://claritypix.onrender.com"
    },
    {
      id:2,
      title:" Bubbly – Real-Time Chat Application",
      dec: "Bubbly is a modern real-time chat app with 1-on-1 messaging. Built with Socket.io for instant communication, Zustand for state management, and styled using DaisyUI. Messages are stored in MongoDB, and the app is fully responsive.",
      img: P2,
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"https://claritypix.onrender.com"
    },
    {
      id:1,
      title:" ClarityPix – AI Text-to-Image Generator",
      dec: "ClarityPix is an AI-powered tool that turns user-input text into stunning images using the ClipDrop text-to-image API. Designed with a sleek and user-friendly interface, it enables users to visualize ideas instantly through AI-generated art.",
      img: P1,
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"/https://claritypix.onrender.com"
    },
    {
      id:1,
      title:" ClarityPix – AI Text-to-Image Generator",
      dec: "ClarityPix is an AI-powered tool that turns user-input text into stunning images using the ClipDrop text-to-image API. Designed with a sleek and user-friendly interface, it enables users to visualize ideas instantly through AI-generated art.",
      img: P1,
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"/https://claritypix.onrender.com"
    },

  ]