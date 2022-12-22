import React from 'react'
import './Portfolio.css'
import Weather from '../../assets/WeatherApp.png'
import Carousel from '../../assets/Carousel.png'
import UTEP from '../../assets/UT.png'

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {Weather} alt="" />            
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            
          </div>
            <a href="https://github.com/fdmarin" className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <a href="https://github.com/fdmarin" className='btn brn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {Carousel} alt="" />
          </div>
          <h3>Carousel</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fdmarin" className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <a href="https://github.com/fdmarin" className='btn brn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {UTEP} alt="" />
          </div>
          <h3>AVERT - Senior Capstone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Team-3-CS4311" className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
            <a href="https://github.com/Team-3-CS4311" className='btn brn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio