import React from 'react'
import '../styles/Projects.css'
import Project from '../components/Project'
import p from '../imgs/p.png'
import m from '../imgs/m.png'
import q from '../imgs/q.png'


const Projects = () => {

    return (
        <div className='p'>
            <div className='p-wrapper'>
                <Project
                    url='https://still-wave-59663.herokuapp.com/'
                    img={p}
                    rep='https://github.com/Fosterefe/FLASK-W0'
                    />
                <Project
                    url='https://alexsearchmovies.herokuapp.com/'
                    img={m}
                    rep='https://github.com/Fosterefe/movies'/>
                <Project
                    url='https://alexquizz.netlify.app/'
                    img={q}
                    rep='https://github.com/Fosterefe/quizz'/>
            </div>
        </div>
    )
}

export default Projects