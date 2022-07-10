import icon from "./assets/home/Path.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="image">
        <div class="container">
          <div class="header">
            <div class="toppading"></div>
            <div class="headerimage">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <img src={icon} className="" alt="icon" />
            </div>

            <div class="menu">
              <div class="line"></div>
              <div class="choices">
                <div class="homepage">
                  <a href="./index.html">00 HOME</a>
                </div>
                <div class="destinationpage">
                  <a href="#">01 DESTINATION</a>
                </div>
                <div class="crewpage">
                  <a href="#">02 CREW</a>
                </div>
                <div class="technologypage">
                  <a href="#">03 TECHNOLOGY</a>
                </div>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="introduction">
              <div class="introductioncontainer">
                <div class="first">SO, YOU WANT TO TRAVEL TO</div>
                <div class="second">SPACE</div>
                <div class="third">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </div>
              </div>
            </div>
            <div class="hovereffect">
              <div class="explorebackground">
                <div class="explore">EXPLORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
