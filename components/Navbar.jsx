"use client";

import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '@/context/StateContext';
import Cart from './Cart';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container z-10'>
      <p className='logo'>
        <Link href="/" className='logo'>
          Mo&apos;Adunni Empire
        </Link>
      </p>

      <button type='submit' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShopping /> 
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar