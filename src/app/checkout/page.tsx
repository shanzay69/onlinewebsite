import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaShippingFast, FaHeadset } from 'react-icons/fa';
import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from 'react-icons/bs';
export default function page() {
  return (
   <><><><div className='relative bg-cover bg-center h-[200px] sm:h-[100px] md:h-[200px] lg:h-[300px]  flex items-center justify-center'
          style={{
              backgroundImage: "url('/images/heroshop.png')",
          }}>
          <img
              src="/logo.png"
              alt="logo"
              className="absolute mr-4 top-[90px] w-9 h-7" />

          <div className='relative text-center mr-6'>
              <h1 className='text-[#000000] text-3xl sm:text-2xl md:text-4xl font-semibold '>Checkout </h1>
              <nav className='text-sm sm:text-base flex justify-center items-center mt-2'>
                  <span className='font-semibold text-[#000000]'>Home</span>
                  <IoIosArrowForward className='mt-1 ml-1' />
                  <span className="text-gray-600 text-sm pt-1">Checkout</span>
              </nav>
          </div>
      </div></><div className="container mx-auto px-2 py-4 pt-16">
              {/* Billing Details */}
              <div className="grid md:grid-cols-2 gap-16">
                  {/* Left Section - Billing Form */}
                  <div>
                      <h2 className="text-black text-3xl font-bold mb-6">Billing details</h2>
                      <form className="space-y-5">
                          {/* First Name & Last Name */}
                          <div className="grid grid-cols-1 md:grid-cols-2">
                              <div>
                                  <label className="block text-sm font-medium mb-1">First Name</label>
                                  <input
                                      type="text"
                                      placeholder="Your first name"
                                      className="w-[230px] p-5 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                              </div>
                              <div>
                                  <label className="block text-sm font-medium mb-2">Last Name</label>
                                  <input
                                      type="text"
                                      placeholder="Your last name"
                                      className=" w-[230px] p-5 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                              </div>
                          </div>

                          {/* Company Name */}
                          <div>
                              <label className="block text-sm font-medium mb-4">
                                  Company Name (Optional)
                              </label>
                              <input
                                  type="text"
                                  placeholder="Company name"
                                  className="w-[553px] p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                          </div>

                          {/* Country / Region */}
                          <div>
                              <label className="block text-sm font-medium mb-4">Country / Region</label>
                              <select
                                  className="w-[553px] p-3  border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                              >
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="United States">United States</option>
                              </select>
                          </div>

                          {/* Street Address */}
                          <div>
                              <label className="block text-sm font-medium mb-4">Street address</label>
                              <input
                                  type="text"
                                  placeholder="Street address"
                                  className="w-[553px] p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                          </div>

                          {/* Town / City */}
                          <div>
                              <label className="block text-sm font-medium mb-4">Town / City</label>
                              <input
                                  type="text"
                                  placeholder="Town or city"
                                  className="w-[553px] p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                          </div>

                          {/* Province */}
                          <div>
                              <label className="block text-sm font-medium mb-4">Province</label>
                              <select
                                  className=" w-[553px] p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                              >
                                  <option>Western Province</option>
                                  <option>Eastern Province</option>
                              </select>
                          </div>

                          {/* ZIP Code */}
                          <div>
                              <label className="block text-sm font-medium mb-4">ZIP code</label>
                              <input
                                  type="text"
                                  placeholder="ZIP code"
                                  className=" w-[553px] p-4  border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                          </div>

                          {/* Phone */}
                          <div>
                              <label className="block text-sm font-medium mb-4">Phone</label>
                              <input
                                  type="text"
                                  placeholder="Phone number"
                                  className="w-[553px] p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                          </div>

                          {/* Email */}
                          <div>
                              <label className="block text-sm font-medium mb-4">Email address</label>
                              <input
                                  type="email"
                                  placeholder="Email address"
                                  className=" w-[553px] p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500" />
                          </div>

                          {/* Additional Information */}
                          <div>
                              <textarea
                                  placeholder="Additional details"
                                  className=" w-[553px] p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                                  rows={3}
                              ></textarea>
                          </div>
                      </form>
                  </div>

                  {/* Right Section - Order Summary */}
                  <div>
                      <h2 className="text-2xl font-bold mb-6">Product</h2>
                      <div className="border p-5 rounded-md space-y-5">
                          {/* Product List */}
                          <div className="flex justify-between">
                              <p className='text-gray-500 text-sm'>Asgaard sofa x 1</p>
                              <p>Rs. 250,000.00</p>
                          </div>

                          <div className="border-t"></div>

                          {/* Subtotal */}
                          <div className="flex justify-between text-sm font-semibold">
                              <p>Subtotal</p>
                              <p>Rs. 250,000.00</p>
                          </div>

                          {/* Total */}
                          <div className="flex justify-between text-lg font-bold">
                              <p>Total</p>
                              <p className="text-yellow-600">Rs. 250,000.00</p>
                          </div>

                          {/* Payment Methods */}
                          <div className="space-y-3 text-sm">
                              <div>
                                  <input type="radio" name="payment" id="bank" defaultChecked />
                                  <label htmlFor="bank" className="ml-2">
                                      Direct Bank Transfer
                                  </label>
                                  <p className="text-gray-500 text-xs mt-1">
                                      Make your payment directly into our bank account.
                                  </p>
                              </div>

                              <div>
                                  <input type="radio" name="payment" id="cash" />
                                  <label htmlFor="cash" className="ml-2">Cash On Delivery</label>
                              </div>
                          </div>

                          {/* Privacy Policy */}
                          <p className="text-gray-500 text-xs">
                          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our   


                                                                   {" "}
                              <span className="font-bold">privacy policy</span>.
                          </p>

                          {/* Place Order Button */}
                          <button className="w-full bg-white text-gray-800 border border-gray-400 py-4 rounded-lg hover:bg-gray-800">
                              Place order
                          </button>
                      </div>
                  </div>
              </div>
          </div></><div className="bg-[#f9f5f0] py-16 px-4">
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
