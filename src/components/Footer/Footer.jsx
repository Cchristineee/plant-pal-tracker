import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

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
            </div>

            <p>© 2026 All rights reserved.</p>
        </footer>
    ); 

}

export default Footer;
