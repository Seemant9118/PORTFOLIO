import React from "react";
import { Link } from "react-scroll";
import Toggle from "../toggle/Toggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">PORTFOLIO</div>
        <Toggle />
      </div>
      <div className="n-left">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Technologies" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="EventsWorks" smooth={true}>
              <li>Achievements</li>
            </Link>
            <Link spy={true} to="Gallery" smooth={true}>
              <li>Projects</li>
            </Link>
            <Link spy={true} to="Team" smooth={true}>
              <li>Experiences</li>
            </Link>
            <Link spy={true} to="Contact" smooth={true}>
              <li>Contacts</li>
            </Link>

            <a
              className="resumeCta"
              href="https://drive.google.com/file/d/17Gvki2U0JMfl-eNBzSZ_dD2sN0DmsYrX/view?usp=drive_link"
              download="Seemant_Resume.pdf"
            >
              <li>Resume</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
