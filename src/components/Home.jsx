import React, { useEffect, useState } from "react";
import { restaurants } from "../db";
import { NavLink, useParams } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setRestaurant,
  getRestaurant,
  singleRestaurant,
} from "../fetuares/testSlice/test";
import Input from "./Input";

export default function Home() {
  const { id } = useParams();
  const restaurant = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getRestaurant(restaurant));
  }, []);
  console.log(restaurant);

  return (
    <div>
      <div className="absolute">
  <button
    className="flex items-center justify-center w-8 h-8 focus:outline-none"
    onClick={() => setOpen(!open)}
  >
    <FaAlignJustify className="text-white z-50" />
  </button>
  {open && (
    <div className="absolute z-50 top-10 w-48 py-2 bg-white rounded shadow-md">
      <NavLink to="addRestaurant" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Add Restaurant
      </NavLink>
      <NavLink to="manageRestaurant" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Manage Restaurant
      </NavLink>
      <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Set Restaurant</button>
    </div>
  )}
</div>
<Input/>
    <div className="grid grid-cols-4 gap-3 justify-items-center mx-auto my-0 container mt-10">
      {restaurant?.length > 0 &&
        restaurant.map((restaurants, i) => (
          <div className="border p-2 hover:shadow-2xl hover:scale-[102%] duration-300" key={i}>
            <img className="w-[280px]" src={restaurants.main_image} alt="" />
            <h1 className=" font-bold">{restaurants.name}</h1>
            <div className="flex ">
              <p className="">{restaurants.cuisine}</p>
              <p className="ml-3">{restaurants.price}</p>
            </div>
            <NavLink
              to={`/restaurant/${restaurants.id}`}
              onClick={() => {dispatch(singleRestaurant(restaurants.id)),console.log(restaurants.id)}}
              className={"text-blue-600 text-2xl"}
            >
              Click for more details
            </NavLink>
          </div>
        ))}
    </div>
    </div>
  );
}
