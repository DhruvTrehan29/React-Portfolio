import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'
import{SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" className='socialEdit'><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" className='socialEdit'><FaGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/dhruvtrehan29/practice/" target="_blank" className='socialEdit'><SiGeeksforgeeks/></a>
        <a href="https://leetcode.com/DhruvTrehan/" target="_blank" className='socialEdit'><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials