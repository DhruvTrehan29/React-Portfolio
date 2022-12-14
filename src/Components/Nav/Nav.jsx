import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {FcTimeline} from 'react-icons/fc'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#About" onClick={()=> setActiveNav('#About')} className={activeNav==='#About'?'active':''}><AiOutlineUser/></a>
      <a href="#Skills" onClick={()=> setActiveNav('#Skills')} className={activeNav==='#Skills'?'active':''}><BiBook/></a>
      <a href="#Projects" onClick={()=> setActiveNav('#Projects')} className={activeNav==='#Projects'?'active':''}><RiServiceLine/></a>
      <a href="#App" onClick={()=> setActiveNav('#App')} className={activeNav==='#App'?'active':''}><FcTimeline/></a>
      <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav==='#Contacts'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
