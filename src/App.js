import NavBar from "./NavBar";

import AboutMe from "./aboutme/AboutMe";
import Projects from "./projects/Projects";

import "./bg.scss";
import { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState('light')

  const onSelectMode = (mode) => {
    setMode(mode)
    if (mode === 'dark')
      document.body.classList.add('dark-mode')
    else
      document.body.classList.remove('dark-mode')
  }

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));
  
    // Setup dark/light mode for the first time
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  
    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  return (
    <>
    <NavBar/>
    <AboutMe/>
    <Projects/>

    </>
  )
}

export default App;
