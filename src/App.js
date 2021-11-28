import React from 'react';
import './App.css';
import NavIcons from './components/NavIcons';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='app'>
      <NavIcons/>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App