'use client'
import React from 'react'
import { BsPersonFillExclamation } from "react-icons/bs";
import { CiSearch,  CiHeart } from "react-icons/ci"
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose } from "react-icons/ai"
import { IoMenu } from "react-icons/io5"
import { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen); // Toggle cart sidebar
  };
  return (
    <nav className='bg-white shadow-md '>
      <div className='container max-auto flex justify-between items-center py-10 px-4 md:px-16 '>
        <h2 className='font-bold text-black text-xl hover:text-gray-600 pt-1 md:ml-20 md:text-3xl relative'style={{
          backgroundImage:'url(/logonavbar.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center left',
          paddingLeft: '57px',
          width: 'auto',
          
        }}>
          Furniro</h2>

          <ul className="hidden md:flex space-x-20  ml-10 text-gray-950 hover:text-gray-600 menulink">
      <li>  <Link href='/ '>Home</Link> </li>
     <li> <Link href='/shop'>Shop</Link></li>
     <li> <Link href='/blog'>Blog</Link></li>
        <li><Link href='/contact'>Contact</Link></li>

        </ul>
        

       <div className= 'flex  space-x-4 md:space-x-6 items-center'>

        <BsPersonFillExclamation className=' hover:text-gray-600 md:text-2xl'/>
       
       <CiSearch className='text-black  hover:text-gray-950  md:text-2xl '/>
       <CiHeart  className='text-black hover:text-gray-950 md:text-2xl'/>
       <div onClick={toggleCart} className="cursor-pointer">
       <AiOutlineShoppingCart className='text-black hover:text-gray-950 md:text-2xl'/>
         </div> 
        <div className='md:hidden text-black' onClick={toggleMenu}>
         { menuOpen ? <AiOutlineClose size={15} /> :
         <AiOutlineMenu size={15}/>}                               
        </div>
        </div>
         {menuOpen &&(
                  <div className='md:hidden bg-white shadow-md py-4 px-6 text-gray-900 hover:text-gray-600 '>
                   <ul className='space-y-5'>
              <li>
              <Link href='/'>Home</Link> 
            </li>
            <li>
            <Link href='/shop'>Shop</Link> 
            </li>
              <li>
              <Link href='/blog'>Blog</Link>
            </li>
          <li>
          <Link href='/contact'>Contact</Link>   
            </li>
                   </ul>
                   </div>
         )}
 <div
          className={`fixed top-0 right-0 h-[600px] w-4/5 sm:w-3/5 md:w-2/5 lg:w-[417px] bg-white shadow-lg transform transition-transform duration-300 ${
    cartOpen ? 'translate-x-0' : 'translate-x-full'
           }`}
          style={{ zIndex: 50 }}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-bold">Shopping Cart</h3>
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleCart}
            />
          </div>

          {/* Cart Items */}
          <div className="p-10 space-y-4 w-full">
            <div className="flex items-center space-x-4">
              <img
                src="/images/addcart1.png"
                alt="addcart1"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-700">Asgaard Sofa</h4>
                <p className="text-sm text-[#B88E2F]">1 x Rs. 250,000.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/images/addcart7.png"
                alt="addcart7"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-700">Casaliving Wood</h4>
                <p className="text-sm text-[#B88E2F]">1 x Rs. 270,000.00</p>
              </div>
            </div>
          </div>

          {/* Subtotal */}
          <div className='mt-40'>
            <p className="flex justify-between font-semibold">
              <span className='text-gray-800 ml-7'>Subtotal</span>
              <span className='text-[#B88E2F] mr-10'>Rs. 520,000.00</span>
            </p>
            <div className="mt-4 flex space-x-2  p-4 border-t ">
              
              <button className="w-1/2 bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300">
        Cart
      </button>
      <button className="w-1/2 bg-gray-200 py-2 rounded-lg hover:bg-gray-300">
        Checkout
      </button>
      <ul className="px-7 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 rounded-lg border border-white ">
      <Link href={'./productcomparison'}>Comparison</Link>
             </ul> 
            </div>
          </div>
        </div>
      </div>
    </nav>
        
































  );
};

export default Navbar;