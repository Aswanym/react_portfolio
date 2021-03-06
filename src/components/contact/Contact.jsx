import React from 'react'
import './contact.css'
import {AiFillMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mig3qbt', 'template_s6hw8sg', form.current, 'jOJWDtB1C_49v3EF5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiFillMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aswanymahendran222@gmail.com</h5>
            <a href='mailto:aswanymahendran222@gmail.com' target='_blank'>Send mail</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7994787722</h5>
            <a href='https://api.whatsapp.com/send?phone=+917994787722' target='_blank'>Message me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='?' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact