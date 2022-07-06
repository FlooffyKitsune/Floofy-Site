// TODO: Import Logos

import React from "react";
import "../../styles/navigation.scss"
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <div className="navigation-links">
                <Link to="/">Home</Link>
                <Link to="/coding">Coding</Link>
                <Link to="/illustration">Illustration</Link>
                <Link to="/modeling">Modeling</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Navigation;