import React from 'react';
import '../css/Skills.css'


const Skills = () => {

    let skillsArray = ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'node.js']


    return(
        <div>
            <h3>My Skills</h3>
            <div className='skillsContainer'>
                <ul className='skillsList'>
                    {skillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills;