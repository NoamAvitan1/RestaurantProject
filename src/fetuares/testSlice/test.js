import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
    name:'restaurant',  
    initialState:{
        restaurant:[]
    },
    reducers:{
        getRestaurant: (state, action) => {
            const restaurants = JSON.parse(localStorage.getItem("restaurant")); 
            state.restaurant = restaurants;
        },
         addRestaurant:(state,action)=>{
            const restaurant = action.payload;
            state.restaurant.push(restaurant);
            localStorage.setItem('restaurant',JSON.stringify(state.restaurant));
         },
         setRestaurant:(state,action)=>{
            state.restaurant = action.payload;
            localStorage.setItem('restaurant',JSON.stringify(state.restaurant));
         },
    }
})

export const {getRestaurant,addRestaurant,setRestaurant} = RestaurantSlice.actions;

export default RestaurantSlice.reducer;