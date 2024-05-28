
import React from 'react'
import neweye from '../../components/Contact/eye.png.png';

import Image from 'next/image';


const Follower = () => {
  return (
    <div className='bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-72 pb-10 sm:pb-0 '>
     <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
       {/*  left */}
       <div className='space-y-5 sm:p-16 pb-6'>
        <h1 data-aos ="fade-up"  className='text-2xl font-bold sm:text-3xl'>FOREVER TOGETHER</h1>
        <h1 data-aos ="fade-up" className='uppercase text-3xl sm:text-4xl font-bold'>
Since 2010</h1>
<p data-aos ="fade-up" className='leading-8 tracking-wide shadow-md'>
Explore our wedding event website examples to see how we can transform your special day into an unforgettable online experience, filled with love, joy, and cherished memories.
</p>
<button className='bg-black text-white px-4 py-2 rounded-lg'>
  Book Now
</button>
       </div>
       {/* right side form */}
       <div>

        <div>
          <div className='min-w-[350px] mx-auto'>
        <Image src={neweye} alt="Couple" className='max-h-[210px] max-w-[350px] sm:scale-125 translate-y-10 sm:translate-y-0  mb-16 ' />
        </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Follower
