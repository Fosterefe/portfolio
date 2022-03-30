import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRef } from 'react'

function NavBar() {

    const nav = useRef(null)
    const links = useRef(null)

    const openMenu = (e) => {
        nav.current.classList.toggle('active')
        if(nav.current.classList === 'links') {
            nav.current.target.classList.remove('active')
        }
    }

  return (
<div className='nav'>
    <div className='hero-nav'>
        <Link to='/' className='nav-icon'>
            <h1>Alexander Borja</h1>
        </Link>
    </div>
    <nav ref={nav} className='naav'>
        <ul className='links-container'>
            <li>
                <Link to='/' className='links'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='links'>About</Link>
            </li>
            <li>
                <Link to='/projects' className='links'>Projects</Link>
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