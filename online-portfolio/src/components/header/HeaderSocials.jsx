import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/federico-marin-24798a1b7/" target="_blank" rel='noopener noreferrer'><BsLinkedin/></a>
            <a href="https://github.com/fdmarin" target="_blank" rel='noopener noreferrer'><BsGithub/></a>
            <a href="https://www.facebook.com/fede.marin.9/" target="_blank" rel='noopener noreferrer'><BsFacebook/></a>
            <a href="https://www.instagram.com/fede_marin_20/" target="_blank" rel='noopener noreferrer'><BsInstagram/></a>
            <a href="https://twitter.com/FedeMarin10" target="_blank" rel='noopener noreferrer'><BsTwitter/></a>
        </div>
    )
}

export default HeaderSocials