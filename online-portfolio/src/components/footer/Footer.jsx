import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


function Footer() {
  return (
    <footer>
      <a href="/" className='footer__logo'>Federico J Marin</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/fede.marin.9/" target="_blank" rel='noopener noreferrer'><BsFacebook/></a>
        <a href="https://www.instagram.com/fede_marin_20/" target="_blank" rel='noopener noreferrer'><BsInstagram/></a>
        <a href="https://twitter.com/FedeMarin10" target="_blank" rel='noopener noreferrer'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Federico J Marin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer