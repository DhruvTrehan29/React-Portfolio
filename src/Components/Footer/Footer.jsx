import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'
import{SiLeetcode} from 'react-icons/si'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dhruv Trehan</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#App">Timeline</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/dhruvtrehan29/practice/" target="_blank"><SiGeeksforgeeks/></a>
        <a href="https://leetcode.com/DhruvTrehan/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer