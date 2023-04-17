import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRestaurant, searchRestaurant } from "../fetuares/testSlice/test";

export default function Input() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ query: searchTerm });
      console.log(searchTerm);
      dispatch(searchRestaurant(searchTerm));
      e.target.value = "";
    }
  };

  const handleClick = () => {
    setSearchParams({ query: searchTerm });
    dispatch(searchRestaurant(searchTerm));
    inputRef.current.value = "";
    console.log(searchTerm);
  };

  const Change = () => {
    navigate("/");
    dispatch(getRestaurant());
  };

  return (
    <div className="bg-black w-full flex flex-col justify-center items-center h-[200px]">
      <button
        onClick={() => Change()}
        className="p-2 text-3xl md:text-4xl font-bold pb-5 text-white"
      >
        Find your table for any occasion
      </button>
      <div className="mt-3">
        <input ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="p-2 rounded w-80 md:w-96"
          type="text"
          placeholder="State, city or town"
        />
        <button
          onClick={handleClick}
          className="p-2 ml-4 bg-red-600 text-white rounded"
        >
          Let's go
        </button>
        <button>dsa</button>
      </div>
    </div>
  );
}
