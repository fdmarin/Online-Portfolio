import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import ABOUT from '../../assets/about_me.png'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT} alt="About" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eos esse architecto quaerat exercitationem minus! Illum odit magni labore libero minima cumque exercitationem voluptatum voluptate fugit voluptas, eligendi sunt nulla?
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About