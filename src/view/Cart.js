import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../Redux/cartSlice";
import RestCatFoodCard from "./RestCatFoodCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item?.card?.info?.price
        ? item.card.info.price
        : item?.card?.info?.defaultPrice ?? 0;
      return total + itemPrice;
    }, 0) / 100; // Convert from paise to rupees
  };

  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };

  return (
    <div className="h-[90vh]">
      <div className="w-[50%] m-auto py-5 border-b-2 border-t-2 my-2 border-blue-400 flex justify-between ">
        <h1 className="text-2xl m-auto font-bold">Cart</h1>
        <button
          className="border-2 p-2 text-sm rounded-xl border-black bg-[#000] text-[#fff] mx-4"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center text-2xl">Your cart is empty.</p>
      ) : (
        <div className="flex justify-end">
          <div className="w-6/12 gap-4 p-4 bg-slate-100 m-2">
            <h1 className="text-center border-b-2 border-black text-2xl">Bill</h1>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between p-2">
                <h1 className="font-semibold">{item?.card?.info?.name}</h1>
                <h1 className="font-semibold">
                  ₹
                  {item?.card?.info?.price
                    ? item.card.info.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </h1>
              </div>
            ))}

            <div className="flex w-[100%] justify-between border-t-2 border-b-2 p-2 border-black">
              <h1 className="font-semibold">Total Price:</h1>
              <h1 className="font-semibold">
                ₹{cartItems.length !== 0 ? calculateTotalPrice() : 0}
              </h1>
            </div>
          </div>
          <div className="w-6/12">
            {/* If cartItems structure matches the one used in RestCatFoodCard, it will render correctly */}
            <RestCatFoodCard data={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
