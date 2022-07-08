import React from 'react'
import './experience.css'
import {AiFillCheckSquare} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills?</h5>
      <h2>My Experience</h2>

      <div className='container experience__contianer'>
        <div className="experince__frontend">
          <h3>Frontend Development</h3>
          <div className="experince__content">
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>css</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experince__backend">
        <h3>Backend Development</h3>

        <div className="experince__content">
            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Python Django</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Python DRF</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Celery</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckSquare className='experience__details-icon'/>
              <div>
                <h4>Pandas</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience