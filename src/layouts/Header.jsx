import React from 'react'
import { Outlet } from 'react-router-dom'
import Input from '../components/Input'


export default function Header() {
  return (
    <div>
    <header>
      <Input/>
    </header>
    <Outlet/>
    </div>
  )
}
