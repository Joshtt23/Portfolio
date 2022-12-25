import React from "react";
import "../styles/Resume.css"

function Resume() {
  return (
    <div>
      <object
        data="./files/resume.pdf"
        type="application/pdf"
        className="resume-window"
      >
        <p>
          If resume is not shown, click {" "}
          <a href="./files/resume.pdf" download>here</a>
          to download!
        </p>
      </object>
    </div>
  );
}

export default Resume;
