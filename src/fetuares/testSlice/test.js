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
         searchRestaurant: (state, action) => {
            const searchTerm = action.payload;
            const restaurants = JSON.parse(localStorage.getItem("restaurant"));
          
            const filteredRestaurants = restaurants.filter((restaurant) =>
              restaurant.city.toLowerCase().includes(searchTerm.toLowerCase())
            );
          
            state.restaurant = filteredRestaurants;
          },
    }
})

export const {getRestaurant,addRestaurant,setRestaurant,searchRestaurant} = RestaurantSlice.actions;

export default RestaurantSlice.reducer;