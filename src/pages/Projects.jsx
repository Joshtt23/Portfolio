import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

function Projects() {
  const [liveProjects, setLiveProjects] = useState({});
  const [experienceProjects, setExperienceProjects] = useState({});
  const [loadProjects, setLoadProjects] = useState(false);

  async function getProjects() {
    const db = getFirestore();

    const liveProjects = await getDocs(collection(db, "LiveProjects"));
    const experienceProjects = await getDocs(
      collection(db, "ExperienceProjects")
    );

    setExperienceProjects(experienceProjects);
    setLoadProjects(true);
    setLiveProjects(liveProjects);
  }

  useEffect(() => {
    const onPageLoad = () => {
      getProjects();
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="all-projects">
      <div className="live-projects">
        <h2>Live Projects</h2>
        <div className="yrobot">
          <img src="./images/yRobot-preview.png" alt="yRobot Preview" />
          <br />
          <a href="https://yrobot.us">ŷRobot</a>
          <p>
            Machine learning based artificial intelligence to provide crypto currency
            signal services, with additional analysis such as sentiment and full
            term regression.
          </p>
        </div>
        <div className="toasty-friends">
          <img src="./images/tf-preview.png" alt="Toasty Friends Preview" />
          <br />
          <a href="https://toastyfriends.club"> Toasty Friends</a>
          <p>
            Non-Fungible Token project to convert marketplace API data to quickly accessible
            and easy to read trading data for precise and profitable trades in the markets.
          </p>
        </div>
      </div>
      {/* <div className="learning-projects">
        <h2>Experience Projects</h2>

      </div> */}
      {1==2 ? (
        <>
          <div className="live-projects">
            <h2>Live Projects</h2>
            {liveProjects.forEach((project) => {
              return (
                <div className="project-card">
                  <img src={project.data().Img} alt="Project Image" />
                  <a href={project.data().Link} alt="Project Link">
                    {project.data().Name}
                  </a>
                  <p>{project.data().Description}</p>
                </div>
              );
            })}
          </div>
          <div className="learning-projects">
            <h2>Experimental Projects</h2>
            {experienceProjects.forEach((project) => {
              return (
                <div className="project-card">
                  <img src={project.data().img} alt="Project Image" />
                  <a href={project.data().link} alt="Project Link">
                    {project.data().name}
                  </a>
                  <p>{project.data().description}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Projects;
