import React from 'react'

function relateproduct() {
    const relateproduct =[
        {
        name:'Syltherine',
        description:' Stylish cafe chair',
        price:'Rp 2.500.000',
        oldprice:'Rp 3.500.000',
        discount:'-30%',
        image:'/images/image1.png',
        },
        {
        name:'Leviosa',
        description:'Stylish cafe chair',
        price:'Rp 2.500.000',
        image:'/images/image2.png',
        },
        {
        name:'Lolito',
        description:'Luxury big sofa', 
        price:'Rp 7.000.000',
        oldprice:'Rp 14.000.000',
        discount:'-50%',
        image:'/images/image3.png',
        },
   {
   name:'Respira',
   description:'Outdoor bar table and stool',
   price:'Rp 500.000',
   new: true,
   image:'/images/image4.png',
   
   },
    ];
  return (
    <section className='bg-white py-16 px-4 md:px-6'>
    <div className='container mx-auto'>
   <h1 className='text-3xl md:text-4xl font-bold text-[#3A3A3A] text-center mb-9 top-[1610px]'>
   Related Products                    
   </h1>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
{relateproduct.map((relateProduct, index) => (
<div key={index}
className='bg-[#F4F5F7] rounded-lg shadow-lg overflow-hidden group relative w-[320]'> 
<div className='relative'>
   {relateProduct.discount && (
  <span className='absolute top-2 right-2 bg-red-400 text-white text-sm px-1 py-3 rounded-full'>
{relateProduct.discount}
  </span>
   )} 
   {relateProduct.new && (
  <span className='absolute top-2 right-2 bg-[#34d399] text-white text-sm px-2 py-3 rounded-full'>
   New
  </span>
   )} 
    
   <img
   src={relateProduct.image}
   alt={relateProduct.name}
   className='w-[330px] h-[310px] object cover'
   /> 
     </div>
   <div className='p-4'>
 <h3 className='text-lg font-semibold text-gray-900 pt-3'>
   {relateProduct.name}
 </h3>
 <p className='text-sm text-gray-500'> {relateProduct.description}</p>
<div className='mt-2'>
<span className='text-lg font-bold text-gray-700'>
{relateProduct.price}
</span>
{relateProduct.oldprice &&(
<span className='text-sm text-gray-500 line-through ml-2'>
{relateProduct.oldprice}
</span>

)}

</div>
  </div>
</div>
))}
</div>     
<div className='text-center mt-10 mr-5'>
<button className='bg-white text-[#B88E2F] border-2 border-[#B88E2F] px-16 py-3 rounded-lg text-sm'>
Show More
</button>
</div>
    </div>
    </section> 

  );
};

export default relateproduct;