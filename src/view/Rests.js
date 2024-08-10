
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer';

export const Rests = () => {
    const { resId } = useParams();
    const [restsInfo, setRestsInfo] = useState([]);

    useEffect(() => {
            menuFetch();
    },[resId]);

    const menuFetch = async () => {
        try {
            const menu = await fetch(MENU_URL + resId);
            const jsonData = await menu.json();
            console.log(jsonData);
            setRestsInfo(jsonData.data);
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

    if(restsInfo.length == 0) {
        return (
            <Shimmer />
        );
    }
    const { name, avgRating, cuisines, costForTwoMessage } = restsInfo?.cards[2]?.card?.card?.info || {};
    
    return restsInfo.length === 0 ? <Shimmer /> : (
        <div>
        <div className="dishes-cards">
            <h2>{name}</h2>
            <div className="rest-detils-card">
            <h3 className="avg-text">
                {avgRating}
                <li>{costForTwoMessage}</li>
            </h3>
            <h3 className="cuisines-text">{cuisines.join(", ")}</h3>
            </div>
        </div>
        <dir>
            <h1>Menu</h1>
        </dir>
        </div>
    );      
};

// setDishes(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
// console.log(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards[0].card.info);