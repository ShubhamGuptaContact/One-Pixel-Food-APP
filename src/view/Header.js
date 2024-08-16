import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [activeTab, setActiveTab] = useState('/');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="border-b-2 p-3 header shadow-lg bg-[#ebe5e5]">
      <div>
        <h1 className='text-xl'>FOA</h1>
      </div>

      <div>
        <ul className="flex justify-between align-middle">
          <Link 
            className={`text-xl px-4 ${activeTab === '/' ? 'active' : ''}`} 
            to="/" 
            onClick={() => handleTabClick('/')}
          >
            Home
          </Link>
          <Link 
            className={`text-xl  px-4 ${activeTab === '/about' ? 'active' : ''}`} 
            to="/about" 
            onClick={() => handleTabClick('/about')}
          >
            About Us
          </Link>
          <Link 
            className={`text-xl  px-4 ${activeTab === '/cart' ? 'active' : ''}`} 
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