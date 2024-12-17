import React from 'react'

function description() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10">
    <div className='border-b border-gray-200 '></div>
    <div className="flex items-center justify-center space-x-10 pt-10">
      <button className="text-gray-500 font-semibold text-2xl hover:text-black">
        Description
      </button>
      <button className="text-gray-500 font-medium text-2xl hover:text-black">
        Additional Information
      </button>
      <button className="text-gray-500 font-medium  text-2xl hover:text-black">
        Reviews [5]
      </button>
    </div>

    {/* Description Content */}
    <div className="mt-6 text-gray-600 leading-relaxed pt-5 hover:text-black ">
      <p className="mb-4">
      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>
      <p>
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. 
      Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
 <br/>      with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal <br/> preferences while the guitar-influenced leather strap enables easy and stylish travel. 


      </p>
    </div>

    {/* Product Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className=" flex items-center justify-center p-2">
        <img
          src="/images/addcart6.png"
          alt="addcart6"
          className="w-full h-auto"
        />
      </div>
      <div className=" flex items-center justify-center p-2 ">
        <img
          src="/images/addcart6.png" 
          alt="addcart6"
          className="w-full h-auto"
        />
      </div>
    </div>
    
  </section>  































  );
};

export default description;