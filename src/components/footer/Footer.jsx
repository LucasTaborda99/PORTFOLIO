import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LUCAS TABORDA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lucas-taborda-b03666169/" target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href="https://github.com/LucasTaborda99" target="_blank" title='Github'><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Lucas Taborda. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer