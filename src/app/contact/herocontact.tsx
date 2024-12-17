import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function herocontact() {
  return (
     <section className='relative bg-cover bg-center h-[200px] sm:h-[100px] md:h-[200px] lg:h-[300px]  flex items-center justify-center'
        style={{backgroundImage: "url('/images/heroshop.png')",            
    
        }}>
      <img 
        src="/logo.png"
        alt="logo"
        className="absolute  mr-4 top-[87px] w-9 h-7" 
      />


     <div className='relative text-center mr-6'>
    <h1 className='text-[#000000] text-3xl sm:text-2xl md:text-4xl font-semibold '> Contact</h1>
    <nav className='text-sm sm:text-base flex justify-center items-center mt-2'>
    <span className='font-semibold text-[#000000] '>Home</span>
      <IoIosArrowForward className='mt-1 ml-1'/>
    <span className="text-gray-600 text-sm pt-1">Contact </span>
    </nav>
     </div>
        </section>

  );
};

export default herocontact;
