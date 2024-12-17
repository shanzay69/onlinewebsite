import React from 'react'

function ShareImage() {
  return (
    <section className='bg-white py-12'>
      <div className='container max-auto px-4'>
        <div className='text-center mb-12 '>
          <h2 className='text-sm  font-medium text-[#616161]'>
            Share your setup with <br />
            <span className='md:text-4xl sm:text-2xl lg:text-4xl font-bold text-[#3A3A3A]'>
              #FuniroFurniture
            </span>
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 ml-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/share1.png"
              alt="Share 1"
              className="w-[551px] h-[330px] object-cover "
            />
          </div>
          <div className="rounded-lg overflow-hidden pt-16">
            <img
              src="/images/share2.png"
              alt="Share 2"
              className="w-[310px] h-[500pxpx] object-cover "
            />
          </div>
          <div className="rounded-lg overflow-hidden pt-6">
            <img
              src="/images/share3.png"
              alt="Share3"
              className="w-[340px] h-[448px] object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/share4.png"
              alt="Share 4"
              className="w-[320px] h-[548px] object-covver"
            />
          </div>
          <div className="col-span-1 row-span-2 rounded-lg overflow-hidden " >
            <img
              src="/images/share8.png"
              alt="Share8"
              className="w-[581px] h-[490px]  "
            />
          </div>
          <div className="rounded-lg overflow-hidden ml-9">
            <img
              src="/images/share5.png"
              alt="Share5"
              className="w-[620px] h-[380px] object-cover "
            />
          </div>
          <div className="rounded-lg overflow-hidden ml-20">
            <img
              src="/images/share6.png"
              alt="Share6"
              className="w-[300px] h-[400px] object-cover "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShareImage;