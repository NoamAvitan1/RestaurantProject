import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../fetuares/testSlice/test";
import { useNavigate } from "react-router-dom";

export default function AddRestaurant() {
    const navigate = useNavigate();
    const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSub = (bodyData) => {
    console.log(bodyData);
    dispatch(addRestaurant(bodyData));
    navigate('/');
  };
  return (
    <div className=" flex items-center h-screen">
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
            <input
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be at most 20 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Name must be letters only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter name"
            />
            {errors.name && <span className="">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              {...register("city", {
                required: { value: true, message: "city  is required" },
                minLength: {
                  value: 3,
                  message: "city must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "city must be at most 20 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "city  must be letters only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              placeholder="Enter city"
            />
            {errors.city && <span className="">{errors.city.message}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              {...register("price", {
                required: { value: true, message: "Price    is required" },
                minLength: {
                  value: 1,
                  message: "Price must be at least 3 characters long",
                },
                maxLength: {
                  value: 6,
                  message: "Price must be at most 20 characters long",
                },
                pattern: {
                  value: /^[$]?\d+(,\d{3})*(\.\d{1,2})?$/i,
                  message: "Price must be numbers only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="Enter price"
            />
            {errors.price && <span className="">{errors.price.message}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="main_image"
            >
              Main Image
            </label>
            <input
              {...register("main_image", {
                required: { value: true, message: "Image    is required" },
                minLength: {
                  value: 20,
                  message: "Image must be at least 3 characters long",
                },
                maxLength: {
                  value: 130,
                  message: "Image must be at most 20 characters long",
                },
                pattern: {
                  value: /\b(https?:\/\/\S+\.(png|jpg|jpeg|gif)\b)/i,
                  message: "Image must be letters only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="main_image"
              type="text"
              placeholder="Enter main image URL"
            />
            {errors.main_image && <span className="">{errors.main_image.message}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cuisine"
            >
              Cuisine
            </label>
            <input
              {...register("Cuisine", {
                required: { value: true, message: "Cuisine is required" },
                minLength: {
                  value: 5,
                  message: "Cuisine must be at least 3 characters long",
                },
                maxLength: {
                  value: 15,
                  message: "Cuisine must be at most 20 characters long",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Cuisine must be letters only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cuisine"
              type="text"
              placeholder="Enter cuisine"
            />
            {errors.Cuisine && (
              <span className="">{errors.Cuisine.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="images"
            >
              Images
            </label>
            <input
              {...register("images", {
                required: { value: true, message: "Images is required" },
                minLength: {
                  value: 20,
                  message: "Images must be at least 3 characters long",
                },
                maxLength: {
                  value: 600,
                  message: "Images must be at most 20 characters long",
                },
                pattern: {
                  value:/\b(https?:\/\/\S+\.(png|jpg|jpeg|gif)\b)/i ,
                  message: "Images must be letters only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="images"
              type="text"
              placeholder="Enter images (separated by commas)"
            />
            {errors.images && <span className="">{errors.images.message}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
             {...register("Description", {
                required: { value: true, message: "Description is required" },
                minLength: {
                  value: 3,
                  message: "Description must be at least 3 characters long",
                },
                maxLength: {
                  value: 300,
                  message: "Description must be at most 300 characters long",
                },
                pattern: {
                  value: /^[\w\s.,!?-]{1,255}$/,
                  message: "Description must be letters only",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter description"
            />
            {errors.Description && <span className="">{errors.Description.message}</span>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font"></button>
          </div>
          <div className='mt-2'>
                <button className="mr-2 btn btn-info btn-xs text-white">Add</button>
                <button onClick={()=>{
                    reset()
                    resetField()
                    }} type='button' className="mr-2 btn btn-error btn-xs text-white">Reset</button>
            </div>
        </form>
      </div>
    </div>
  );
}
