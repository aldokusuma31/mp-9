import React from 'react';
import ProjectCard from './Helper/ProjectCard';

const Project = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='text-center'>
                <p className='heading__mini'>Recent Work</p>
                <h1 className='heading__primary'>Gallery <span className='text-yellow-300'>Projects</span></h1>
            </div>
            <ProjectCard
                title="Company Profile"
                tech1="HTML"
                tech2="CSS"
                tech3="BOOTSTRAP"
                tech4="JAVASCRIPT"
                image="/images/p1.png"
            />
        </div>
    )
}

export default Project