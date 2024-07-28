import React, { useEffect, useState } from 'react'
import Foodcard from './FoodCard';
import { SWIGGI_URL } from '../utils/constant';
import Shimmer from './Shimmer';

function Container() {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGI_URL);
            console.log(response)
            const jsonData = await response.json();
            setFoodList(jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle?.restaurants);
            // console.log(jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err);
        }
    }

    if(foodList?.length === 0){
        return(
            <Shimmer />
        );
    }

    return (
        <div className="Food-container">
            <div className="food-con">
                {
                    foodList.map(food => (
                        <Foodcard key={food?.info?.id} {...food} />
                    ))
                }
            </div>
        </div>
    )
}

export default Container;