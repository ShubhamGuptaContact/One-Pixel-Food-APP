import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="logo-image">
                <h1>FOA</h1>
            </div>
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header