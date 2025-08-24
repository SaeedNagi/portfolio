import React from "react";
import "../Style/Portfolio.css";
import hero_wMB5D_Q0 from "../Images/hero_wMB5D_Q0.png";
import hero1_CiouO6zv from '../Images/hero1_CiouO6zv.webp';
import ecommerce from '../Images/ecommerce.jpeg'
function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <h1>What I Will Do For You</h1>
          <h2 className="heading">
            Latest <span style={{ "--i": "4;" }}>Projects</span>
          </h2>

          <div className="cont">
            <div className="filter-butten">
                <button className="btn-butten">All</button>
                <button className="btn-butten">Product</button>
                <button className="btn-butten">Interacting</button>
                <button className="btn-butten">Web App</button>
            </div>

            <div className="portfolio-gallery">
                <div className="port-box">
                    <div className="image-box">
                        <img src={ecommerce} alt="" />
                    </div>
                    <div className="port-content">
                        <h3>E-commerce-Frontend Design</h3>
                        <p>My eCommerce site provides a user-friendly shopping experience with modern design, fast performance, and secure payment integration, catering to businesses looking to expand online.</p>   
                        <a href="https://e-commerce-site-6b248.web.app/" target="blank"><i class='bx bx-link-external'></i></a>                
                    </div>
                </div>

                <div className="port-box">
                    <div className="image-box">
                        <img src={hero1_CiouO6zv} alt="" />
                    </div>
                    <div className="port-content">
                        <h3>Note App project</h3>                    
                        <p>A simple and responsive app built with HTML, CSS, and JavaScript that lets users create, edit, and save notes using local storage for persistence.</p>  
                        <a href="https://saeednagi.github.io/Note-App/" target="blank"><i class='bx bx-link-external'></i></a>                
                    </div>
                </div>

                <div className="port-box">
                    <div className="image-box">
                        <img src={hero_wMB5D_Q0} alt="" />
                    </div>
                    <div className="port-content">
                        <h3>To-Do-List App</h3>
                        <p>A clean and responsive app built with HTML, CSS, and JavaScript that allows users to add, delete, and manage tasks with local storage support.</p>  
                        <a href="https://saeednagi.github.io/To-Do-List-App/" target="blank"><i class='bx bx-link-external'></i></a>                
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
