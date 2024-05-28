  
  "use client" ;
  import Link from 'next/link';
import React from 'react';
import DarkEye from './DarkEye';
import { FaRegEye,FaEyeSlash } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';
import { usePathname } from 'next/navigation';

 export const Navlinks = [
  {
    id: 1,
    name: 'HOME',
    link: '/'
  },
  {
    id: 2,
    name: 'ABOUT',
    link: '/about'
  },
  {
    id: 3,
    name: 'PLAN',
    link: '/plan'
  },
  {
    id: 4,
    name: 'CONTACT',
    link: '/contact'
  },
  {
    id: 5,
    name: 'BLOG',
    link: '/login'
  }
];


const Navbar = () => {
  const pathname = usePathname();

  const [showMenu, setshowMenu] = React.useState(false)
  const toggleMenu = () => setshowMenu(!showMenu)

  return (
    <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
      <div className='container py-3 md:py-1'>
        <div className='flex items-center justify-between'>
          {/* logo selection */}
          <Link href="/" passHref>
            
              <span className='text-primary'>EVENT</span>
              <span className='text-xl font-bold'>APP.com</span>
           
          </Link>

          {/* menu selection */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              {Navlinks.map(({ id, name, link }) => {
                const isActive = pathname === 
                link;

                return(
                <li key={id} className='py-3'>
                  <Link href={link} className={` ${isActive ? "bg-primary dark:text-black"

: ""

                  }text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}>
                    {name}
                  </Link>
                </li>)
})}

 {/* dark mode section */}
<DarkEye/>

            </ul>
          </div>

         {/* for mobile section */}

         <div className='md:hidden flex item-center gap-5'>
          <DarkEye/>
          {
            showMenu? (
              <FaEyeSlash onClick={toggleMenu} className='cursor-pointer transition-all' size={30} />
            ) : (
              <FaRegEye onClick={toggleMenu} className='cursor-pointer transition-all' size={30} />
            )
          }
           
          
         </div>
         
        </div>
      </div>
   <ResponsiveMenu showMenu={showMenu} />
   </nav>
  );
};

export default Navbar;
