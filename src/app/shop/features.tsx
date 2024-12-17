import React from 'react'
import { FaShippingFast, FaHeadset } from 'react-icons/fa';
import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";
function features() {
  return (
    <div className="bg-[#f9f5f0] py-20 px-4">
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
    </div>
 

  );
};

export default features;
