import React from 'react'
import { Outlet } from 'react-router-dom'
import '../header.css'

export default function Header() {
  return (
    <div>
    <header className='w-full shadow-sm header-logo text-5xl mt-5 text-red-400'>MADRIDISTA</header>
    <Outlet/>
    </div>
  )
}
