import React from 'react'
import './About.css'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__cards'>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About