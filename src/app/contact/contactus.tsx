import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaHeadset, FaMapMarkerAlt, FaShippingFast } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GrTrophy } from 'react-icons/gr';
import { BsPatchCheck } from 'react-icons/bs';
function contactus() {
  return (
    <><div className="container mx-auto px-4 py-8 pt-16">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-7 text-gray-900">
              Get In Touch With Us
          </h2>
          <p className="text-center text-gray-500 mb-8">
              For More Information About Our Product & Services. Please Feel Free To
              Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 flex items-start pt-9 ">
              {/* Contact Information */}
              <div className="space-y-9">
                  {/* Address */}
                  <div className="flex items-start space-x-5 ml-60 pt-5">
                      <span className="text-black text-2xl"> <FaMapMarkerAlt /> </span>
                      <div>
                          <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                          <p className="text-gray-600">
                              236 5th SE Avenue, New <br />York NY10000, United States
                          </p>
                      </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start space-x-5 ml-60">
                      <span className="text-black text-2xl"><FaPhone />
                      </span>
                      <div>
                          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                          <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                          <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                      </div>
                  </div>
                  {/* Working Time */}
                  <div className="flex items-start space-x-5 ml-60">
                      <span className="text-black text-3xl"> <IoTime /></span>
                      <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                              Working Time
                          </h3>
                          <p className="text-gray-600">
                              Monday–Friday: 9:00 - <br />22:00 <br />
                              Saturday–Sunday: 9:00 -<br /> 21:00
                          </p>
                      </div>
                  </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                      <label
                          htmlFor="name"
                          className="block text-gray-900 font-medium mb-2"
                      >
                          Your name
                      </label>
                      <input
                          type="text"
                          id="name"
                          placeholder="Abc"
                          className="w-[540px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                  </div>
                  {/* Email Field */}
                  <div>
                      <label
                          htmlFor="email"
                          className="block text-gray-900 font-medium mb-2"
                      >
                          Email address
                      </label>
                      <input
                          type="email"
                          id="email"
                          placeholder="Abc@def.com"
                          className="w-[540px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                  </div>
                  {/* Subject Field */}
                  <div>
                      <label
                          htmlFor="subject"
                          className="block text-gray-900 font-medium mb-2"
                      >
                          Subject
                      </label>
                      <input
                          type="text"
                          id="subject"
                          placeholder="This is an optional"
                          className="w-[540px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                  </div>
                  {/* Message Field */}
                  <div>
                      <label
                          htmlFor="message"
                          className="block text-gray-900 font-medium mb-2"
                      >
                          Message
                      </label>
                      <textarea
                          id="message"
                          rows={4}
                          placeholder="Hi! I’d like to ask about"
                          className="w-[540px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      ></textarea>
                  </div>
                  {/* Submit Button */}
                  <button
                      type="submit"
                      className="w-[240px] bg-[#B88E2F] text-white font-medium py-3 rounded-md hover:bg-yellow-600 transition duration-300"
                  >
                      Submit
                  </button>
              </form>
          </div>
          {/* End of Contact Section */}
      </div>
      
<div className="bg-[#f9f5f0] py-16 px-4">
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




















  );
};

export default contactus;