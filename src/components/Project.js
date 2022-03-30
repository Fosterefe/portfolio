import React from 'react'
import '../styles/Project.css'

const Project = ({url, img, rep}) => {

    return (
        <div className='projct'>
            <a href={url} target='_blank' rel='noreferrer' className='card'>
                <img src={img} alt={url} className='p-omg'/>
            </a>
            <div className='modal'>
                <a href={rep} target='_blank' rel='noreferrer' >View code</a>
            </div>
        </div>
    )
}

export default Project