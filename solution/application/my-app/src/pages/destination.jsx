import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/shared/logo.svg";
import data from "../data.json";
import moon from "../assets/destination/image-moon.png";

function Destination() {
  const destinationData = data.destinations;
  console.log(destinationData[0]);

  return (
    <div className="image destinationimage">
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
                <Link to="/destination" className="active">
                  01 DESTINATION
                </Link>
              </div>
              <div className="crewpage">
                <Link to="/crew" className="link">
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
          <div className="heading">
            <span className="count">01</span>Pick your destination
            <div className="destinationImage">
              <img src={moon} className="" alt="moon" />
            </div>
          </div>

          <div className="destinationsDiscription">
            <div className="destinationSelector">
              <ul>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
              </ul>
            </div>
            <div className="destinationDiscription">
              <div className="destinationName">{destinationData[0].name}</div>
              <div className="aboutdestination">
                {destinationData[0].description}
              </div>
              <div className="destinationDiscriptionFooter">
                <div className="emptyColumn"></div>
                <div className="discriptionFooter">
                  <span className="discriptionFootertHead">Avg. Distance </span>
                  {destinationData[0].distance}
                </div>
                <div className="discriptionFooter">
                  <span className="discriptionFootertHead">
                    Est. Travel Time{" "}
                  </span>
                  {destinationData[0].travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
