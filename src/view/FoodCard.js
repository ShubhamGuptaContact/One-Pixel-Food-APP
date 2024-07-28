import React from 'react'
import { IMG_URL } from '../utils/constant'
function FoodCard(props) {
    const { info } = props;
    return (
        <div className="food-card">
            <div className="img">
                <img src={IMG_URL + info?.cloudinaryImageId} alt="img" />
            </div>
            <dir className="text-card">
                <h3>{info?.name}</h3>
                <h1>{info?.avgRating}</h1>
            </dir>
        </div>
    )
}

export default FoodCard