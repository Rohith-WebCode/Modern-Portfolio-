import Home from './pages/Home'
import NavBar from './components/ui/NavBar'
import Grid from './components/Grid';
import { navItems } from './components/data/Data';
import InfiniteCardsUI from './components/InfiniteCardsUI'

function App() {
  return (
   <div className=' bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
    <div className='max-w-7xl w-full'>
      <NavBar navItems={navItems}/>
     <Home/>
     <Grid/>
     <InfiniteCardsUI/>
    </div>
   </div>
  )
}

export default App



