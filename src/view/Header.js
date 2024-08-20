import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchItem } from '../Redux/foodSlice';

function Header() {
  const [activeTab, setActiveTab] = useState('/');
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  
  const { foodList, cartItems } = useSelector((state) => ({
    foodList: state.food.foodList,
    cartItems: state.cart.items,
  }));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const handleSearch = () => {
    const filteredFoodList = foodList.filter(food => 
      food.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(searchItem(filteredFoodList));
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="top-0 sticky p-3 flex justify-between shadow-2xl bg-[#ffffff] mb-2">
      <div>
        <Link to='/'>
          <h1 className='text-xl font-extrabold'>One Pixel Food APP</h1>
        </Link>
      </div>
      <Link to='/'>
      <input
        type="text"
        value={searchText}
        className='search-bar'
        placeholder="Search Resturants..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      </Link>
      <div>
        <ul className="flex justify-between align-middle">
          <Link 
            className={`text-xl px-4 ${activeTab === '/' ? 'active' : ''}`} 
            to="/" 
            onClick={() => handleTabClick('/')}
          >
            Home
          </Link>
          {/* <Link 
            className={`text-xl px-4 ${activeTab === '/about' ? 'active' : ''}`} 
            to="/about" 
            onClick={() => handleTabClick('/about')}
          >
            About Us
          </Link> */}
          <Link 
            className={`text-xl font-bold px-4 ${activeTab === '/cart' ? 'active' : ''}`} 
            to="/cart" 
            onClick={() => handleTabClick('/cart')}
          >
            Cart 🛒 ({cartItems.length} items)
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