import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <section id='home'>
      <div>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Federico Marin</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials/>
      </div>
    </div>
    </section>
    
  )
}

export default Header