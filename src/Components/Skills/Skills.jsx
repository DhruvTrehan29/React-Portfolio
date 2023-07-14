import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Skills = () => {
  return (
    <section id='Skills' data-aos="fade-left" data-aos-duration="1000">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container container__skills" >
        <div className="container__frontend">
          <h3>FrontEnd Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
             <div>
              <h4>HTML</h4>
             <small className='text-light'>Advance</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>CSS</h4>
             <small className='text-light'>Advance</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>JavaScript</h4>
             <small className='text-light'>Intermidiate</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>React Js</h4>
             <small className='text-light'>Intermidiate</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>BootStrap</h4>
             <small className='text-light'>Intermidiate</small>
             </div>
            </article>
          </div>
        </div>


       <div className="container__backend">
       <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>Python</h4>
             <small className='text-light'>Intermidiate</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>Java</h4>
             <small className='text-light'>Advance</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>C/C++</h4>
             <small className='text-light'>Intermidiate</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>Express Js</h4>
             <small className='text-light'>Begineer</small>
             </div>
            </article>

            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>Node Js</h4>
             <small className='text-light'>Begineer</small>
             </div>
            </article>
            <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>My Sql</h4>
             <small className='text-light'>Intermidiate</small>
             </div>
            </article>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Skills
