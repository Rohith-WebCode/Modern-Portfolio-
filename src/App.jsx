import Home from './pages/Home'
import NavBar from './components/ui/NavBar'
import Grid from './components/Grid';
import {Route,Routes}from 'react-router-dom'
import { navItems } from './components/data/Data';
import InfiniteCardsUI from './components/InfiniteCardsUI'
import { CardSpotlightUI } from './components/CardSpotlight'
import RecentProjects from './components/RecentProjects';
import MyApproachCanvas from './components/MyApproachCanvas ';
import FooterContact from './components/FooterContact';
import Footer from './pages/Footer';
import ContactForm from './pages/ContactForm'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { FullProjects } from './pages/Projects';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      {isVisible && <ContactForm onClose={() => setIsVisible(false)} />}
      <div className='max-w-7xl w-full'>
        <NavBar navItems={navItems} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home onContactClick={() => setIsVisible(true)} />
                <Grid onContactClick={() => setIsVisible(true)} />
                <InfiniteCardsUI />
                <CardSpotlightUI />
                <RecentProjects />
                <MyApproachCanvas />
              </>
            }
          />
          <Route path="/projects" element={<FullProjects />} />
        </Routes>
      </div>

      <FooterContact onContactClick={() => setIsVisible(true)} />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App



