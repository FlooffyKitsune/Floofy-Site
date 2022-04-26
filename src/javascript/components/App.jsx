// TODO: Import Logos
// ! While links has a route path, it is not part of general navigation

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Coding from "../Pages/Coding";
import Illustration from "../Pages/Illustration";
import Modeling from "../Pages/Modeling";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Links from "../Pages/Links";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/coding" element={<Coding />} />
                    <Route path="/illustration" element={<Illustration />} />
                    <Route path="/modeling" element={<Modeling />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/card" element={<Links />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;