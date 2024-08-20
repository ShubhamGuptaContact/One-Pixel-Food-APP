import React, { useEffect, useState } from 'react'
import Foodcard, { withPromoteData } from './FoodCard';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchItem, addItems } from '../Redux/foodSlice';
import useFetchRestData from '../api/useFetchRestData';

function Container() {
    const [loading, setLoading] = useState(true);
    const searchFoodList = useSelector(state => state.food.searchList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await useFetchRestData();
                dispatch(searchItem(data));
                dispatch(addItems(data));
                setLoading(false);
            } catch (err) {
                console.error(err);
                alert("Failed to fetch data, please try again later");
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);
    
    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="Food-container">
            <div className="food-con">
                {searchFoodList?.length > 0 ? (
                    searchFoodList.map(food => (
                        <Link 
                            key={food?.info?.id} 
                            to={"/rests/" + food?.info?.id} 
                            className='food-link'
                        >
                            <Foodcard {...food} />
                        </Link>
                    ))
                ) : (
                    <h1>No Result Found</h1>
                )}
            </div>
        </div>
    );
}

export default Container;
