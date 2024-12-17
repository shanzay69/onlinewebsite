'use client'
import React from 'react'
function productdetails() {
  return (
    <section className="bg-white py-10">
    {/* Header */}
    <div className="container mx-auto px-4 flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
        <a href="#" className="text-gray-600 underline hover:text-gray-800">
          View More
        </a>
      </div>
      <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg">
        Choose a Product
      </button>
    </div>

    {/* Product Grid */}
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Product Card */}
      {Array(4)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src="/images/product1.png" 
              alt="Product"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-gray-900 font-semibold text-lg mb-1">
                Product Name
              </h3>
              <p className="text-gray-600 text-sm mb-3">Rs. 250,000.00</p>
              <button className="w-full bg-[#B88E2F] text-white py-2 rounded-lg hover:bg-[#8B6E2C]">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  </section>
















  );
};

export default productdetails;