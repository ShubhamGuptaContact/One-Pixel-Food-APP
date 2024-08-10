import React, { useEffect, useState } from 'react'
import Foodcard from './FoodCard';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom"
import useFetchRestData from '../api/useFetchRestData';
function Container() {

    const [foodList, setFoodList] = useState([]);
    const [searchFoodList, setSearchFoodList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchSS= async () =>{
        const data = await useFetchRestData();
        setFoodList(data);
        setSearchFoodList(data);       
        }
        fetchSS();
    }, []);
    
    const searchFoodFunction = () => {
        console.log(foodList);
        setSearchFoodList(foodList.filter(food => food.info.name.toLowerCase().includes(searchText.toLowerCase())))
    }
    return foodList?.length == 0 ? <Shimmer /> : (
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
                {/* <input type="button" value="search" className="search-btn"onClick={searchFoodFunction} /> */}
            </div>
            <div className="food-con">
                {searchFoodList?.length > 0 ? (
                    searchFoodList?.map(food => (
                         <Link key={food?.info?.id} to={"/rests/" + food?.info?.id } className='food-link'> <Foodcard {...food} /> </Link>
                    ))
                ) : (
                    foodList?.length !== 0 && <h1>No Result Found</h1>
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