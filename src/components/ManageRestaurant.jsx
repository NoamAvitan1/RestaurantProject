import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UpdateId, deleteRestaurant, getRestaurant } from "../fetuares/testSlice/test";
import { FaTrashAlt , FaPencilAlt} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function ManageRestaurant() {
    const navigate = useNavigate();
  const restaurant = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
    dispatch(UpdateId());
  }, []);
  return (
    <div>
      <div className="bg-black w-full flex  justify-center items-center h-[200px]">
        <button
          className="text-3xl md:text-4xl duration-500 text-white"
          onClick={() => navigate("/")}
        >
          Manage Restaurant
        </button>
      </div>
      <div className="flex items-start border-b-2">
        <p className="p-2">Overview</p>
        <p className="p-2">Menu</p>
      </div>
      <div className="container mx-auto">
        {restaurant?.length > 0 &&
          restaurant.map((restaurans, i) => (
            <div
              className="p-2 border-2 border-black flex justify-between items-center"
              key={i}
            >
              <h1 className="">{restaurans.name}</h1>
              <div className="flex gap-2 items-center">
                <button>
                <FaTrashAlt onClick={() =>{ dispatch(deleteRestaurant(restaurans.id)),UpdateId()}}/>
                </button>
                <NavLink to={`update/${restaurans.id}`}>
                <FaPencilAlt/>
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
