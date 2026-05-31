
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'


function App() {
	return <>

  {/* 1. Hami sanga 2 ota layer huncha */}
  {/* Data layer and UI layer. 
  
  Components folder mah chai data ko kaam garcham

  Pages mah separate pages haru bhayo home, about haru testo components ma chai particular page ko components jastai navbar footer hero testo hai
  */}

  <Navbar/>
  <HeroSection/>

  </>
}

export default App
