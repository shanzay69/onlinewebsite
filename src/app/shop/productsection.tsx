'use client'
import React from 'react'
import Link from 'next/link';
function productsection() {
const Products =[
    {
    name:'Syltherine',
    description:' Stylish cafe chair',
    price:'Rp 2.500.000',
    oldprice:'Rp 3.500.000',
    discount:'-30%',
    image:'/images/product1.png',
    },
    {
    name:'Leviosa',
    description:'Stylish cafe chair',
    price:'Rp 2.500.000',
    image:'/images/product2.png',
    },
    {
    name:'Lolito',
    description:'Luxury big sofa', 
    price:'Rp 7.000.000',
    oldprice:'Rp 14.000.000',
    discount:'-50%',
    image:'/images/product3.png',
    },
{
name:'Respira',
description:'Outdoor bar table and stool',
price:'Rp 500.000',
new: true,
image:'/images/product4.png',

},
{
    name:'Syltherine',
    description:' Stylish cafe chair',
    price:'Rp 2.500.000',
    oldprice:'Rp 3.500.000',
    discount:'-30%',
    image:'/images/product1.png',
    },
    {
    name:'Leviosa',
    description:'Stylish cafe chair',
    price:'Rp 2.500.000',
    image:'/images/product2.png',
    },
    {
    name:'Lolito',
    description:'Luxury big sofa', 
    price:'Rp 7.000.000',
    oldprice:'Rp 14.000.000',
    discount:'-50%',
    image:'/images/product3.png',
    },
{
name:'Respira',
description:'Outdoor bar table and stool',
price:'Rp 500.000',
new: true,
image:'/images/product4.png',

},
{
    name:'Syltherine',
    description:' Stylish cafe chair',
    price:'Rp 2.500.000',
    oldprice:'Rp 3.500.000',
    discount:'-30%',
    image:'/images/product1.png',
    },
    {
    name:'Leviosa',
    description:'Stylish cafe chair',
    price:'Rp 2.500.000',
    image:'/images/product2.png',
    },
    {
    name:'Lolito',
    description:'Luxury big sofa', 
    price:'Rp 7.000.000',
    oldprice:'Rp 14.000.000',
    discount:'-50%',
    image:'/images/product3.png',
    },
{
name:'Respira',
description:'Outdoor bar table and stool',
price:'Rp 500.000',
new: true,
image:'/images/product4.png',

},
{
    name:'Syltherine',
    description:' Stylish cafe chair',
    price:'Rp 2.500.000',
    oldprice:'Rp 3.500.000',
    discount:'-30%',
    image:'/images/product1.png',
    },
    {
    name:'Leviosa',
    description:'Stylish cafe chair',
    price:'Rp 2.500.000',
    image:'/images/product2.png',
    },
    {
    name:'Lolito',
    description:'Luxury big sofa', 
    price:'Rp 7.000.000',
    oldprice:'Rp 14.000.000',
    discount:'-50%',
    image:'/images/product3.png',
    },
{
name:'Respira',
description:'Outdoor bar table and stool',
price:'Rp 500.000',
new: true,
image:'/images/product4.png',

},

];
  return (
    <section className='bg-white py-16 px-4 md:px-6'>
    <div className='container mx-auto'>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
{Products.map((Product, index) => (
<div key={index}
className='bg-[#F4F5F7]  overflow-hidden group relative w-[320]'> 
<div className='relative'>
   {Product.discount && (
  <span className='absolute top-2 right-2 bg-red-400 text-white text-sm px-1 py-3 rounded-full'>
{Product.discount}
  </span>
   )} 
   {Product.new && (
  <span className='absolute top-2 right-2 bg-[#34d399] text-white text-sm px-2 py-3 rounded-full'>
   New
  </span>
   )} 
    
   <img
   src={Product.image}
   alt={Product.name}
   className='w-[350px] h-[310px] object cover'
   /> 
    <div className='bg-[#3A3A3A] absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center  justify-center transition duration-300 border-2 border-green-600'>
      <ul className='bg-white border-2 border-yellow-300 px-9 py-3 hover:bg-yellow-600 text-[#E89F71] text-medium text-2xl'>
        <li>
     <Link href={'/singleproduct'}>  Add to cart</Link></li> </ul>
         </div>
     </div>
   <div className='p-4'>
 <h3 className='text-lg font-semibold text-gray-900 pt-3'>
   {Product.name}
 </h3>
 <p className='text-sm text-gray-500'> {Product.description}</p>
<div className='mt-2'>
<span className='text-lg font-bold text-gray-700'>
{Product.price}
</span>
{Product.oldprice &&(
<span className='text-sm text-gray-500 line-through ml-2'>
{Product.oldprice}
</span>


)}

</div>
  </div>
</div>
))}
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




 </div>   
</section>

  );
};

export default productsection;
