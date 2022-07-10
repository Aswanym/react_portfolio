import React from 'react'
import './services.css'
import {AiOutlineCheck} from'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/*START UI/UX SECTION */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>I have been working as a python backend developer for last one year.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Excellent at communication and working in team.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Really good solving complex problems and implement ideas in a robust way.</p>
            </li>
            </ul>
          </article>
          {/*END UI/UX SECTION */}
          {/*START WEB DEVELOPMENT SECTION */}
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>Completed one project in web development.</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>Good at frontend technologies such as HTML, CSS, Bootstrap.</p>
              </li>
              <li>
                  <AiOutlineCheck className='service__list-icon'/>
                  <p>Created responsive web applications.</p>
              </li>
              <li>
                  <AiOutlineCheck className='service__list-icon'/>
                  <p>Have knowledge of all the stages of web development from design to deployment.</p>
              </li>
              </ul>
            </article>
          {/*END WEB DEVELOPMENT SECTION */}
          {/*START LOGICAL DESIGNING SECTION */}
          <article className="service">
            <div className="service__head">
              <h3>UI/UX design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>Not much of a desinger.</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>Know the basics of desinging.</p>
              </li>
              <li>
                  <AiOutlineCheck className='service__list-icon'/>
                  <p>Learning process onging.</p>
                </li>
              </ul>
            </article>
          {/*END LOGICAL DESIGNING SECTION */}
      </div>
    </section >
  )
}

export default Services