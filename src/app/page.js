
  
  "use client" ;

import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Power from '@/components/Power/Power';
import Follower from '@/components/Contact/Follower';
import Bestoffer from '@/components/BestPlans/Bestoffer';
import About from '@/components/About/About';
import DownLoad from '@/components/Download/DownLoad';
import Testimonial from '@/components/Testimonial/Testimonial';

const page = () => {
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:500,
      easing:'ease-in-sine',
      delay:100
    
    })
    Aos.refresh();
  },[]);
  return (
    <div className='dark:bg-dark dark:text-white'>
    
     <Power/>
     <Follower/>
     <Bestoffer/>
     <About/>
     <DownLoad/>
     <Testimonial/>
\        
    </div>
  )
}

export default page