import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

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