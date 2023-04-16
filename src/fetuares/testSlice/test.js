export const RestaurantSlice = createSlice({
    name:'restaurant',
    initialState:{
        restaurant:[]
    },
    reducers:{
        getRestaurant: (state, action) => {
            state.restaurant = JSON.parse(action.payload); 
            localStorage.setItem("restaurant", JSON.stringify(state.restaurant));
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