import React, {  useState } from "react";
import { restaurants } from "../db";
import { NavLink } from "react-router-dom";

export default function Home() {

  

  return (
   <div className="grid grid-cols-4 gap-3 justify-items-center mx-auto my-0 container mt-10">
    {restaurants && restaurants.map((restaurant,i) =>(
      <div className="border p-2" key={i}>
        <img className="w-[280px]" src={restaurant.images[1]}  alt="" />
      <h1 className=" font-bold">{restaurant.name}</h1>
      <div className="flex ">
      <p className="">{restaurant.cuisine}</p>
      <p className="ml-3">{restaurant.price}</p>
      </div>
      <NavLink className={"text-blue-600 text-2xl"}>Click for more details</NavLink>
      </div>
    ) )}
   </div>
  );
}
