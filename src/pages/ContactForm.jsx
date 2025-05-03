import React, { useRef, useState }  from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin,FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { MdPhone } from 'react-icons/md'; 
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ContactForm = ({ onClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async(e) => {
    e.preventDefault();
    setLoading(true);
    

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          form.current.reset(); 
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          toast.error('Something went wrong. Try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div  id="backdrop" className='fixed top-0 left-0 right-0 bottom-0 z-80 backdrop-blur-sm bg-black/30 flex justify-center items-end' onClick={onClose}>
        <motion.form 
          ref={form} onSubmit={sendEmail} 
          onClick={(e) => e.stopPropagation()}
          initial={{opacity:0.2,y:50}} transition={{duration:0.3}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='relative bg-[#191919] p-10 rounded-xl text-neutral-500 ' >
           <div className='flex justify-center gap-4 text-2xl py-5'>
           <a href='https://github.com/Rohith-WebCode'><FaGithub/></a>
            <a href='https://www.instagram.com/_.rohith.p_'><FaInstagram/></a>
            <a href='https://www.linkedin.com/in/rohithprakash-dev'><FaLinkedin/></a>
           </div>
           <div className=' flex justify-between flex-col sm:flex-row gap-2.5'>
            <div className='inline-flex items-center gap-2 px-3 py-3 text-xs rounded-lg justify-center border border-neutral-700 bg-transparent text-neutral-100 hover:bg-neutral-800 transition sm:w-[15rem]' ><a className='inline-flex items-center gap-2 justify-center' href='mailto:itsrohithprakash@gmail.com'><SiGmail/>itsrohithprakash@gmail.com</a></div>
            <div className='inline-flex items-center gap-2 px-3 py-3 text-xs rounded-lg justify-center border border-neutral-700 bg-transparent text-neutral-100 hover:bg-neutral-800 transition sm:w-[15rem]'><a className='inline-flex items-center gap-2 justify-center' href="https://wa.me/918590566352?text=Hi%2C%20I'm%20interested%20in%20your%20work"><FaWhatsapp/> Message on WhatsApp</a></div>
           </div>
           <p className='text-center text-xs py-3'>Or send a message</p>

            <div className='border px-6 py-3 flex items-center gap-2 rounded mt-5 w-full sm:w-[30rem] '>
                <input type='email' name="email" className='outline-none text-sm bg-transparent' placeholder='Email' required/>
            </div>
            <textarea name="message" className='border bg-transparent px-6 py-3 flex items-center gap-2 rounded mt-4 max-h-[200px] min-h-[100px] w-screen sm:w-[30rem]' placeholder='Your message...' rows={2} required>
            </textarea>
            <button className='bg-neutral-800 w-full mt-5 text-[#afb0b6] py-2 rounded text-sm'>{loading ? 'Sending...' : 'Send Message'}</button>
        
        </motion.form>
    </div>
  )
}

export default ContactForm