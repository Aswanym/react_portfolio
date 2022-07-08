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
            <h3>UI/ux design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>haiiiii</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>haiiiii</p>
            </li>
            <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>haiiiii</p>
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
                <p>haiiiii</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>haiiiii</p>
              </li>
              <li>
                  <AiOutlineCheck className='service__list-icon'/>
                  <p>haiiiii</p>
              </li>
              <li>
                  <AiOutlineCheck className='service__list-icon'/>
                  <p>haiiiii</p>
              </li>
              </ul>
            </article>
          {/*END WEB DEVELOPMENT SECTION */}
          {/*START LOGICAL DESIGNING SECTION */}
          <article className="service">
            <div className="service__head">
              <h3>UI/ux design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>haiiiii</p>
              </li>
              <li>
                <AiOutlineCheck className='service__list-icon'/>
                <p>haiiiii</p>
              </li>
              <li>
                  <AiOutlineCheck className='service__list-icon'/>
                  <p>haiiiii</p>
                </li>
              </ul>
            </article>
          {/*END LOGICAL DESIGNING SECTION */}
      </div>
    </section >
  )
}

export default Services