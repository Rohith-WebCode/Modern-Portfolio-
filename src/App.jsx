import Home from './pages/Home'
import NavBar from './components/ui/NavBar'
import Grid from './components/Grid';
import { navItems } from './components/data/Data';
import InfiniteCardsUI from './components/InfiniteCardsUI'
import { CardSpotlightUI } from './components/CardSpotlight'
import RecentProjects from './components/RecentProjects';
import MyApproachCanvas from './components/MyApproachCanvas ';
import FooterContact from './components/FooterContact';

function App() {
  return (
   <div className=' bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
    <div className='max-w-7xl w-full '>
    <NavBar navItems={navItems}/>
     <Home/>
     <Grid/>
     <InfiniteCardsUI/>
     <CardSpotlightUI/>
     <RecentProjects/>
     <MyApproachCanvas/>
    </div>
    <FooterContact/>
   </div>
  )
}

export default App



