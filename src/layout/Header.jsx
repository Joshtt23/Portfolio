import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import {MdClose} from 'react-icons/md'
import { FiMenu } from "react-icons/fi"


function Header() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="header-bar">
      <div className="nav-logo">
        <Link to="/">
          {/* replace with professional banner */}
          {/* <img src="./images/banner.png" /> */}
          Welcome Banner
        </Link>
      </div>
      {windowSize.innerWidth <= 600 ? (
        <>
          <button onClick={handleToggle} className="hamburger-btn">
            {navbarOpen ? <MdClose className="close-menu"/> : <FiMenu className="open-menu"/>}
          </button>
          {navbarOpen ? (
            <>
              <ul className="menu-nav">
                <Link to={"resume"}>Resume</Link>{" "}
                <Link to={"projects"}>Projects</Link>{" "}
                <Link to={"contact"}>Contact</Link>{" "}
                <Link to={"about"}>About</Link>
              </ul>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <div className="nav-links">
            <Link to={"resume"}>Resume</Link>{" "}
            <Link to={"projects"}>Projects</Link>{" "}
            <Link to={"contact"}>Contact</Link> <Link to={"about"}>About</Link>
          </div>
        </>
      )}
    </nav>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Header;
