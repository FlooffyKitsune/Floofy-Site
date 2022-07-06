import React from "react";
import "../../styles/home.scss"
import Navigation from "../components/Navigation";
import FloofyLogo from "../../images/svg/FloofyLogo.svg";

function Home(props) {
  return (
    <div>
      <Navigation />
      <h1 className="hidden">Home</h1>
      <div className="Temp">
        <FloofyLogo  className="TempFloofyLogo" alt="Floofy Logo" />
        <h2>Coming Soon...</h2>
      </div>
    </div>
  );
}

export default Home;
