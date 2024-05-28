import React from 'react'
import android from "../../components/Download/google.png";
import apple from "../../components/Download/apple.png";
import back from "../../components/Download/image1.jpg";

import Image from 'next/image';



const DownLoad = () => {
  return (
    <div className='bg-[#F0EBE3] dark:bg-[#00215E
    ] dark:text-white'>
    <div className='container'>
{/* header section */}
<div className='space-y-2 text-center  py-14' >
            <p data-aos ="fade-up">
                <span className="text-primary text-2xl font-bold uppercase">DOwn</span>
                <span className="text-2xl font-bold uppercase  text-teal-500">load</span>
            </p>
            <h1 className='text-gray-600 text-3xl font-bold' data-aos ="fade-up" data-aos-delay = "300">
                Best Event Service
            </h1>
        </div>

        {/* card section */}
        <div 
        data-aos ="fade-up"
        className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center  '>
<div className='space-y-8 max-w-[400px] mx-auto  dark:text-black mb-10 '>
  <h1 className='text-2xl font-bold'>
  Planning your dream wedding just got easier!
  </h1>
  <p>
  Stay organized with our planning tools -
 Find the perfect dress and suits -
 Discover beautiful venues and vendors - 
 Create your customized wedding checklist -
   Connect with your bridal party
  </p>

  {/* app store */}
  <div className='flex flex-wrap justify-center sm:justify-start items-center '>
<a href ="">
<Image src={apple} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
</a>
<a href ="">
<Image src={android} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
</a>
  </div>
</div>

{/* image section */}
        <div data-aos ="zoom-in" data-aos-delay = "300" className='max-w-[350px] mx-auto'>
        <Image src={back} alt="Couple" className='max-h-[210px] max-w-[350px] sm:scale-125 translate-y-10 sm:translate-y-0 shadow-xl  mb-16 '/>
</div>
        </div>
    </div>
    </div>
  )
}

export default DownLoad
