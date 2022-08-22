import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/editpic.png'
import Socials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Dhruv Trehan</h1>
      <h5 className="text-light">Full Stack Developer</h5>
      <CTA />
      <Socials/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#About" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
