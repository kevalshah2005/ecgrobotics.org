import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button.jsx'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [visible, setVisible] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Used for determining whether to display full navbar or use mobile menu
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', handleScroll)

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <Link to='/'>
                <img src={logo} alt="" className='logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sponsors' className='nav-links' onClick={closeMobileMenu}>
                        Sponsors
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/teams' className='nav-links' onClick={closeMobileMenu}>
                        Our Teams
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar