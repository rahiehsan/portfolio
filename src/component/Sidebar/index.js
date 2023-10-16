import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import Logo from '../../assets/images/svg-icon.png'
import Netlify_dark from '../../assets/images/Netlify_dark.png'
import Netlify_yellow from '../../assets/images/Netlify_yellow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faListCheck
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/project"
        >
        <FontAwesomeIcon icon={faListCheck} color='#4d4d4e' />        
        </NavLink>
      </nav>


      <ul>
      <li>
          <a target='_blank' rel="noreferrer" href="" >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        
        <li>
          <a target='_blank' rel="noreferrer" href="https://app.netlify.com/teams/rahiehsan045/sites" >
            {/* target="_blank", it instructs the browser to open the linked content in a new browser tab or window */}
            {/* <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> */}
            {/* <img src="../../assets/images/Netlify_dark.png" alt="" /> */}

            <div className="image-container">
            <img className="default-image" src={Netlify_dark} alt="" />
            <img className="hover-image" src={Netlify_yellow} alt="" />
            </div>

          </a>
        </li>
        
        {/* <li>
          <a target='_blank' rel="noreferrer" href="" >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        
        <li>
          <a target='_blank' rel="noreferrer" href="" >
          // target="_blank", it instructs the browser to open the linked content in a new browser tab or window
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />          
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default Sidebar
