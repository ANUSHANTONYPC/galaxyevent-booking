import React from 'react'
import { FaFacebookF, FaMapMarked } from "react-icons/fa";
import { CiInstagram, CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAndroid , FaApple,  } from "react-icons/fa";
import { PiCallBellFill } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
<div className='bg-primary'>
        <div className='container text-black text-center py-10 lg:py-14 text-2xl  font-bold space-y-4 uppercase'>
          <p>Saying yes creating happiness</p>
          <h1 className='text-3xl md:text-5xl font-bold'>+0876-6798</h1>
    </div>
    </div>
    {/*  */}
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12'>

        {/* first colum */}
<div className="space-y-6">
    {/* head */}
    <h1 className='text-2xl py-3 font-bold border-b-8 border-primary'>ABOUT US</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. t, repudiandae cum explicabo magni laborum voluptatibus facere maxime?</p>
    {/* social links */}
<div className='flex items-center text-primary gap-3 text-2xl'>
<FaFacebookF />
<CiInstagram />
<FaTwitter />
<FaLinkedin />
<FaWhatsapp />
</div>

</div>

        {/* second colum */}
<div className='space-y-6'>
<h1 className='text-2xl py-3 font-bold border-b-8 border-primary'>DOWNLOAD</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. t, repudiandae cum explicabo magni laborum voluptatibus facere maxime?</p>
    <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
        Android user {" "}<span>
        <FaAndroid className='text-2xl text-black dark:text-white' />
        </span>
    </h1>
    <h1 className='text-primary text-xl font-semibold flex items-center gap-4'>
        Apple user {" "}<span>
        <FaApple  className='text-2xl text-black dark:text-white' />
        </span>
    </h1>
</div>
        {/* third coloum */}

        <div  className='space-y-6'>
        <h1 className='text-2xl py-3 font-bold border-b-8 border-primary'>CONTACT</h1>
        <div className='flex items-center gap-4'>
<FaMapMarked/> {" "}<h1>
       ERNAKULAM KOCHI NEAR RAVIPURAM PO-681010
</h1>
        </div>

        <div  className='flex item-center gap-4'>
<PiCallBellFill/>
        <h1 className='text-primary font-semibold'>+0876-6798</h1>
        </div>

        <div  className='flex item-center gap-4'>
<CiMail/> 
        <h1 className='text-primary font-semibold'>eventgalax@gmail.com</h1>
        </div>
        </div>
    </div>
    <p className='text-center py-4 text-sm '>

Copyright © 2024. All rights reserved.</p>
    </div>
  )
}

export default Footer
