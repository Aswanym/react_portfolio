import React from 'react'
import './portfolio.css'
import IMAGE from '../../assets/image.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMAGE} alt='protfolio-image'/>
          </div>
          <h3>An Ecommerce website</h3>
          <div className="portfolio__item cta">
            <a href='https://github.com/Aswanym/E-commerce' className='btn' target='_blank'>Github</a>
            {/* <a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a> */}
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMAGE} alt='protfolio-image'/>
          </div>
          <h3>A Social media App</h3>
          <div className="portfolio__item cta">
            <a href='https://github.com/Aswanym/sociailmedia' className='btn' target='_blank'>Github</a>
            {/* <a href='https://github.com' className='btn btn-primary'target='_blank'>Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio