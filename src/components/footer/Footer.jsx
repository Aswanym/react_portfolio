import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Aswany</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/aswany.achu.3990/'><BsFacebook/></a>
        <a href='https://www.instagram.com/aswany_mahendran/'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/aswany-m-1696281b4/'><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Aswany. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer