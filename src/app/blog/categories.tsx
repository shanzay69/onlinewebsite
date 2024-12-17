'use client'
import React from 'react'
import { FaUser, FaCalendarAlt, FaFolder } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function categories() {
  const categories = [
    {
      image: "/images/blog1.png",
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      category: "Wood",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",


    },
    {
      image: "/images/blog2.png",
      title: "Exploring new ways of decorating",
      date: "14 Oct 2022",
      category: "Handmade",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",

    },
    {
      image: "/images/blog3.png",
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      category: "Wood",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",

    },
  ];


  return (
    <section className=' container mx-auto px-4 py-8'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 pt-16">
          {categories.map((categories, index) => (
            <div key={index} className="mb-8 ">
              <img
                src={categories.image}
                alt={categories.title}
                className="rounded-lg w-[817px] h-[500px] object-cover"
              />
              <div className="flex items-center space-x-4 text-gray-500 text-sm mt-4">
                <div className="flex items-center">
                  <FaUser className="mr-1" />
                  Admin
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  {categories.date}
                </div>
                <div className="flex items-center">
                  <FaFolder className="mr-1" />
                  {categories.category}
                </div>
              </div>
              <h2 className="text-4xl font-semibold mt-3">{categories.title}</h2>
              <p className="text-gray-500 mt-2">{categories.description}</p>
              <button className="text-black mt-3 border-b border-black">
                Read more
              </button>
            </div>
          ))}
        </div>
        {/* Sidebar Section */}
        <aside>
        <div className="mr-9 pt-20 relative mr-10">
         
    <input
      type="text"
      placeholder="Search here..."
      className="w-full border border-gray-300 rounded-lg px-6 py-5 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
       <IoSearchOutline 
  className=' absolute right-4 top-[95px]  text-gray-400 w-6 h-6 ' />                             

</div>
          <div className="mb-8 pt-16 mr-10">
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-7 text-gray-500">
              <li className="flex justify-between items-center">
                <span className='text-semibold text-gray-500'>Crafts</span>
                <span className="text-gray-500 mr-9">2</span>
              </li>
              <li className="flex justify-between items-center">
                <span className='text-semibold text-gray-500'> Design </span>
                <span className="text-gray-500 mr-9">8</span>
              </li>
              <li className="flex justify-between items-center">
                <span className='text-semibold text-gray-500'>Handmade</span>
                <span className="text-gray-500 mr-9">7</span>
              </li>
              <li className="flex justify-between items-center">
                <span className='text-semibold text-gray-500'>Interior </span>
                <span className="text-gray-500 mr-9">1</span>
              </li>
              <li className="flex justify-between items-center">
                <span className='text-semibold text-gray-500'> Wood </span>
                <span className="text-gray-500 mr-9">6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className=' pt-16 ml-10'>
            <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
            <ul className="space-y-9">
              <li className="flex space-x-4 ">
                <img
                  src="/images/blog4.png"
                  alt="blog4"
                  className="w-16 h-16 rounded-lg object-cover "
                />
                <div>
                  <p className="text-sm text-black">
                    Going all-in with <br /> millennial design
                  </p>
                  <p className="text-xs text-gray-400">03 Aug 2022</p>
                </div>
              </li>
              <li className="flex space-x-4">
                <img
                  src="/images/blog5.png"
                  alt="blog5"
                  className="w-16 h-16 rounded-lg object-cover "
                />
                <div>
                  <p className="text-sm text-black">
                    Exploring new ways <br /> of decorating
                  </p>
                  <p className="text-xs text-gray-400">03 Aug 2022</p>
                </div>
              </li>
              <li className="flex space-x-4">
                <img
                  src="/images/blog6.png"
                  alt="blog6"
                  className="w-16 h-16 rounded-lg object-cover   "
                />
                <div>
                  <p className="text-sm text-black">
                    Handmade pieces<br /> that took time to make
                  </p>
                  <p className="text-xs text-gray-400">03 Aug 2022</p>
                </div>
              </li>
              <li className="flex space-x-4">
                <img
                  src="/images/blog7.png"
                  alt="blog7"
                  className="w-16 h-16 rounded-lg object-cover      "
                />
                <div>
                  <p className="text-sm text-black">
                    Modern home in <br /> Milan
                  </p>
                  <p className="text-xs text-gray-400">03 Aug 2022</p>
                </div>
              </li>
              <li className="flex space-x-4">
                <img
                  src="/images/blog8.png"
                  alt="blog8"
                  className="w-16 h-16 rounded-lg object-cover   "
                />
                <div>
                  <p className="text-sm text-black">
                    Colorful office<br /> redesign
                  </p>
                  <p className="text-xs text-gray-400">03 Aug 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>

      </div>
      <div className='flex justify-center items-center pt-12 gap-7 '>
        <button className="w-12 h-12  bg-[#F9F1E7] hover:bg-[#B68D40] hover:text-white rounded-lg font-medium">
          1
        </button>
        <button className="w-12 h-12 sm:w-12 sm:h-12 bg-[#F9F1E7] hover:bg-[#B68D40] hover:text-white rounded-lg font-medium">
          2
        </button>
        <button className="w-12 h-12 sm:w-12 sm:h-12  bg-[#F9F1E7] hover:bg-[#B68D40] hover:text-white rounded-lg font-medium">
          2
        </button>

        <button className=" px-7 py-3 sm:px-7 sm:py-3  bg-[#F9F1E7] hover:bg-[#B68D40] hover:text-white rounded-lg font-medium">
          Next
        </button>

      </div>
    </section>
  );
};

export default categories;
