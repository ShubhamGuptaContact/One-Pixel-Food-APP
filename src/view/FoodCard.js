import React, { useState } from 'react'
import { IMG_URL } from '../utils/constant'
function FoodCard(props) {
    const { info } = props;

    const [Toggle,setToggle] = useState(false); 
    setToggle(true);


    useEffect(
        () => {
            if(Toggle){
                setTimeout(()=>{
                    setToggle(false);
                },3000);
            }
        },[Toggle]
    )

    return (
        <div className="food-card">
            <div className="img">
                <img src={IMG_URL + info?.cloudinaryImageId} alt="img" />
            </div>
            <dir className="text-card">
                <h3 className='text-sm'>{info?.name}</h3>
                {
                    info?.veg ? <div>🍀</div> : <div></div>                    
                }
                <h1>{info?.avgRating}🌟</h1>
            </dir>
        </div>
    )
}

// High Order Components

export const withPromoteData = (FoodCard) =>{
    return (props)=>{
        return(
            <div className='veg-card'>
                <p className='veg-data'>Pure Veg</p>
                <FoodCard {...props}/>
            </div>
        )
    }
}

export default FoodCard