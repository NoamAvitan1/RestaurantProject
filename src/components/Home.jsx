import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayBtnFill } from "react-icons/bs";
import Sliding from "./Sliding";


export default function Home() {
  const [movie, setMovie] = useState([]);
  const fetchMovie = async () => {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?s=bank&y=2020&apikey=b1ac65d2"
    );
    setMovie(data.Search);
  };
  
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <Sliding/>
      <div className="flex justify-center mt-5">
        <select className="border border-black p-2">
          <option value="">Select a year</option>
          {Array.from({ length: 21 }, (_, i) => (
            <option key={i} value={2000 + i}>
              {2000 + i}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-items-center mx-auto my-0  container mt-5">
        {movie.map((movie, i) => (
          <div key={i} className="bg-gray-500 relative">
            <button className=" absolute bg-black h-full w-full opacity-0 hover:flex hover:opacity-90 duration-500 flex justify-center items-center">
              <BsPlayBtnFill className=" text-3xl" />
            </button>
            <img src={movie.Poster} alt="" className="w-full aspect-[9/14]" />
          </div>
        ))}
      </div>
    </div>
  );
}
