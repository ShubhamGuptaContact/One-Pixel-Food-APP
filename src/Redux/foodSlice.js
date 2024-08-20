import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foodList: [],
        searchList: []
    },
    reducers: {
        addItems: (state, action) => {
            // Replace the existing foodList with the new data
            state.foodList = action.payload;
        },
        searchItem: (state, action) => {
            // Replace the existing searchList with the search results
            state.searchList = action.payload;
        }
    }
});

export const { addItems, searchItem } = foodSlice.actions;
export default foodSlice.reducer;
