import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/aswany-m-1696281b4/' target= '_blank'><BsLinkedin /></a>
        <a href='https://github.com/Aswanym' target= '_blank'><FaGithub /></a>
        <a href='https://stackoverflow.com/users/18954373/aswany-mahendran' target= '_blank'><BsStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials