import React from "react";

class NetworkTags extends React.Component {
  render() {
    return (
      <div className="networkTags scale-in-hor-left">
        <p className="follow">Follow me</p>
        <ul className="tagList">
          <li className="tag git">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jumantet"
            >
              <img
                className="logo"
                alt="logo-git"
                src={require("../assets/images/logo-git.png")}
              />
            </a>
          </li>
          <li className="tag linkedin">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/julian-mantet"
            >
              <img
                className="logo-linkedin"
                alt="logo-linkedin"
                src={require("../assets/images/linkedin.png")}
              />
            </a>
          </li>
          <li className="tag twitter">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/JulianMantet"
            >
              <img
                className="logo-linkedin"
                alt="logo"
                src={require("../assets/images/twitter.png")}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NetworkTags;
