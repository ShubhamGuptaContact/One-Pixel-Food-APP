import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [activeTab, setActiveTab] = useState('/');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="header">
      <div className="logo-image">
        <h1>FOA</h1>
      </div>

      <div className="nav-items">
        <ul>
          <Link 
            className={`li ${activeTab === '/' ? 'active' : ''}`} 
            to="/" 
            onClick={() => handleTabClick('/')}
          >
            Home
          </Link>
          <Link 
            className={`li ${activeTab === '/about' ? 'active' : ''}`} 
            to="/about" 
            onClick={() => handleTabClick('/about')}
          >
            About Us
          </Link>
          <Link 
            className={`li ${activeTab === '/contact' ? 'active' : ''}`} 
            to="/contact" 
            onClick={() => handleTabClick('/contact')}
          >
            Contact Us
          </Link>
          <Link 
            className={`li ${activeTab === '/cart' ? 'active' : ''}`} 
            to="/cart" 
            onClick={() => handleTabClick('/cart')}
          >
            Cart
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;


// import React from 'react'
// import {Link} from "react-router-dom"
// function Header() {
//     const [activeTab, setActiveTab] = useState('home');

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//       };
    
      
//     return (
//         <div className="header">
//             <div className="logo-image">
//                 <h1>FOA</h1>
//             </div>
            
//             <div className="nav-items">
//                 <ul>
//                     <Link className="li" to={"/"}>Home</Link>
//                     <Link className="li" to={"/about"}>About Us</Link>
//                     <Link className="li" to={"/contact"}>Contact Us</Link>
//                     <Link className="li" to={"/"}>Cart</Link>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Header