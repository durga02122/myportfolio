import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'


const ExperienceContainer = () => {
  return (
    <Element className='ExperienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='ExperienceContainer_info'>
            <Experience number="+10" title="Clients" />
            <Experience
             number="60+"  
             title="Projects" 
             style={{backgroundColor:" #f64c08"}}
             />
            <Experience number="6+" title="Years Teaching" />
            <Experience number="60000+" title="Students got Trained" />
        </div>
    </Element>
  )
}

export default ExperienceContainer
