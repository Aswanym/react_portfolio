import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com' target= '_blank'><BsLinkedin /></a>
        <a href='https://github.com' target= '_blank'><FaGithub /></a>
        <a href='https://dripple.com' target= '_blank'><BsStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials