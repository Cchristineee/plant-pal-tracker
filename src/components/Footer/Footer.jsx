import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <h3> 🌱 Plant Pal Tracker </h3>

            <div className="footer-links">
                <a href="https://github.com/Cchristineee/plant-pal-tracker"
                target="_blank" rel="noopener noreferrer" 
                className="github-link">
                    <FaGithub /> GitHub
                </a>

                < a href="https://www.linkedin.com/in/christine-grimadeau/"
                target="_blank" rel="noopener noreferrer"
                className="linkedin-link">
                    <FaLinkedin /> LinkedIn
                </a>
            </div>

            <p>© 2026 All rights reserved.</p>
        </footer>
    ); 

}

export default Footer;
