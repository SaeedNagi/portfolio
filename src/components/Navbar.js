import React,{useEffect} from 'react'
import '../Style/Navbar.css';
function Navbar() {
    const handleScroll = (selector, event) => {
      event.preventDefault(); // Prevents default anchor behavior
      document.querySelector(selector)?.scrollIntoView({
        behavior: 'smooth',
      });
    };

    useEffect(() => {
  const menuIcon = document.getElementById('menu-icon');
  const menuList = document.getElementById('menu-list');

  const toggleMenu = () => {
    menuList.classList.toggle('active');
  };

  menuIcon.addEventListener('click', toggleMenu);

  // Clean up
  return () => {
    menuIcon.removeEventListener('click', toggleMenu);
  };
}, []);
      
  return (
    <>
    <nav className='navbar'>
        <a href='/' className='logo'>Portfolio.</a>
        <div className="menu-icon" id="menu-icon">☰</div>
        <ul className='manu-items' id="menu-list">
            <li className='active'><a href="/" onClick={(e) => handleScroll('.home', e)}>Home</a></li>
            <li><a href="/"  onClick={(e) => handleScroll('.about', e)}>About</a></li>
            <li><a href="/" onClick={(e) => handleScroll('.services', e)}>Services</a></li>
            <li><a href="/" onClick={(e) => handleScroll('.skills', e)}>Skills</a></li>
            <li><a href="/" onClick={(e) => handleScroll('.portfolio', e)}>Portfolio</a></li>
            <li><a href="/" onClick={(e) => handleScroll('.contact', e)}>Contact</a></li>
        </ul>
    </nav>
    </>
  )
}
export default Navbar

// @media (max-width: 768px){
//     .icon{
//         display: inline-flex;
//     }
//     #check:checked~.icon #menu-icon{
//         display: none;
//     }
//     .icon #close-icon{
//         display: none;
//     }
//     #check:checked~.icon #close-icon{
//         display: block;
//     }
//     .header{
//         position: absolute;
//         top: 100%;
//         left: 0;
//         height: 0;
//         width: 100%;
//         background-color: rgba(0, 0, 0, 0.1);
//         backdrop-filter: blur(50px);
//         box-shadow: 0.5rem 1rem rgba(0, 0, 0, .1);
//         transition: .3s ease;
//     }
//     #check:checked~.header{
//         height: 17rem;
//     }
//     .header ul{ 
//         display: block;
//         margin: 1.5rem;
//         font-size: 1.5rem;
        
//     }
//     .header ul li{
//         text-align: center;
//     }

// }