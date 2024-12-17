import React from 'react'
import { FaStar, FaPlus, FaMinus, FaShareAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiH1 } from 'react-icons/hi2';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
function single() {
  return (
   <><div className="w-full bg-[#F9F1E7] py-12 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row text-right">
<h1 className='text-sm text-gray-500 font-bold'>Home</h1>
<IoIosArrowForward className='text-black ml-4 pt-1 '/>
<h2 className='text-sm text-gray-500 font-bold ml-4'>Shop</h2>
<IoIosArrowForward className='text-black ml-4 pt-1 '/>
<div className=' border-r border-gray-400 ml-5'></div>
<button className='text-gray-800 font-semi bold ml-4'> Asgaard sofa</button>

        </div>
      </div>
    <section className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* single Images */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6">
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-8 pt-5">
            {/* Small image */}
            <img
              src="/images/addcart1.png"
              alt="addcart1"
              className="w-20 h-20 rounded-lg cursor-pointer border hover:border-black  bg-[#F9F1E7] " />
            <img
              src="/images/addcart2.png"
              alt="addcart2"
              className="w-20 h-20 rounded-lg cursor-pointer border hover:border-black bg-[#F9F1E7] " />
            <img
              src="/images/addcart3.png"
              alt="addcart3"
              className="w-20 h-20 rounded-lg cursor-pointer border hover:border-black" />
            <img
              src="/images/addcart4.png"
              alt="addcart4"
              className="w-20 h-20 rounded-lg cursor-pointer border hover:border-black" />
          </div>
          <div className="bg-[#F9F1E7] p-4 rounded-lg flex justify-center items-center">
            {/* Main sigle Image */}
            <img
              src="/images/addcart1.png"
              alt="addcart1"
              className="w-[460px] max-h-[360px] object-cover " />
          </div>
        </div>

        {/* single Content */}
        <div className='ml-4 pt-4'>
          {/* Title and Price */}
          <h1 className="text-3xl text-gray-800 font-semibold mb-2">Asgaard Sofa</h1>
          <p className="text-gray-600 text-2xl font-semibold mb-2">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex text-yellow-400 border-r border-gray-300 py-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
            <span className="ml-2 text-gray-500 py-2 ">5 Customer Review</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, <br />stout-hearted hero with a well-balanced audio which boasts a clear midrange and <br /> extended highs for a sound.



          </p>

          {/* Size and Color Options */}
          <div className="flex space-x-8 mb-6">
            <div>
              <h3 className="font-semibold mb-2 text-gray-400">Size</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-2 border rounded hover:text-white hover:bg-[#B88E2F]">L</button>
                <button className="px-3 py-2 border rounded hover:text-white hover:bg-[#B88E2F] ">XL</button>
                <button className="px-3 py-2 border rounded  hover:text-white hover:bg-[#B88E2F] ">XS</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-5 text-gray-400">Color</h3>
              <div className="flex space-x-2">
                <button className="w-6 h-6 rounded-full bg-purple-600"></button>
                <button className="w-6 h-6 rounded-full bg-black"></button>
                <button className="w-6 h-6 rounded-full bg-[#B88E2F]"></button>
              </div>
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center space-x-6 mb-6">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded-lg">
              <button className="px-4 py-5 text-lg border-r hover:bg-gray-200">
                <FaMinus />
              </button>
              <span className="px-6 py-2">1</span>
              <button className="px-4 py-5 text-lg border-l hover:bg-gray-200">
                <FaPlus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <ul className="border border-gray-300 text-black px-10 py-3 rounded-lg hover:bg-gray-100">
              <li> <Link href={'/cart'}> Add To Cart</Link></li>
            </ul>

            {/* Compare Button */}
            <button className="border border-gray-300 px-10 py-3 rounded-lg hover:bg-gray-100 text-black">
              + Compare
            </button>
          </div>

          {/* single Info */}
          <div className="space-y-6 text-gray-600 border-t border-gray-200 mb-3">
            <h1 className='pt-4'>
              <span className="font-semibold">SKU:</span> SS001
            </h1>
            <h2>
              <span className="font-semibold">Category:</span>  Sofas
            </h2>
            <h3>
              <span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop
            </h3>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-600">Share:</span>
            <div className="flex space-x-4 text-white">
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-black flex items-center justify-center hover:bg-gray-800"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-black flex items-center justify-center hover:bg-gray-800"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-black flex items-center justify-center hover:bg-gray-800"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section></>
  );
};

export default single;
