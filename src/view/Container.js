import React from 'react'
import Foodcard from './FoodCard';

function Container() {
    return (
        <div className="Food-container">
            <div className="gloabal-search">Search</div>
            <div className="food-con">
                <Foodcard name="DP Foods" rating="3.4" />
                <Foodcard name="SP" rating="3.4" />
                <Foodcard name="DK" rating="3.4" />
            </div>
        </div>
    )
}

export default Container;