import React from 'react'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import FadeIn from 'react-fade-in'
import NavIcons from './components/NavIcons';

function App() {
  return (
    <div class="app">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <NavIcons/>
    </div>
  )
}

export default App