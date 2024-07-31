import React, { useEffect, useState } from 'react'
import Foodcard from './FoodCard';
import { SWIGGI_URL } from '../utils/constant';
import Shimmer from './Shimmer';

function Container() {

    const [foodList, setFoodList] = useState([]);
    const [searchFoodList, setSearchFoodList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGI_URL);
            console.log(response)
            const jsonData = await response.json();
            setFoodList(jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle?.restaurants);
            setSearchFoodList(jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle?.restaurants);
            // console.log(jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err);
        }
    }

    // if(foodList?.length === 0){
    //     return(
    //         <Shimmer />
    //     );
    // }

    const searchFoodFunction = () => {
        setSearchFoodList(foodList.filter(food => food.info.name.toLowerCase().includes(searchText.toLowerCase())))
    }
    return foodList.length === 0 ? <Shimmer /> : (
        <div className="Food-container">
            <div className='food-bar'>
                <input type="text" name={searchText} className='search-bar' onChange={(res) => {
                    setSearchText(res.target.value);
                }} onKeyDownCapture={(res) => {
                    console.log(res.code)
                    if (res.code === "Enter") {
                        searchFoodFunction()
                    }
                }}
                //  onKeyPress={searchFoodFunction}
                />
                <input type="button" value="search" className="search-btn"onClick={searchFoodFunction} />
            </div>
            <div className="food-con">
                {searchFoodList.length > 0 ? (
                    searchFoodList.map(food => (
                        <Foodcard key={food?.info?.id} {...food} />
                    ))
                ) : (
                    foodList.length !== 0 && <h1>No Result Found</h1>
                )}

                {/* {
                    searchFoodList.map(food => (
                        <Foodcard key={food?.info?.id} {...food} />
                    ))

                    if (searchFoodList.length === 0 && foodList.length != 0){
                        <h1>No Result Found</h1>
                    }
                } */}
            </div>
        </div>
    )
}

export default Container;