import React from "react";
import FloofyLogo from "../../images/svg/FloofyLogo.svg";
import wafflecat from "../../images/wafflecat.png";
import floofy from "../../images/floofy.png";
import { FaTwitter, FaGithub, FaTwitch, FaYoutube, FaHeart } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

//TODO Add href links

function Links(props) {
	return (
		<div className="card-background">
			<h1 className="hidden">Links</h1>
			<div className="card-container">
        <div className="card">
          <div className="card-content">
            <FloofyLogo  className="FloofyLogo" alt="Floofy Logo" />
            <div className="card-profiles">
              <div className="card-profile">
                <img src={wafflecat} className="profile-pic" alt="WaffleCat Profile Pic" />
                <p className="profile-desc">WaffleCat</p>
              </div>
              <div className="card-profile">
                <img src={floofy} className="profile-pic" alt="Floofy Profile Pic" />
                <p className="profile-desc">FloofyKitsune</p>
              </div>
            </div>
            <div className="card-socials">
              <div className="twitter-buttons">
                <div className="twitter-button">
                  <a href="https://twitter.com/wafflecat_" target="_blank">
                    <FaTwitter />
                    <span>Twitter</span>
                  </a>
                </div>
                <div className="twitter-button">
                  <a href="https://twitter.com/flooffykitsune" target="_blank">
                    <FaTwitter />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
              <ul className="card-wrapper">
                <li className="card-button">
                  <a href="https://github.com/FlooffyKitsune" target="_blank">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </li>
                <li className="card-button">
                  <a href="https://www.twitch.tv/wafflecat_" target="_blank">
                    <FaTwitch />
                    <span>Twitch</span>
                  </a>
                </li>
                <li className="card-button">
                  <a href="https://www.youtube.com/channel/UCOHkDQr6nzGeU84YY7ndiRw" target="_blank">
                    <FaYoutube />
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-support">
              <div>
                <p>Support Me!</p>
                <ul className="card-wrapper">
                  <li className="card-button">
                    <a href="https://streamlabs.com/wafflecat_" target="_blank">
                      <FaHeart />
                      <span>Donate</span>
                    </a>
                  </li>
                  <li className="card-button">
                    <a href="https://ko-fi.com/flooffykitsune" target="_blank">
                      <SiKofi />
                      <span>Buy Me a Coffee</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-contact">
              <h2>Contact Me</h2>
              <p>wafflekat1123@gmail.com</p>
              <p>WaffleCat#0101</p>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}

export default Links;
