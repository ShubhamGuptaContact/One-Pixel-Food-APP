
import { useEffect, useState } from "react";
import { IMG_URL, MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import RestCategory from "./RestCategory"
import Shimmer2 from './Shimmer2';

export const Rests = () => {
    
    const { resId } = useParams();
    const [restsInfo, setRestsInfo] = useState([]);
    const [itemClick, setItemClick] = useState(null);

    useEffect(() => {
        menuFetch();
    }, [resId]);

    const menuFetch = async () => {
        try {
            const menu = await fetch(MENU_URL + resId);
            const jsonData = await menu.json();
            // console.log(jsonData);
            setRestsInfo(jsonData.data);
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

    if (restsInfo.length == 0) {
        return (
            <Shimmer2 />
        );
    }
    const { name, avgRating, cuisines, cloudinaryImageId } = restsInfo?.cards[2]?.card?.card?.info || {};
    const ListOfCategories = restsInfo.cards[4].groupedCard?.cardGroupMap.REGULAR.cards.filter((c) => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(restsInfo)
    return restsInfo.length === 0 ? <Shimmer2 /> : (
        <div style={{ backgroundImage: `url(${IMG_URL + cloudinaryImageId})` }} >
            <div className="text-center w-7/12 m-auto bg-white p-4">
                <h2 className="text-3xl font-bold py-5 border-b-2 border-t-2 my-2 border-blue-400">{name}</h2>
                <div className="flex justify-between my-2 border-b-slate-300">
                    <h3 className="font-semibold text-yellow-500">{avgRating}🌟</h3>
                    <h3 className="font-bold underline text-[#ff1c1c]">{cuisines.join(", ")}</h3>
                </div>
                <div className="py-3 border-b-4 border-b-slate-900 flex justify-center">
                    <h1 className="font-extrabold p-2"> || Menu ||</h1>

                </div>
                <div>
                    {ListOfCategories.map((category, index) => (
                        <RestCategory key={category.card.card.title} data={category.card.card} itemClick={index === itemClick} setItemClick={()=>setItemClick(index === itemClick ? null : index)}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

// setDishes(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
// console.log(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards[0].card.info);