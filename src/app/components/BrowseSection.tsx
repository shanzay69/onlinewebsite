import React from 'react'

function BrowseSection() {
  return (
    <section className='bg-white py-16 px-4 md:px-8 '>
<div className='container max-auto text-center ml-16'>
<h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
Browse The Range
</h1>
<p className='text-gray-600 mb-10 text-medium md:text-base'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
</div>
 {/* Cards Section */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto'>
<div className='group relative '>
<img
src='table.png'
alt='table'
className='w-full h-[400px] md:h-[480px] rounded-lg object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
<p className='text-lg font-medium text-gray-800 text-center pt-5'> Dining </p>

</div>
<div className='group relative'>
<img
src='living-room.png'
alt='living-room'
className='w-full h-[400px] md:h-[480px] rounded-lg object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
<p className='text-lg font-medium text-gray-800 text-center pt-5'>Living</p>

</div>
<div className='group relative'>
<img
src='plante.png'
alt='plante'
className=' w-full h-[400px] md:h-[480px] rounded-lg object-cover  group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
<p className='text-lg font-medium text-gray-800 text-center pt-5'>Bedroom</p>

</div>
</div>

    </section>
    
  );
};

export default BrowseSection;

