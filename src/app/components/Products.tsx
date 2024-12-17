import React from 'react'
import Link from 'next/link';
function Products() {
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
name:'Grifo',
description:'Night lamp',
price:'Rp 1.500.000',
image:'/images/product5.png'

},
{
name:'Muggo',
description:'Small mug',
price: 'Rp 150.000',
new: true,
image:'/images/product6.png',
},

{
    name:'Pingky',
    description:'Cute bed set', 
    price:'Rp 7.000.000',
    oldprice:'Rp 14.000.000',
    discount:'-50%',
    image:'/images/product7.png',

},
{
    name:'Potty',
    description:'Minimalist flower pot',
    price: 'Rp 500.000',
    new: true,
    image:'/images/product8.png',

},
    ];
  return (
    <section className='bg-white py-16 px-4 md:px-6'>
    <div className='container mx-auto'>
   <h1 className='text-3xl md:text-4xl font-bold text-[#3A3A3A] text-center mb-10 top-[1610px]'>
   Our Products
   </h1>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
{Products.map((Product, index) => (
<div key={index}
className='bg-[#F4F5F7] rounded-lg shadow-lg overflow-hidden group relative w-[320]'> 
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
   className='w-[350px] h-[310px] object cover  group-hover:scale-105 transition-transform duration-500 ease-in-out '
   /> 
    <div className='bg-[#3A3A3A] absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center  justify-center transition duration-300 border-2 border-green-600'>
        <ul className='bg-white border-2 border-yellow-300 px-9 py-3 hover:bg-yellow-600  text-[#E89F71] text-medium text-2xl'>
     <li><Link href={'/singleproduct'}> Add to cart</Link></li>
        </ul>
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
<div className='text-center mt-10 mr-5'>
<button className='bg-white text-[#B88E2F] border-2 border-[#B88E2F] px-16 py-3 rounded-lg text-sm hover:bg-yellow-300'>
Show More
</button>
</div>




    </div>
    </section>
  );
};

export default Products;