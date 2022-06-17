import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lucas-taborda-b03666169/" target="_blank" title='Linkedin'><BsLinkedin/></a>
        <a href="https://github.com/LucasTaborda99" target="_blank" title='Github'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials