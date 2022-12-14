import './about.css'
import React from 'react'
import Foto from '../../assets/image.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about' >
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    
    <div className='container about__container' >
      <div className='about__me' >
      <div className='about__me-image' >
      <img src={Foto} alt='imagen personal' />
      </div>



      </div>
      <div className='about__content' >
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward  className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years Working</small>
        </article>
        
        <article className='about__card'>
          <FiUsers  className='about__icon'/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
        </article>
        
        <article className='about__card'>
          <VscFolderLibrary  className='about__icon'/>
          <h5>Proyects</h5>
          <small>20+ Completed Proyects</small>
        </article>

      </div>
      <p>I am passionate about technology and I continue to professionalize myself in this world which continues to excite me for more
       than two years. Every step I take shows me that this is the path I want to follow and I want to be part of your company and projects!</p>
      
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About