import React from 'react'
import '../Pages/LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageName from '../assets/play.png'

import { faHouse, faBook, faFilm, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faSquareXTwitter, faSquareInstagram, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div>
      {/* Header Navbar */}

      <div>

<nav className='bg-primary'>

    <img src={imageName} alt="noooo" className="move-horizontal" height={50} width={50} />
    <h3 className='heading'>MediaPlayerPro</h3>
    <ul>
        <li><FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px' }} /><a href='#'>Home</a></li>
        <li><FontAwesomeIcon icon={faBook} style={{ marginRight: '5px' }} /><a href='#'>Blog</a></li>
        <li><FontAwesomeIcon icon={faFilm} style={{ marginRight: '5px' }} /><a href='#'>Features</a></li>
        <li><FontAwesomeIcon icon={faMobileScreen} style={{ marginRight: '5px' }} /><a href='#'>Contact</a></li>

    </ul>
</nav>
</div>
    </div>
  )
}

export default Header