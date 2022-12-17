import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Federico Marin</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials/>

        {/* <a href="#contact" className='scroll__down'> Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header