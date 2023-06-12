import React, { useState, useEffect } from 'react';
import '../css/StudentCard.css';
import School from './School';
import Skills from './Skills'

const StudentCard = () => {
    
    const [showSkills, setShowSkills] = useState(false);
    const [showSchool, setShowSchool] = useState(false);

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    }

    const toggleSchool = () => {
        setShowSchool(!showSchool);
    }

    return (
        <div className='cardContainer'>
            <h1>James Sales</h1>
            <p>I am a student at Davis Technical College currently studying Software Development. My goal is to become a full-stack developer.</p>
            <div className='selectorButtons'>
            <button onClick={toggleSkills}>
                {showSkills ? 'Hide Skills' : 'Show Skills'}
            </button>
            <button onClick={toggleSchool}>
                {showSchool ? 'Hide School' : 'Show School'}
            </button>
            
            </div>
            <div className='contentDiv'>
            {showSkills && <Skills />}
            {showSchool && <School />}
            </div>
        </div>
    )
};

export default StudentCard;