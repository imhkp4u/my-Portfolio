import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/imhkp4u/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://leetcode.com/imhkp4u/">
                <i class="fa fa-code"></i>
              </a>
              <a href="https://github.com/imhkp4u">
                <i className="fa fa-github-square" />
              </a>
              <a href="https://www.linkedin.com/in/imhkp4u/">
                <i className="fa fa-linkedin-square" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Hemant</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    1000,
                    "Fullstack Developer 💻",
                    1000,
                    "Require Js 📱",
                    1000,
                    "MERN stack 🔴",
                    1000,
                    "React - Redux 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building performant & scalable front-end web applications.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="resumeUpdated.pdf" download="Hemant's Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
