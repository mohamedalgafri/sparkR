import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const LayoutSignIn = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default LayoutSignIn
