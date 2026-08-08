import React from 'react'
import './projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import IMG1 from '../../assets/Spotify.png'
import IMG2 from '../../assets/ToDosList.png'
import IMG3 from '../../assets/codeMonks-homePage.png'
import IMG4 from '../../assets/BootStrapWebsite.png'
import IMG5 from '../../assets/Text-To-Speech.png'

AOS.init()

const Projects = () => {
  return (
    <section id="Projects">
      <div className="container portfolio__container">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="portfolio__items">

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>

            <h3>The Spotify Clone</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DhruvTrehan29/Spotify-Clone"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>

              <a
                href="https://spotify-clone-dhruvtrehan29.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>

            <h3>The React ToDo's List</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DhruvTrehan29/First-React-App-To-Do-s-List"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>

              <a
                href="https://first-react-app-to-do-s-list.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>

            <h3>The Code_Monks Website</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DhruvTrehan29/Code-Monks-Project"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>

              <a
                href="https://code-monks.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>

            <h3>The BootStrap Website</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/DhruvTrehan29/BootStrap-Website-"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>

              <a
                href="https://resturant-website-fcxwlirwe-dhruvtrehan29.vercel.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>

            <h3>Text To Speech Converter</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Techknow9/IBM-Project"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Projects
