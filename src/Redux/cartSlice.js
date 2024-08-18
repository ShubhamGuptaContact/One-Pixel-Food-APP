import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    // Its take configuration and 1. name of slice. 2.
    name:'cart',
    //2.Initialized a state of cartSlice
    initialState: {
        items:[],
    },
    //3.Reduces of cartSlice
    reducers:{
        // addItem is a reducer function and state can be use to update the initialState
        // action.payload is the item to be added to the cart
        // Here we are adding the item to the items array in the state
        // Mutating the state
        addItem: (state, action) => {
            console.log(action.payload)
            state.items.push(action.payload); 
            // Check if the item already exists in the cart
            // const existingItem = state.items.find(item=> item.id === action.payload.id);
            // if(existingItem){
            //     existingItem.quantity += action.payload.quantity;
            // }else{
            //     state.items.push(action.payload);
            // }
        },
        // removeItem is a reducer function and state can be use to update the initialState
        // action.payload is the item to be removed from the cart
        removeItem: (state,action) => {
            state.items.pop();
            // state.items = state.items.filter(item=> item.id!== action.payload.id);
        },
        // updateQuantity is a reducer function and state can be use to update the initialState
        // action.payload contains
        clearItem:(state,action) => {   
            state.items.length = 0 // reset the items = []. -- FYI state.item = [] wrong approach
        }

    }
});

// Export the action creators.
export const {addItem, removeItem, clearItem} = cartSlice.actions;
//Export the reducer.
export default cartSlice.reducer;