import React from 'react'
import Resume from '../../assets/Marin_Federico_Resume.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default CTA