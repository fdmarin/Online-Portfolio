import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank" rel='noopener noreferrer'><BsLinkedin/></a>
            <a href="https://github.com" target="_blank" rel='noopener noreferrer'><BsGithub/></a>
            <a href="https://facebook.com" target="_blank" rel='noopener noreferrer'><BsFacebook/></a>
            <a href="https://instagram.com" target="_blank" rel='noopener noreferrer'><BsInstagram/></a>
            <a href="https://twitter.com" target="_blank" rel='noopener noreferrer'><BsTwitter/></a>
        </div>
    )
}

export default HeaderSocials