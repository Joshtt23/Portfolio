import React from 'react'
import "../styles/Footer.css"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-bar'>
      <div className='self-reg'>
      Developed and Designed by me 🙂 &copy; 2023
      </div>
      <div className='social-links'>
      <a href="https://twitter.com/TheLostToastr"><FaTwitterSquare size={40} className='linkdin-icon'/></a>
      <a href="https://github.com/Joshtt23"><FaGithubSquare size={40} className='git-icon'/></a>
      <a href="https://www.linkedin.com/in/joshua-traver-05196812a/"><FaLinkedin size={40} className='linkdin-icon'/></a>
      </div>
    </div>
  )
}

export default Footer