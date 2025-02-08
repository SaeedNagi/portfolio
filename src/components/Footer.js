import React from 'react'
import '../Style/Footer.css'
import chevron_up_regular from '../Images/chevron_up_regular.png'
function Footer() {

  const handleScroll = (selector, event) => {
    event.preventDefault(); // Prevents default anchor behavior
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="footer">
          <div className="footer-text">
            <p>Copyright &copy; 2024 by @heresthecode | All rights Reserved.</p>
          </div>

          <div className="footer-icontop">
            <a href="/" onClick={(e) => handleScroll('.home', e)}><img src={chevron_up_regular} alt="" /></a>
          </div>
      </div>
    </>
  )
}

export default Footer
