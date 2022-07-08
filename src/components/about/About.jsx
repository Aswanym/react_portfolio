import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='about-image'></img>
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ years experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3+ happy Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>4+ Successfully Completed</small>
            </article>
          </div>
          <p>
            Passionate Backend developer with industry experience in building web applications and
            I specialized in python django. Saying so I just don't wanted to limit myself to backend, 
            I am extremely enthusiastic to learn and implement new areas of 
            development. As part of that I have startd to lean towards frontend technologies as well.
            Optimism, work ethics, willingness to take responsibilities... these are some 
            qualities that I see in me. And I am trying to create and search more good qualities 
            day by day not just as a developer perspective but also as a human being.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk more</a>
        </div>
        </div>
    </section>

  )
}

export default About