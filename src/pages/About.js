import React from 'react'
import '../styles/About.css'

function About() {
  return (
<div className='about'>
    <div className='ac-1'>
        <div className='ma'>
            <h1>More about me</h1>
            <p>I'm a highly-motivated developer that enjoys building modern and stable
                applications. I'm great at solving problems and implementing solutions to
                technical issues.
            </p>
        </div>
        <div className='skills'>
            <h1>My skills are:</h1>
            <ul>
                <li>HTML,CSS and JavaScript</li>
                <li>TypeScript</li>
                <li>Experience with Bootstrap and Meterial UI</li>
                <li>React JavaScript framework</li>
                <li>REST APIs</li>
                <li>Python as a server-side language</li>
                <li>Experience with MySQL databases</li>
                <li>Sass</li>
            </ul>
        </div>
    </div>
    <div className='ac-2'>
        <div className='s-imgs'>
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/react-js.png'/> 
          <img src='https://presidio-ventures.com/wp-content/uploads/2018/02/MySQL-Logo-275.png' />
          <img src='https://miro.medium.com/max/1024/1*9U1toerFxB8aiFRreLxEUQ.png' />
          <img src='https://www.dataquest.io/wp-content/uploads/2020/05/python_logo.png' />
        </div>
    </div>
</div>
  )
}

export default About;