import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const [activeTab, setActiveTab] = useState('/');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Subscribing to the redux store using selector hook  {useSelector}

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems)
  return (
    <div className="border-b-2 top-0 sticky p-3 flex justify-between shadow-lg bg-[#ebe5e5]">
      <div>
        <Link to='/'><h1 className='text-xl font-extrabold shadow-inner shadow-black p-1 bg-[#E6A639] text-white rounded'>One Pixel Food APP</h1>
        </Link>
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
            className={`text-xl font-bold px-4 ${activeTab === '/cart' ? 'active' : ''}`} 
            to="/cart" 
            onClick={() => handleTabClick('/cart')}
          >
            Cart🛒 ({cartItems.length} items)
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