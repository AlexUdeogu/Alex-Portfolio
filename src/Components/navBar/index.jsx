import React, { useState } from 'react'
import './navbar.css'
import resume from '../../assets/Udeogu Alex CV.pdf'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'Udeogu_Alex_CV.pdf');
    document.body.appendChild(link);
    link.click();
  }

  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-330} duration={500} className="desktopMenuListItem">Tools</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={150} duration={500} className="desktopMenuListItem">Contact</Link>
            <a className="desktopMenuListItem" onClick={handleResumeClick}>Resume</a>
        </div>
    </nav>
  )
}

export default Navbar
