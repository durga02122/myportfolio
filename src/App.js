import React from "react";
import Header  from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer/ProjectContainer";
import SkillContainer from "./Components/SkillContainer/SkillContainer";
import TopContainer from "./Components/TopContainer/TopContainer"
import "./App.css"
const App = () => {
  return (
    <div >
      <Header/>
      <TopContainer />
      
      <SkillContainer />
      <ProjectContainer />
    </div>
  );
};

export default App;
