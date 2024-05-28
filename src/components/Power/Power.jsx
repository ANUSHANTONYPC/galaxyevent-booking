import React from 'react'
import newImage from '../../assest/jmktjg_8d47ed353bcff3a9f950a278160c21c894d4885e-removebg-preview.png';

import one from '../../assest/efq6dt_e8b83034cf82f488705dca67b57016a841e6d7f5.jpg';
import Image from 'next/image';

const  bgStyle = {
    backgroundImage: `url(${one.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '520px',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    
}



const Power = () => {
  return (
    <div style={bgStyle}>
<div className='dark:bg-dark/60 bg-white/50 backdrop-blur-sm dark:text-white  duration-300 h-[520px] flex'>
    <div className="container grid grid-cols-1 place-items-center">
        {/*  text content section */}
        <div className='text-center space-y-5 py-14'>

<p  data-aos="fade-up"
data-aod-delay="500" className='text-black text-4xl font-bold  dark:text-primary  '>Make your happy moments more precious with us</p>
<h1 data-aos="fade-down"
data-aod-delay="500" className='text-2xl '>Two hearts, one love, endless possibility.</h1>
<p data-aos="fade-up"
data-aod-delay="500"
className='tracking-[8px] text-base sm:text-xl font-medium'>
www.eventuality.com
</p>
        </div>
        {/* image */}
        <div data-aos="zoom-in-right">
        <Image src={newImage} alt="couple" className='max-h-[450px] max-w-[400px] sm:scale-125 translate-y-10 sm:translate-y-0 shadow-xl '/>

        </div>

    </div>
</div>

    </div>
  )
}

export default Power