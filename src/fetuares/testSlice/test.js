import { createSlice } from '@reduxjs/toolkit';

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: [],
    singleRestaurant: null,
  },
  reducers: {
    getRestaurant: (state, action) => {
      const restaurants = JSON.parse(localStorage.getItem('restaurant'));
      state.restaurant = restaurants;
    },
    addRestaurant: (state, action) => {
      const restaurant = action.payload;
      state.restaurant.push(restaurant);
      localStorage.setItem('restaurant', JSON.stringify(state.restaurants));
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
      localStorage.setItem('restaurant', JSON.stringify(state.restaurants));
    },
    searchRestaurant: (state, action) => {
      const searchTerm = action.payload;
      const restaurants = JSON.parse(localStorage.getItem('restaurant'));

      const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.city.toLowerCase().includes(searchTerm.toLowerCase())
      );

      state.restaurant = filteredRestaurants;
    },
    singleRestaurant: (state, action) => {
      const id = action.payload;
      const restaurants = JSON.parse(localStorage.getItem('restaurant'));

      const filter = restaurants.find((restaurant) => restaurant.id == id);
      state.singleRestaurant = filter;
    },
  },
});

export const {
  getRestaurant,
  addRestaurant,
  setRestaurant,
  searchRestaurant,
  singleRestaurant,
} = RestaurantSlice.actions;

export default RestaurantSlice.reducer;
