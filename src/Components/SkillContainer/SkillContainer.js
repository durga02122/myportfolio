import React from "react";
import { Element } from "react-scroll";
import skill from "../TopContent/img/skill.jpg";
import { LinearProgress } from "@material-ui/core";
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
    <div className='skillContainer_image'>
        <img src={skill} alt="" />
    </div>
    <div className="SkillContainer_text">
        <h2>SKILLSET</h2>
        <div className="SkillContainer_skillset">
            <h5>React</h5>
            <div className="SkillContainer_slider SkillContainer_slider1">
                <LinearProgress variant="determinate" value={90}/>
            </div>
        </div>
        <div className="SkillContainer_skillset">
            <h5>Node js</h5>
            <div className="SkillContainer_slider SkillContainer_slider2">
                <LinearProgress variant="determinate" value={75}/>
            </div>
        </div>
        <div className="SkillContainer_skillset">
            <h5>React Native</h5>
            <div className="SkillContainer_slider SkillContainer_slider3">
                <LinearProgress variant="determinate" value={80}/>
            </div>
        </div>
        <div className="SkillContainer_skillset">
            <h5>Docker</h5>
            <div className="SkillContainer_slider SkillContainer_slider4">
                <LinearProgress variant="determinate" value={70}/>
            </div>
        </div>
        <div className="SkillContainer_skillset">
            <h5>GraphQL</h5>
            <div className="SkillContainer_slider SkillContainer_slider5">
                <LinearProgress variant="determinate" value={50}/>
            </div>
        </div>
        <div className="SkillContainer_skillset">
            <h5>AWS</h5>
            <div className="SkillContainer_slider SkillContainer_slider6">
                <LinearProgress variant="determinate" value={60}/>
            </div>
        </div>
    </div>
    </Element>
  );
};

export default SkillContainer;
