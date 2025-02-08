import React from "react";
import "../Style/About.css";
import saeed1 from "../Images/saeed1.png";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img src={saeed1} alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading " style={{ "--i": "4;" }}>
          About <span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>
          <p>
          A self-motivated BSIT graduate with
          foundational skills in HTML, CSS, Javascript, React, SEO, and front-end
          technologies.
          Strong interest in web development and problem-solving through coding. Eager to learn
          new technologies and grow 
          professionally in the tech industry.
          </p>
          <p>I also design code-based wallpapers and build unique portfolio websites that showcase my technical skills and artistic touch. Through my work, I aim to merge creativity and <br />functionality, inspiring others to see the beauty in programming.</p>
          <a href="/" className="btn">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
