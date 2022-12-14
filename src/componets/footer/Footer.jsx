import React from 'react'
import './footer.css'
import{FaFacebookF} from 'react-icons/fa'
import{TiSocialInstagram} from 'react-icons/ti'
import{BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
    <a href="# " className='footer__logo'>Matt</a>
    
    <ul className='permalinks'>
      <li><a href='# '>Home</a> </li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href='https://facebook.com'> <FaFacebookF/> </a>
      <a href='https://instagram.com'><TiSocialInstagram/> </a>
      <a href='https://twitter.com'><BsTwitter/> </a>
    </div>
    
    <div className='footer__copyright'>
      <small>&copy; Matt Agobian 2022. All right reserved</small>
    </div>
    </footer>
  )
}

export default Footer