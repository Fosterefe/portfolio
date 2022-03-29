import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function Home() {

    return (
<div className='Home'>
    <div className='container'>
        <section className='sec-1'>
            <h3>- I am</h3>
            <h1>Alexander Borja</h1>
            <h3>Web developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada
                pellentesque elit eget gravida.</p>
            <Link to='/about'>About Me</Link>
        </section>
        <section className='sec-2'>
            <div className='socials'>
                <div className='linkedLin'>
                    <BsLinkedin/>
                    <a href='https://www.linkedin.com/in/gerson-perez-998190213/' target='_blank'>LinkedLink</a>
                </div>
                <div className='github'>
                    <BsGithub/>
                    <a href='https://github.com/Fosterefe' target='_blank'>Github</a>
                </div>
            </div>
        </section>
    </div>
</div>
    )
}

export default  Home;