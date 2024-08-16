import { IMG_URL } from '../utils/constant'
function RestCatFoodCard({ data }) {
    return (
        <div>
            {data.itemCards.map((item, index) => (
                <div key={index} className='flex justify-between gap-4 p-4 bg-slate-100 m-2'>
                    <div className='flex p-4 gap-4'>
                        <h2>{item.card.info.name}</h2>
                        <h3 className='font-semibold'>₹{(item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100)}</h3>
                    </div>
                    <img src={IMG_URL + item.card.info.imageId} className='w-16 h-16 border-2' />
                </div>))}
        </div>
    )
}
export default RestCatFoodCard;