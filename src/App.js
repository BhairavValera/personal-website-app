import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Particles from 'react-particles-js'
import particlesConfig from './components/particles'
import FadeIn from 'react-fade-in'

function App() {
  return (
    <div className='App' id='App'>
      <div id="NavBar">
        <NavBar />
      </div>
      <div id="Content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App