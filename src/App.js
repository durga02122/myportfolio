import React from "react";
import Header  from "./Components/Header";
import SkillContainer from "./Components/SkillContainer/SkillContainer";
import TopContainer from "./Components/TopContainer/TopContainer"

const App = () => {
  return (
    <div >
      <Header/>
      <TopContainer />
     
      <SkillContainer />
    </div>
  );
};

export default App;
