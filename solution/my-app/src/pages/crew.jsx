import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/shared/logo.svg";

function Crew() {
  return (
    <div className="image crewimage">
      <div className="container">
        <div className="header">
          <div className="toppading"></div>
          <div className="headerimage">
            <img src={icon} className="" alt="icon" />
          </div>

          <div className="menu">
            <div className="line"></div>
            <div className="choices">
              <div className="homepage">
                <Link to="/" className="link">
                  00 HOME
                </Link>
              </div>
              <div className="destinationpage">
                <Link to="/destination" className="link">
                  01 DESTINATION
                </Link>
              </div>
              <div className="crewpage">
                <Link to="/crew" className="active">
                  02 CREW
                </Link>
              </div>
              <div className="technologypage">
                <Link to="/technology" className="link">
                  03 TECHNOLOGY
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="introduction">
            <div className="introductioncontainer">
              <div className="first">SO, YOU WANT TO TRAVEL TO</div>
              <div className="second">SPACE</div>
              <div className="third">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </div>
            </div>
          </div>
          <div className="hovereffect">
            <div className="explorebackground">
              <div className="explore">EXPLORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
