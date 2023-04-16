import React from 'react'

export default function Input() {
  const handleChange  = () =>{
    
  }
  return (
    <div className=' bg-blue-600 w-full flex flex-col justify-center items-center h-[200px] '>
        <h1 className='p-2 text-3xl md:text-4xl font-bold pb-5 text-white'>Find your table for any occasion</h1>
        <div className='mt-3'>
        <input onKeyDown={handleChange}  className='p-2 rounded w-80 md:w-96' type="text" placeholder='State, city or town ' />
        <button className='p-2 ml-4 bg-red-600 text-white rounded '>Lets go</button>
        </div>
    </div>
  )
}
