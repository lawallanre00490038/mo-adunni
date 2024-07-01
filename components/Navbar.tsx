"use client";

import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container z-10'>
      <p className='logo'>
        <Link href="/" className='logo'>
          Mo'Adunni Empire
        </Link>
      </p>

      <button type='submit' className='cart-icon' onClick={()=>null}>
        <AiOutlineShopping /> 
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar