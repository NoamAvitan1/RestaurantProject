import { useEffect, useRef, useState } from 'react';
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRestaurant, updateData } from '../fetuares/testSlice/test';
export default function Update() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [toogle,setToogle] = useState(false)
  const restaurant = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    dispatch(getRestaurant());
  },[])
  
  const regexAlphabetm = /^[a-zA-Z\s]+$/;
  const regexNumbers = /^[0-9]+$/;
  const regexImage = /\b(https?:\/\/\S+\.(png|jpg|jpeg|gif)\b)/i;
  const regexDescription = /^[\w\s.,!?-]{1,255}$/;
  const onSub = (_bodyData) => {
    console.log(_bodyData);
    dispatch(updateData({_bodyData,id}));
    navigate('/manageRestaurant'); 
  };
  return (
    <div>
        {restaurant[id] && 
      <div className=" flex items-center h-screen bg-slate-300">
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(onSub)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input defaultValue={ !toogle? restaurant[id].name :""}
                {...register("name", {
                  required: { value: true, message: "Name is required..." },
                  minLength: { value: 2, message: "min 2 chars..." },
                  maxLength: { value: 20, message: "max 20 chars..." },
                  pattern: {
                    value: regexAlphabetm,
                    message: "Only alphabet allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input defaultValue={!toogle? restaurant[id].city : ""}
                {...register("city", {
                  required: { value: true, message: "City is required..." },
                  minLength: { value: 2, message: "min 2 chars..." },
                  maxLength: { value: 20, message: "max 20 chars..." },
                  pattern: {
                    value: regexAlphabetm,
                    message: "Only alphabet allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="Enter city"
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input defaultValue={!toogle? restaurant[id].price : ""}
                {...register("price", {
                  required: { value: true, message: "Price is required..." },
                  minLength: { value: 2, message: "min 2 chars..." },
                  maxLength: { value: 20, message: "max 20 chars..." },
                  pattern: {
                    value: /^[$]?\d+(,\d{3})*(\.\d{1,2})?$/i,
                    message: "Only numbers allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                placeholder="Enter price"
              />
              {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="main_image"
              >
                Main Image
              </label>
              <input defaultValue={!toogle? restaurant[id].main_image : ""}
                {...register("main_image", {
                  required: {
                    value: true,
                    message: "Main_image is required...",
                  },
                  minLength: { value: 20, message: "min 20 chars..." },
                  maxLength: { value: 500, message: "max 500 chars..." },
                  pattern: {
                    value: regexImage,
                    message: "Only link allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="main_image"
                type="text"
                placeholder="Enter main image URL"
              />
              {errors.main_image && <span>{errors.main_image.message}</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="cuisine"
              >
                Cuisine
              </label>
              <input defaultValue={!toogle? restaurant[id].cuisine : ""}
                {...register("cuisine", {
                  required: { value: true, message: "Cuisine is required..." },
                  minLength: { value: 2, message: "min 2 chars..." },
                  maxLength: { value: 20, message: "max 20 chars..." },
                  pattern: {
                    value: regexAlphabetm,
                    message: "Only alphabet allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cuisine"
                type="text"
                placeholder="Enter cuisine"
              />
              {errors.cuisine && <span>{errors.cuisine.message}</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="images"
              >
                Images
              </label>
              <input defaultValue={!toogle? restaurant[id].images : ""}
                {...register("images", {
                  required: { value: true, message: "Images is required..." },
                  minLength: { value: 20, message: "min 20 chars..." },
                  maxLength: { value: 700, message: "max 700 chars..." },
                  pattern: {
                    value: regexImage,
                    message: "Only link allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="images"
                type="text"
                placeholder="Enter 4 images (separated by commas)"
              />
              {errors.images && <span>{errors.images.message}</span>}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea defaultValue={!toogle? restaurant[id].description :""}
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required...",
                  },
                  minLength: { value: 30, message: "min 30 chars..." },
                  maxLength: { value: 500, message: "max 500 chars..." },
                  pattern: {
                    value: regexDescription,
                    message: "Only description characters allowed...",
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter description"
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font btn">
                add
              </button>
              <button
                onClick={() => {reset(),setToogle(false)}}
                className="bg-blue-500 hover:bg-blue-700 text-white font btn"
              >
                reset
              </button>
              <button
                  onClick={() => {
                    reset(), setToogle(true);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white btn"
                >
                  clean
                </button>

              
            </div>
          </form>
        </div>
      </div>
}
    </div>
  );
}
