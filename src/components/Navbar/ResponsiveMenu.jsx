import React from 'react'
import { PiUserCircleMinusLight } from "react-icons/pi";
import { Navlinks } from './Navbar';
import Link from 'next/link';

const ResponsiveMenu = ({showMenu}) => {
  return (

    <div className={`${showMenu ? "left-0 ": "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col bg-white justify-between dark:bg-dark dark: text-white px-8 pb-6 pt-17 text-dark duration-200 
    md:hidden rounded-r-xl shadow-md`}>
<div>
    <div className='flex justify-start  items-center gap-1'>
        <div>
            <PiUserCircleMinusLight className='text-5xl text-teal-500' />
        </div>
        <h3 className='text-teal-200'>HELLO USER</h3>
        <h2 className='text-teal-900'>be a <span className='text-teal-500'>golden</span> member</h2>

    </div>

</div>
         {/* navigation link section */}
          <nav>
          <ul>
          {Navlinks.map(({ id, name, link }) => (
  <li key={id} className='py-3'>
    <Link href={link} passHref   className={`text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}>
      
        {name}
      
    </Link>
  </li>
))}

          </ul>
         </nav> 
    </div>
  )
}

export default ResponsiveMenu