import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3>Web Development</h3>
      </div>
      <ul className='service__list'>
        <li><BiCheck className='service__list-icon'/>
        <p>Landing Page Design</p>
        </li>
        <li><BiCheck className='service__list-icon'/>
        <p>Institutional Websites</p>
        </li>
        <li><BiCheck className='service__list-icon'/>
        <p>100% Custom E-commerce Development</p>
        </li>
        <li><BiCheck className='service__list-icon'/>
        <p>Modern Websites, Responsives and Search engine optimised</p>
        </li>
        <li><BiCheck className='service__list-icon'/>
        <p>Domain Management</p>
        </li>
        <li><BiCheck className='service__list-icon'/>
        <p>Hosting</p>
        </li>
        <li><BiCheck className='service__list-icon'/>
        <p>Search Engine Presence and I provide ongoing<br/> support so that your site is always online.</p>
        </li>
      </ul>
    </article>

    </div>
    
    </section>
  )
}

export default Services