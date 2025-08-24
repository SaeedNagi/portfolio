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
                        <p>A lightweight and user-friendly application for creating, editing, and managing notes. Developed using HTML, CSS, and JavaScript, the app enables users to write and save notes instantly with a clean and responsive design. It demonstrates my skills in DOM manipulation, event handling, and local storage integration to provide persistent note-keeping functionality.</p>  
                        <a href="https://saeednagi.github.io/Note-App/" target="blank"><i class='bx bx-link-external'></i></a>                
                    </div>
                </div>

                <div className="port-box">
                    <div className="image-box">
                        <img src={hero_wMB5D_Q0} alt="" />
                    </div>
                    <div className="port-content">
                        <h3>To-Do-List App</h3>
                        <p>A simple yet efficient task management application designed to help users organize daily activities. Built using HTML, CSS, and JavaScript, the app allows users to add, delete, and mark tasks as completed with a clean and responsive interface. This project highlights my ability to implement DOM manipulation, event handling, and local storage for saving tasks, ensuring a seamless user experience.</p>  
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
