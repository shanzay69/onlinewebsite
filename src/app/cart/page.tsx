import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import { VscTrash } from "react-icons/vsc";
import { FaShippingFast, FaHeadset } from 'react-icons/fa';
import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";
import Link from 'next/link';

export default function page() {
  return (
    <><><div className='relative bg-cover bg-center h-[200px] sm:h-[100px] md:h-[200px] lg:h-[300px]  flex items-center justify-center'
      style={{
        backgroundImage: "url('/images/heroshop.png')",
      }}>
      <img
        src="/logo.png"
        alt="logo"
        className="absolute  mr-4 top-[87px] w-9 h-7" />

      <div className='relative text-center mr-6'>
        <h1 className='text-[#000000] text-3xl sm:text-2xl md:text-4xl font-bold '> Cart</h1>
        <nav className='text-sm sm:text-base flex justify-center items-center'>
          <span className='font-semibold text-[#000000]'>Home</span>
          <IoIosArrowForward className='pt-1 ml-1' />
          <span className="text-gray-600 text-sm pt-1">Card</span>
        </nav>
      </div>
    </div><div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="col-span-2">
          <div className="bg-white rounded-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 font-semibold bg-[#F9F1E7] p-6 ">
              <div className='col-span-2'>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
            {/* Cart Item */}
            <div className="grid grid-cols-5 items-center p-7">
              <div className="col-span-2 flex items-center gap-4">
                <Image
                  src="/images/addcart1.png"
                  alt="addcart1"
                  width={90}
                  height={90}
                  className="rounded-md bg-[#F9F1E7]" />
                <span className="text-gray-500">Asgaard sofa</span>
              </div>
              <div className="text-gray-500">Rs. 250,000.00</div>
              <div>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-10 h-10 border-2 border-gray-300 hover:text-white rounded-lg font-medium text-center" />

              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Rs. 250,000.00</span>
                <button className="text-[#B88E2F] hover:text-yellow-800 text-2xl">
                  <VscTrash />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#F9F1E7] rounded-md p-16 pt-16">
          <h2 className="text-center text-3xl text-black font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-900 font-semibold">Subtotal</span>
            <span className="text-gray-400">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-gray-900 font-semibold">Total</span>
            <span className="text-yellow-600 font-bold">Rs. 250,000.00</span>
          </div>
          <div className='text-center'>
            <ul className="px-10 py-3 rounded-md border border-gray-400 text-gray-800 hover:bg-gray-800 hover:text-white transition">
       <Link href={'/checkout'}> Check Out </Link>
              </ul>
          </div>
        </div>
      </div></><div className="bg-[#f9f5f0] py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 text-center ml-20">
          {/* High Quality */}
          <div className="flex items-center">
            <GrTrophy className="text-6xl " />
            <div>
              <h3 className="text-lg font-bold text-[#242424] mr-9">High Quality</h3>
              <p className="text-gray-500 text-sm">crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsPatchCheck className="text-6xl text-black" />
            <div>
              <h3 className="text-lg font-bold text-[#242424]">Warranty Protection</h3>
              <p className="text-gray-500 text-sm mr-16">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaShippingFast className="text-6xl text-black " />
            <div>
              <h3 className="text-lg font-bold text-[#242424]">Free Shipping</h3>
              <p className="text-gray-500 text-sm">Order over 150$</p>
            </div>
          </div>

          <div className="flex items-center">

            <FaHeadset className="text-6xl text-black " />
            <div>
              <h3 className="text-lg font-bold text-[#242424]">24 / 7 Support</h3>
              <p className="text-gray-500 text-sm">Dedicated support</p>
            </div>
          </div>

        </div>
      </div></>



















  )
}
