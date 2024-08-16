import { SWIGGI_URL } from '../utils/constant';
const useFetchRestData = async () => {
        const response = await fetch(SWIGGI_URL);
        const jsonData = await response.json();
        // console.log(jsonData);
        const dataPayload = await jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle?.restaurants;       

    return dataPayload; 
}

export default useFetchRestData;