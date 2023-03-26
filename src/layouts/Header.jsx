import React from 'react'
import { Outlet } from 'react-router-dom'
import '../header.css'

export default function Header() {
  return (
    <div>
    <header></header>
    <Outlet/>
    </div>
  )
}
