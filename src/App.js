import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='App'>
      <div id="NavBar">
        <NavBar />
      </div>
      <div id="Content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App