import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {IoBookSharp} from 'react-icons/io5'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      
        <h5>Get To Know</h5>
        <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} height="400px" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <IoBookSharp className='about__icon'/>
              <h5>Certificates</h5>
              <small> 3+ Completed Courses</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>

          <p>I'm a grad student of Systems Analysis and Development, and  
          I'm passionate about bringing both the technical and visual aspects of digital products to life.
          I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  ) 
}

export default About