import React from "react";
import { Element } from "react-scroll";
import skill from "../TopContent/img/skill.jpg";

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
    <div className='skillContainer_image'>
        <img src={skill} alt="" />
    </div>
    <div className="SkillContainer_text">
        <h2>SKILLSET</h2>

    </div>
    </Element>
  );
};

export default SkillContainer;
