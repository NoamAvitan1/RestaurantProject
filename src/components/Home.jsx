import React, {  useEffect, useState } from "react";
import { restaurants } from "../db";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurant , getRestaurant } from "../fetuares/testSlice/test";

export default function Home() {

  const restaurant = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getRestaurant(restaurants));
  },[dispatch])

  return (
   <div className="grid grid-cols-4 gap-3 justify-items-center mx-auto my-0 container mt-10">
    {restaurant && restaurant.map((restaurants,i) =>(
      <div className="border p-2" key={i}>
        <img className="w-[280px]" src={restaurants.images[1]}  alt="" />
      <h1 className=" font-bold">{restaurants.name}</h1>
      <div className="flex ">
      <p className="">{restaurants.cuisine}</p>
      <p className="ml-3">{restaurants.price}</p>
      </div>
      <NavLink className={"text-blue-600 text-2xl"}>Click for more details</NavLink>
      </div>
    ) )}
   </div>
  );
}
