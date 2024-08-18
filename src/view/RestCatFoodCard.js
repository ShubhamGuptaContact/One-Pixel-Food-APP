import { IMG_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem, clearItem } from '../Redux/cartSlice';

function RestCatFoodCard({ data }) {
    // Function to split description and return list items
    const splitDescription = (description) => {
        if (!description) return null;

        // Split description by '|'
        const parts = description.split('|').map(part => part.trim());

        return (
            <ul className='px-4 text-left text-xs'>
                {parts.map((part, index) => (
                    <li key={index} className='list-none'>{part}</li>
                ))}
            </ul>
        );
    };
    // Dispatch hook for dispatch the items to cartSlice
    const dispatch = useDispatch();
    const handleAddItems = (item) => {
        //dispact and action
        dispatch(addItem(item));
        // dispatch(clearItem())
    }

    const handleRemoveItems = (item) => {
        // dispact and action
        dispatch(clearItem(item));
    }

    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className='flex justify-between gap-4 p-4 bg-slate-100 m-2'>
                    <div>
                        <div className='flex px-4 gap-4'>
                            <h2>{item.card.info.name}</h2>
                            <h3 className='font-semibold'>₹{(item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100)}</h3>
                        </div>
                        <p className='text-left px-4'>{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                        {/* Render the split description */}
                        <p className='px-4 text-left text-xs'>{item.card.info.description}</p>
                        {/* {splitDescription(item.card.info.description)} */}
                        <div className='px-4 mt-2 flex'>
                            <button className='p-2 mx-2 w-20 h-10 rounded-sm hover:bg-black hover:text-[#fff] border-black border-2' 
                            // onClick={handleAddItems}
                            // onClick={handleAddItems(item)}
                            onClick={() => handleAddItems(item)}
                            >Add</button>
                            <button className='p-2 w-20 h-10 rounded-sm hover:bg-black hover:text-[#fff] border-black border-2' 
                            // onClick={handleAddItems}
                            // onClick={handleAddItems(item)}
                            onClick={() => handleRemoveItems(item)}
                            >Remove</button>
                        </div>
                    </div>

                    <img
                        src={IMG_URL + item.card.info.imageId}
                        className='w-20 h-20 border-2 hover:h-36 hover:w-36 border-black object-cover rounded-sm shadow-2xl shadow-slate-500'
                        alt={item.card.info.name}
                    />
                </div>
            ))}
        </div>
    );
}

export default RestCatFoodCard;
/*
import { IMG_URL } from '../utils/constant'
function RestCatFoodCard({ data }) {
    return (
        <div>
            {data.itemCards.map((item, index) => (
                <div key={index} className='flex justify-between gap-4 p-4 bg-slate-100 m-2'>
                    <div>
                    <div className='flex px-4 gap-4'>
                        <h2>{item.card.info.name}</h2>
                        <h3 className='font-semibold'>₹{(item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100)}</h3>
                    </div>
                    <p className='text-left px-4'>{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                    <p className='px-4 text-left'>{item.card.info.description}</p>
                    </div>
                    <img src={IMG_URL + item.card.info.imageId} className='w-20 h-20 border-2 hover:h-36 hover:w-36 border-black object-cover rounded-sm shadow-2xl shadow-slate-500'/>
                </div>))}
        </div>
    )
}
export default RestCatFoodCard;
*/