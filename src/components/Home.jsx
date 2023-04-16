import React, {  useState } from "react";
import { restaurants } from "../db";

export default function Home() {

  return (
   <div className="">
    {restaurants && restaurants.map((restaurant) =>(
      <div>
      <h1>{restaurant.name}</h1>
      </div>
    ) )}
   </div>
  );
}
