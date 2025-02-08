import React from 'react'
import '../Style/Navbar.css';
function Navbar() {
    const handleScroll = (selector, event) => {
      event.preventDefault(); // Prevents default anchor behavior
      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
      });
    };

    document.addEventListener("DOMContentLoaded", function () {
      const menuIcon = document.getElementById("menu-icon");
      const menuList = document.getElementById("menu-list");
  
      menuIcon.addEventListener("click", function () {
          menuList.classList.toggle("active");
      });
  });
  return (
    <>
    <nav className='navbar'>
        <a href='/' className='logo'>Portfolio.</a>
        <div class="menu-icon" id="menu-icon">&#9776;</div>
        <ul className='manu-items' id="menu-list">
            <li className='active'><a href="#" onClick={(e) => handleScroll('.home', e)}>Home</a></li>
            <li><a href="#"  onClick={(e) => handleScroll('.about', e)}>About</a></li>
            <li><a href="#" onClick={(e) => handleScroll('.services', e)}>Services</a></li>
            <li><a href="#" onClick={(e) => handleScroll('.skills', e)}>Skills</a></li>
            <li><a href="#" onClick={(e) => handleScroll('.portfolio', e)}>Portfolio</a></li>
            <li><a href="#" onClick={(e) => handleScroll('.contact', e)}>Contact</a></li>
        </ul>
    </nav>
    </>
  )
}
export default Navbar
