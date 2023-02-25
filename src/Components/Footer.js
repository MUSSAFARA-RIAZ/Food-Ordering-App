import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    
 
    <div className='p-100'>
      <div className='text-center bg-dark text-light  '>
      © 2023 Copyright  <span></span>
      <NavLink to='/' className="text-success" style={{textDecoration:"none"}} >FoodOn</NavLink>
      <p>Designed By <NavLink to="https://github.com/MUSSAFARA-RIAZ">Mussafara Riaz</NavLink> </p>
      </div>

    </div>
  )
}
