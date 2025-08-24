import React from "react";
import "../Style/Services.css";
import codealt from "../Images/codealt.png";
import palette_solid from "../Images/palette_solid.png";
import androidlogo from "../Images/androidlogo.png";
function Description() {
  return (
    <>
      <div className="services">
        <h2 className="heading">My <span style={{ "--i": "4;" }}>Service</span></h2>
        <div className="services-container">
          <div className="services-box">
            <img src={codealt} alt="" />
            <h3>Website Development</h3>
            <p>
              Building responsive, modern, and fast websites using HTML, CSS,
              JavaScript, and frameworks. Ensuring cross-browser compatibility
              and mobile responsiveness.
            </p>
            <a href="/" className="btn">
              Read more
            </a>
          </div>

          <div className="services-box">
            <img src={palette_solid} alt="" />
            <h3>Single Page Applications (SPAs)</h3>
            <p>
              Developing dynamic web applications using React.js. Improving
              website speed, SEO, and accessibility. Implementing state
              management with Redux, Context API.
            </p>
            <a href="/" className="btn">
              Read more
            </a>
          </div>

          <div className="services-box">
            <img src={androidlogo} alt="" />
            <h3>SEO Optimization for Front-End</h3>
            <p>
              Implementing on-page SEO (meta tags, structured data, page speed).
              Ensuring proper accessibility (A11Y) and semantic HTML usage.
            </p>
            <a href="/" className="btn B1">
              Read more
            </a>
          </div>
        </div>
      </div>
      <section className="skills" id="skill">
        <div className="main-text">
          <h1>Technical and professional</h1>
          <h2 className="heading">
            My <span style={{ "--i": 4 }}>Skills</span>
          </h2>
        </div>

        <div className="skill-main">
          <div className="skill-left">
            <h3>Technical Skills</h3>
            <div className="skill-bar">
              <div className="skill-info">
                <p>HTML</p>
                <p>82%</p>
              </div>
              <div className="bar">
                <span className="html"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-info">
                <p>CSS</p>
                <p>72%</p>
              </div>
              <div className="bar">
                <span className="css"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-info">
                <p>JavaScript</p>
                <p>62%</p>
              </div>
              <div className="bar">
                <span className="javascript"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-info">
                <p>React</p>
                <p>52%</p>
              </div>
              <div className="bar">
                <span className="react"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-info">
                <p>Node.Js</p>
                <p>52%</p>
              </div>
              <div className="bar">
                <span className="nodejs"></span>
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-info">
                <p>MongoDB</p>
                <p>42%</p>
              </div>
              <div className="bar">
                <span className="mongodb"></span>
              </div>
            </div>
          </div>

          <div className="container1">
            <h1 className="heading1">professional Skills</h1>
            <div className="radial-bars">
              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-1"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">90%</div>
                <div className="text">Creativity</div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-12"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">80%</div>
                <div className="text">Communication</div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-13"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">70%</div>
                <div className="text">Problem Solving</div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-14"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">50%</div>
                <div className="text">Team Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
