import React from "react";
import {Element} from "react-scroll";
import Project1 from "../Project/Project1";
import "./ProjectContainer.css";

const Projectcontainer = () => {
 const projects = [
 {
      img:"https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=",
      title:"Facebook",
      desc:"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
      link: "www.google.com",

 },
 {
     img:"https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=",
     title:"Facebook",
     desc:"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
     link: "www.google.com",
 },
 {
     img:"https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=",
     title:"Facebook",
     desc:"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
     link: "www.google.com",
 },
 {
     img:"https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=",
     title:"Facebook",
     desc:"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
     link: "www.google.com",
 },
 {
     img:"https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=",
     title:"Facebook",
     desc:"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
     link: "www.google.com",
 },


 {
     img:"https://media.istockphoto.com/photos/developing-programming-and-coding-technologies-with-website-design-in-picture-id1364358321?b=1&k=20&m=1364358321&s=170667a&w=0&h=PpEXtpe9YpTdAORO2BgW1cKe6I2ZrNr9Sx_lcsPX_XI=",
     title:"Facebook",
     desc:"Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
     link: "www.google.com",
 },


 ]
 return (

    <Element className= "Projectcontainer"id="Projects">
    <h1>Projects</h1>
    <p>Here are some project which I done for making lives of people easy.</p>

    <div className="Projectcontainer__Projects">
 {
    projects.map((project,index)=>{
      return (
         <Project1
             key={index}
             img={project.img}
             title={project.title}
             desc={project.desc}
             link={project.link}/>
 )
 })
 }
</div>
 </Element>
 );
};
export default Projectcontainer;