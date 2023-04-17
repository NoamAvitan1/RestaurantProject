import { useDispatch } from 'react-redux';
import React, { useEffect  } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import {singleRestaurant } from '../fetuares/testSlice/test';

export default function Restaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = useSelector((state) => state.singleRestaurant);
  const dispatch = useDispatch();
  console.log(id);
  console.log(restaurant);

  useEffect(() => {
    dispatch(singleRestaurant(id));
  }, [id, dispatch]);

  return (
    <div>
      {restaurant && 
      <div>
      <div className="bg-black w-full flex  justify-center items-center h-[200px]">
        <button className='text-3xl md:text-4xl duration-500 text-white' onClick={() =>navigate('/')}>{restaurant.name} Restaurant {restaurant.city}</button>
      </div>
      <div className=" container">
        <div className="flex items-start border-b-2">
          <p className="p-2">Overview</p>
          <p className="p-2">Menu</p>
        </div>
        <div className=" flex justify-start items-center h-[150px] border-b-2 ps-4">
          <h1 className="text-5xl font-extrabold">{restaurant.name}</h1>
        </div>
        <div className=" border-b-2 p-2">
          {restaurant.description}
          <p className=" pt-10 pb-1 font-bold text-2xl">4 photos</p>
        </div>
        <div className="grid grid-cols-4 gap-10 m-5">
          <img src={restaurant.images[0]} alt="image restautrant 1" />
          <img src={restaurant.images[1]} alt="image restautrant 2" />
          <img src={restaurant.images[2]} alt="image restautrant 3" />
          <img src={restaurant.images[3]} alt="image restautrant 4" />
        </div>
      </div>
     </div>}
      </div>
  );
}