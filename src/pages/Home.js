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
            <p>I'm web developer that is passionate about building meaningful and rich experiences for the web.
                I'm also comftable with the latest technologies and tools. 
            </p>
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