import { useState, useEffect, useRef } from 'react'
import './App.css'
import Lenis from 'lenis'
import Navbar from "./components/navbar.jsx";
import Circle from "./components/Circle.jsx";
import Landing from "./components/sections/Landing.jsx"; 
import One from "./components/sections/One.jsx";
import Two from "./components/sections/Two.jsx";
import Four from "./components/sections/Four.jsx"
import Five from './components/sections/Five.jsx';
import Footer from './components/sections/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  //lenis/////
    useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  ////////////
  return (
    <div>
    <div>
      <Navbar />
      <Circle />
    </div>
    <div className="sections-wrapper">
    <Landing />
    <One />
    <Two />
    <Four />
    <Five />
    <Footer />
    </div>
    </div>
  )
}

export default App
