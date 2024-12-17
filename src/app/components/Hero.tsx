"use client"
import React from 'react'

const Hero = () => {
  return (
   <section className='relative bg-[#F5F5F5] '>
   
  
{/*left Image content*/}
<div className='relative inset-0 w-full h-full object-cover '>
      
<img
            src="home photo.png"
            alt="home photo"
            className='w-full h-full object-cover'

   />
   
</div>
<div className='absolute inset-0 flex items-center justify-center px-8 ml-[630px] pt-40 '>
<div className='bg-[#ffedd5] p-10 w-full max-w-[600px] rounded-lg shadow-md'>
<p className='text-gray-700 font-bold text-sm mb-3'>New Arrival</p>
<h1 className= 'text-5xl font-bold text-yellow-600 leading-snug '>  Discover Our <br /> New Collection  </h1>
<p className=' text-gray-900 mt-2'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
   </p>
<button className='mt-9 bg-yellow-600 px-16 py-5 mb-5 hover:bg-yellow-500'>
  <h2 className='text-white text-lg text-sm'>Buy Now</h2>
</button>

</div>

</div>       
 </section>
    
  );
};

export default Hero;