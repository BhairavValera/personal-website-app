import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Particles from 'react-particles-js'
import particlesConfig from './components/particles'
import FadeIn from 'react-fade-in'

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='particles'>
          <FadeIn delay='150'>
            <Particles height={window.outerHeight} params={particlesConfig}/>
          </FadeIn>
        </div>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>        
      </div>
    </Router>
  )
}

export default App