import React from 'react'
import './index.css'
import Header from './Components/Header/Header'
import NavBar from './Components/Nav/Nav'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Timeline from './Components/Timeline/Timeline'
import Contacts from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Timeline/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
