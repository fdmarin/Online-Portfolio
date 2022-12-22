import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ux9k146', 'template_l5vy8xi', form.current, 'CE80kEt7CijoEy7CC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
        <h5>Contact Me</h5>
        <h2>Email & More</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>federicojm05@gmail.com</h5>
              <a href="mailto:federicojm05@gmail.com" target="_blank" rel='noopener noreferrer'>Send a Message</a>
            </article>
          </div>

          {/* End of Contact Options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact