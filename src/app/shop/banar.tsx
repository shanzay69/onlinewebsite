import React from 'react'
import { FaSlidersH } from "react-icons/fa";
import { PiSlideshow } from "react-icons/pi";
import { VscGitPullRequestDraft } from "react-icons/vsc";
function banar() {
  return (
<section className="w-full bg-[#F9F1E7] px-5 py-9 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        <div className="flex items-center gap-4">
        
          <button className="flex items-center gap-4 text-gray-800 hover:text-black">
          <FaSlidersH  className="w-5 h-5" />
            <span className="font-medium">Filter</span>
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
          <VscGitPullRequestDraft  className="w-5 h-5" />
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
          <PiSlideshow className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <p className="text-gray-600 text-sm">
            Showing <span className="font-semibold">1–16</span> of 32 results
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <div className="flex items-center gap-2">
            <span className="text-gray-800 font-medium">Show</span>
            <input
              type="text"
              placeholder="16"
              className="w-14 text-center border border-white rounded-md py-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800 font-medium">Short by</span>
            <select
              defaultValue="Default"
              className="border border-white rounded-md py-4 px-1 text-gray-500"
            >
              <option value="Default">Default</option>
              <option value="Popularity">Popularity</option>
              <option value="Newest">Newest</option>
              <option value="PriceLowHigh">Price: Low to High</option>
              <option value="PriceHighLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
















  );
};

export default banar;