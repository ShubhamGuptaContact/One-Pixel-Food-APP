import { useState } from "react"
import RestCatFoodCard from "./RestCatFoodCard"
//Controlled Component : Rest(parent component) can cantrolled this component. 
function RestCategory({ data,itemClick,setItemClick }) {
    // console.log(data)
    // const [itemClick, setItemClick] = useState(false);
    const clickHandler = (e) => {
        console.log(e);
        setItemClick()
    }
    return (
        <div>
            <div className='flex justify-between p-4 bg-[#f0eded79] shadow-xl border-b-2 m-2 cursor-pointer' onClick={clickHandler}>
                <h1>{data.title} ({data.itemCards.length})</h1>
                <h1>{itemClick ? '⬇️' :'⬆️'}</h1>
            </div>
            <div>
                {itemClick && <RestCatFoodCard data={data?.itemCards} />}
            </div>
        </div>
    )
}

export default RestCategory