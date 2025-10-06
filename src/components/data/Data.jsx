import Img from '../../assets/grid1.png'
import Img2 from '../../assets/grid3.png'
import Img3 from '../../assets/grid4.png'
import { FaLaptopCode, FaReact,FaJs,FaNode,FaHtml5,FaCss3,FaPhp,FaFilm  } from 'react-icons/fa';       
import { MdPhoneIphone } from 'react-icons/md';      
import { BiCodeAlt } from 'react-icons/bi';          
import { SiTailwindcss,SiMongodb,SiCss3,SiExpress, SiMysql, SiBootstrap, SiHtml5, SiCloudinary, SiVercel } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GiMagicSwirl } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaPencilRuler } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { GiAbstract066 } from "react-icons/gi";
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
      className: "lg:col-span-1 md:col-span-1 md:row-span-1 xl:h-[19rem]",
      imgClassName: "w-full sm:h-[372px] md:h-[276px] h-fit object-contain mb-[-8rem]",
      titleClassName: "text-white text-lg lg:text-xl mb-2 font-semibold text-center font-generalsans",
      descriptionClassName: "",
      spareImg: "",  
    },
  
]

export const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
    {
      name: "Contact",
      link: "#Contact",
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
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627524/project9_img_nppvi4.png',
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"https://claritypix.onrender.com"
    },
    {
      id:2,
      title:" Bubbly – Real-Time Chat Application",
      dec: "Bubbly is a modern real-time chat app with 1-on-1 messaging. Built with Socket.io for instant communication, Zustand for state management, and styled using DaisyUI. Messages are stored in MongoDB, and the app is fully responsive.",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627525/project11_img_rjiyuy.png',
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"https://claritypix.onrender.com"
    },
       {
      id:3,
      title:"Logix — Logistics Website",
      dec: "A modern and responsive frontend design inspired by a Webflow logistics theme. This project showcases real-time motion animations, a clean layout, and strong visual hierarchy — all custom-built using HTML, Tailwind CSS, and pure CSS animations (no frameworks or libraries).",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1749704043/mediamodifier_image_1_loitu5.png',
      iconLists: [FaHtml5,SiTailwindcss,SiCloudinary,SiVercel],
      link:"https://logix-pied.vercel.app"
    },
    {
      id:4,
      title:"Personal Portfolio",
      dec:'A modern, fully responsive portfolio built with React.js and Tailwind CSS to showcase my skills, services, and projects. It features smooth animations, a clean user interface, mobile-friendly design, and reflects my passion for development.',
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627196/project12_img_pxrspe.png',
      iconLists: [FaReact,SiTailwindcss,TbBrandFramerMotion],
      link:"https://shoppingcart-frontend-xxrm.onrender.com"
    },
    {
      id:5,
      title:"Personal Finance Tracker",
      dec:'A full-stack finance management web app built with React.js, Node.js, Express, and MongoDB. It allows users to track income and expenses, manage transactions, and view insights through an intuitive dashboard with a clean, responsive design.',
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1759587120/Screenshot_80_wgpze4.png',
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress],
      link:"https://my-finance-log.vercel.app"
    },
    {
      id:6,
      title:"Mojito Landing Page",
      dec:'A visually appealing landing page designed with HTML, CSS, and GSAP to showcase a refreshing cocktail brand. It features smooth animations, engaging transitions, responsive layout, and highlights creativity in front-end design.',
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1759587148/Screenshot_81_ejtopt.png',
      iconLists: [FaReact,SiTailwindcss,GiAbstract066 ],
      link:"https://mojitococktail.netlify.app"
    },

  ]

  export const FullProject = [

    {
      id:1,
      title:" ClarityPix – AI Text-to-Image Generator",
      dec: "ClarityPix is an AI-powered tool that turns user-input text into stunning images using the ClipDrop text-to-image API. Designed with a sleek and user-friendly interface, it enables users to visualize ideas instantly through AI-generated art.",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627524/project9_img_nppvi4.png',
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"https://claritypix.onrender.com"
    },
    {
      id:2,
      title:" Bubbly – Real-Time Chat Application",
      dec: "Bubbly is a modern real-time chat app with 1-on-1 messaging. Built with Socket.io for instant communication, Zustand for state management, and styled using DaisyUI. Messages are stored in MongoDB, and the app is fully responsive.",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627525/project11_img_rjiyuy.png',
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress,GiMagicSwirl],
      link:"https://claritypix.onrender.com"
    },
       {
      id:3,
      title:" Netflix Clone",
      dec: "A responsive, modern web application inspired by Netflix, developed to replicate core streaming platform functionalities. This project demonstrates my ability to work with real-world APIs, build interactive UIs, and manage user authentication efficiently.",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627547/project8_img_wsjtk7.png',
      iconLists: [FaReact,SiCss3,FaFilm,FaJs],
      link:"https://netflix-clone-7b33.onrender.com"
    },
    {
      id:4,
      title:" Shelftop — E-Commerce Shopping Cart Website",
      dec: "Shelftop is a responsive e-commerce website simulating a real-world shopping platform. It features a clean UI, smooth navigation, product listings, and efficient cart management, all built with a focus on usability and user experience.",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627536/project1_img_kv3rte.png',
      iconLists: [FaReact,SiCss3,FaNode,SiMongodb,SiExpress],
      link:"https://shoppingcart-frontend-xxrm.onrender.com"
    },
    {
      id:5,
      title:"Rock, Paper, Scissors game",
      dec:"A simple, interactive Rock, Paper, Scissors game built with HTML, CSS, and JavaScript. It includes real-time user input, score tracking, and dynamic UI updates, providing an engaging and enjoyable user experience.",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627529/project10_img_t0prer.png',
      iconLists: [SiHtml5,SiCss3,FaJs],
      link:"https://rohith-webcode.github.io/rock-Paper-Scissors"
    },
    {
      id:6,
      title:"Personal Portfolio",
      dec:'A modern, fully responsive portfolio built with React.js and Tailwind CSS to showcase my skills, services, and projects. It features smooth animations, a clean user interface, mobile-friendly design, and reflects my passion for development.',
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1746627196/project12_img_pxrspe.png',
      iconLists: [FaReact,SiTailwindcss,TbBrandFramerMotion],
      link:"https://shoppingcart-frontend-xxrm.onrender.com"
    },
      {
      id:7,
      title:"Logix — Logistics Website",
      dec: "A modern and responsive frontend design inspired by a Webflow logistics theme. This project showcases real-time motion animations, a clean layout, and strong visual hierarchy — all custom-built using HTML, Tailwind CSS, and pure CSS animations (no frameworks or libraries).",
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1749704043/mediamodifier_image_1_loitu5.png',
      iconLists: [FaHtml5,SiTailwindcss,SiCloudinary,SiVercel],
      link:"https://logix-pied.vercel.app"
    },
    {
      id:8,
      title:"Personal Finance Tracker",
      dec:'A full-stack finance management web app built with React.js, Node.js, Express, and MongoDB. It allows users to track income and expenses, manage transactions, and view insights through an intuitive dashboard with a clean, responsive design.',
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1759587120/Screenshot_80_wgpze4.png',
      iconLists: [FaReact,SiTailwindcss,FaNode,SiMongodb,SiExpress],
      link:"https://my-finance-log.vercel.app"
    },
    {
      id:9,
      title:"Mojito Landing Page",
      dec:'A visually appealing landing page designed with HTML, CSS, and GSAP to showcase a refreshing cocktail brand. It features smooth animations, engaging transitions, responsive layout, and highlights creativity in front-end design.',
      img: 'https://res.cloudinary.com/dgrxeqayx/image/upload/v1759587148/Screenshot_81_ejtopt.png',
      iconLists: [FaReact,SiTailwindcss,GiAbstract066 ],
      link:"https://mojitococktail.netlify.app"
    },
  ]
  
  export const MyApproach = [
    {
      icon: <HiOutlineLightBulb/>,
      title: "Discover",
      description: "Understanding your vision, goals, and audience to lay the perfect foundation",
      // img: FaLaptopCode, // example icon component
      // className: "md:top-0 md:left-0", // top-left
    },
    {
      icon:<FaPencilRuler/>,
      title: "Design",
      description: "Crafting intuitive, aesthetic, and user-focused digital experiences.",
    },
    {
      icon:<FaRocket />,
      title: "Deliver",
      description: "Building and launching polished, high-performing websites ready to make an impact.",
    },
  ];