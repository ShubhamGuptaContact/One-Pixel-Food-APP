import { useState } from "react"
import RestCatFoodCard from "./RestCatFoodCard"

function RestCategory({ data }) {
    // console.log(data)
    const [itemClick, setItemClick] = useState(false);
    const clickHandler = () => {
        setItemClick(!itemClick)
    }
    return (
        <div>
            <div className='flex justify-between p-4 bg-[#f0eded79] shadow-xl border-b-2 m-2' onClick={clickHandler}>
                <h1>{data.title} ({data.itemCards.length})</h1>
                <h1>⏬</h1>
            </div>
            <div>
                {itemClick && <RestCatFoodCard data={data} />}
            </div>
        </div>
    )
}

export default RestCategory