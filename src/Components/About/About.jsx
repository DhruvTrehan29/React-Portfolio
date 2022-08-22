import React from 'react'
import './about.css'
import ME from '../../assets/pic.png'
import {BiCodeAlt} from 'react-icons/bi'
import {BiCodeCurly} from 'react-icons/bi'
const about = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container container__about">
        <div className="about__me">
        <div className="about__me-image">
            <img src={ME} alt="No Image Found" />
          </div>
        </div>

        <div className="about__content">
         <div className="about__cards">
          <article className='about__card'>
              <BiCodeAlt className="about__icons"/>
            <h5>Projects</h5>
            <small>3+ live projects</small>
          </article>

          <article className='about__card'>
          <BiCodeCurly className="about__icons"/>
            <h5>Hackathons</h5>
            <small>Participated in 2 Hackathon</small>
          </article>
         </div>
         <p>I am currently pursuing Btech in Information Technology(5th Semester) from Dr. Akhilesh Das Gupta Institute Of  technology and Management. I am currently seeking a platform where I could utilize my technical skills and knowledge for the growth and productivity of the organization and also gain relevant experience out of it </p>
         <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
