import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

function Projects() {

  // get each category from database and map with img name and descriptions


  // const [ liveProjects, setLiveProjects ] = useState({})
  // const [ experienceProjects, setExperienceProjects ] = useState({})

  // liveProjects.map(project => {
  //   <div className="project-card">
  //     <img src={project.img} alt="Project Image"/>
  //     <a href={project.link} alt="Project Link">{project.name}</a>
  //     <p>{project.description}</p>
  //   </div>
  // })
  
  // experienceProjects.map(project => {
  //   <div className="project-card">
  //     <img src={project.img} alt="Project Image"/>
  //     <a href={project.link} alt="Project Link">{project.name}</a>
  //     <p>{project.description}</p>
  //   </div>
  // })

  // useEffect(() => {
    
  
    
  // }, [])
  

  return (
    <div className="all-projects">
      <div className="live-projects">
        <h2>Live Projects</h2>
        <div className="yrobot">
          <img src="./images/yRobot-preview.png" alt="yRobot Preview" />
          <br />
          <a href="https://yrobot.us">ŷRobot</a>
          <p>
            Artificial intelligence based machine learning crypto currency
            signal service with additional analysis such as hype and full
            forward term regression
          </p>
        </div>
        <div className="toasty-friends">
          <img src="./images/tf-preview.png" alt="Toasty Friends Preview" />
          <br />
          <a href="https://toastyfriends.club"> Toasty Friends</a>
          <p>
            Non-Fungible Token project to convert API data to quickly accessible
            and useable trading data for precise and profitable trades.
          </p>
        </div>
      </div>
      <div className="learning-projects">
        <h2>Experience Projects</h2>

      </div>
    </div>
  );
}

export default Projects;
