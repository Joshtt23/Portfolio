import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="all-projects">
      <div className="yrobot">
        <img src="./images/yRobot-preview.png" alt="yRobot Preview" />
        <br/>
        <a href="https://yrobot.us">ŷRobot</a>
        <p>
          Artificial intelligence based machine learning crypto currency signal
          service with additional analysis such as hype and full forward term
          regression
        </p>
      </div>
      <div className="toasty-friends">
        <img src="./images/tf-preview.png" alt="Toasty Friends Preview" />
        <br/>
        <a href="https://toastyfriends.club"> Toasty Friends</a>
        <p>
          Non-Fungible Token project to convert API data to quickly accessible
          and useable trading data for precise and profitable trades.
        </p>
      </div>
    </div>
  );
}

export default Projects;
