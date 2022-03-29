import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRef } from 'react'

function NavBar() {

    const nav = useRef(null)

    const openMenu = () => {
        nav.current.classList.toggle('active')
    }

  return (
<div className='nav'>
    <div className='hero-nav'>
        <div className='nav-icon'>
            <Link to='/'>AB</Link>
        </div>
    </div>
    <nav ref={nav} className='naav'>
        <ul className='links-container'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
        </ul>
    </nav>
        <div className='hamburger'>
            <GiHamburgerMenu onClick={openMenu}/>
        </div>
</div>
  )
}

export default NavBar;