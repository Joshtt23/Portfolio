import React, { useState, useEffect } from "react";
import useEffectOnce from "../components/UseEffectOnce";
import "../styles/Projects.css";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

function Projects() {
  const [liveProjects, setLiveProjects] = useState([]);
  const [experienceProjects, setExperienceProjects] = useState([]);
  const [loadProjects, setLoadProjects] = useState(false);

  async function getProjects() {
    const db = getFirestore();

    const allLiveProjects = await getDocs(collection(db, "LiveProjects"));
    const allExperienceProjects = await getDocs(
      collection(db, "ExperienceProjects")
    );

    allLiveProjects.forEach((doc) => {
      setLiveProjects((liveProjects) => liveProjects.concat(doc.data()));
    });

    allExperienceProjects.forEach((doc) => {
      setExperienceProjects((experienceProjects) =>
        experienceProjects.concat(doc.data())
      );
    });

    setLoadProjects(true);
  }

  useEffectOnce(() => {
    getProjects();
  });

  return (
    <div className="all-projects">

      {loadProjects ? (
        <>
          <div className="live-projects">
            <h2>Live Projects</h2>
            <ul>
              {liveProjects.map((doc) => {
                return (
                  <div className="project-card">
                    <li key={doc.key}>
                      <img src={doc.img} alt={doc.Name} />
                      <a href={doc.Link}>{doc.Name}</a>
                      <p>{doc.Description}</p>
                    </li>{" "}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="learning-projects">
            <h2>Experimental Projects</h2>
            To be added...
            <ul>
              {experienceProjects.map((doc) => {
                return (
                  <div className="project-card">
                    <li key={doc.key}>
                      <img src={doc.img} alt={doc.Name} />
                      <a href={doc.link}>{doc.Name}</a>
                      <p>{doc.Description}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div className="loading-logo">Loading...</div>
      )}
    </div>
  );
}

export default Projects;
