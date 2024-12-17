import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <footer className='bg-white py-10 border-t border-gray-200 py-12 px-4 lg:px-24'>
    
    <div className='container max-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
 <div className='space-y-7'>
 <h2 className="text-xl font-bold">Funiro.</h2>
 <p className="text-sm text-gray-500">
 400 University Drive Suite 200 Coral <br/> Gables, <br/>
 FL 33134 USA
</p>
 </div>
    <div className='grid grid-cols-2 gap-20 '>
    <div>
    <h3 className="text-sm font-semibold text-gray-400 mb-4">Links</h3> 
    <ul className="space-y-7 text-sm text-[#000000] hover:underline hover:text-gray-700">
    <li><Link href='/'>Home</Link> </li>
    <li> <Link href='/shop'>Shop</Link>  </li>
    <li> <Link href='/blog'>Blog</Link>  </li>
    <li> <Link href='/contact'>Contact</Link></li>
    </ul>
    </div>
    <div>
    <h3 className='text-sm font-semibold text-gray-400 mb-4'>Help</h3>
<ul className='space-y-9 text-bold text-[#000000] hover:underline hover:text-gray-700'>
<li> <Link href="/payment opition">Payment Options</Link> </li>
    <li>  <Link href="/returns"> Returns  </Link></li>
    <li>   <Link href="/privacy policies"> Privacy Policies </Link> </li>

</ul>
    </div>
      </div> 
<div className='space-y-5 '>
<h3 className="text-sm font-semibold text-gray-400">Newsletter</h3>
<div className='flex border-b-4 border-gray-400 pb-2'>
<input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 outline-none text-sm text-gray-600"
            />
          
        
 <button className="text-sm font-bold text-black ml-20">
 SUBSCRIBE
</button>
</div>

</div>
    </div>
    <div className="mt-8 border-t border-gray-300 pt-6 text-left text-sm text-gray-800">
        <p>2023 funiro. All rights reserved</p>
      </div>







    </footer>
  );
};

export default Footer;
