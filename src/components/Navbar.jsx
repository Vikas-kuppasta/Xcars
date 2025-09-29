import React from 'react'
import { assets, menuLinks, mobilemenu, ownerMenuLinks } from '../assets/assets'
import { Link, useLocation,} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const[open, setopen] = useState(false);
    const location = useLocation();
    return (
        <main className={` max-md:relative max-md:flex max-md:flex-col   `}>
<div className='max-md:hidden  md:flex md:items-center  md:justify-between md:px-4 md:py-1'>

            <Link className='ml-1 mt-1' to='/'>
                <img src="/logo5.png" className='h-13 w-13 md:h-16 md:w-17 2xl:h-18 2xl:w-20 ' alt="" />
            </Link>
            

            <div className='hidden md:text-sm md:flex text-white md:gap-6 lg:flex lg:gap-9 xl:gap-15 lg:text-lg xl:text-lg 2xl:text-xl'>
                {menuLinks.map((link , op8) => (
                    <Link className='' key={op8} to={link.path}>
                    {link.name}
                    </Link>
                ))}
            </div>
           
            <div className=' hidden md:flex items-center  md:border-2 border-gray-50 border-solid rounded-full px-3 lg:w-90 xl:w-120 2xl:w-130 '>
                <input type="text" placeholder='Search cars' className=' outline-0 placeholder-white w-full bg-transparent md:py-0.5 md:text-sm lg:text-lg text-white' />
                
                <FaSearch className='text-white md:w-3 md:h-3  w-5 h-5'/>
            </div>

            <div className='hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12'>
                <Link className='text-white lg:text-lg 2xl:text-xl flex items-center' to='/owner'>
                    Dashboard
                </Link>
                <button className='bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 outline-1 outline-offset-0 md:px-3 md:text-sm text-white rounded-md xl:px-4 lg:text-lg 2xl:px-4 py-1 text-xl'>
                    Sign Up
                </button>
            </div>

</div>

{/* moblie navbar */}
<div className='md:hidden sticky top-0   px-2 border-b border-white py-1 flex gap-2 justify-between z-10   '> 

<Link>
<img src='/logo5.png' className='h-13 w-13' alt="" />
</Link>

<div className='flex items-center gap-5'>
  <button className='outline-1 rounded-md h-max px-2 py-1 bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 text-white'>
                    Sign Up
  </button>  
  <button className=' ' onClick={()=>setopen(!open)}>
    {open ? <IoClose className='h-8 w-8'/> : <GiHamburgerMenu className='h-8 w-8'/>}
  </button>
</div>

</div>

{open && (
     

    <div className='fixed  z-1 md:hidden h-screen w-full bg-gradient-to-tl from-gray-500 via-gray-300 to-gray-500 py-11'>
        {mobilemenu.map((moblink,op5)=>(
            <NavLink to={moblink.path} className={`relative flex items-center gap-2 pl-1 w-full py-3 md:pl-4 first:mt-6 ${moblink.path===location.pathname? 'bg-blue-100':'text-gray-400'}`}>
                <div  key={op5} className='w-full py-1 pl-2 flex items-center gap-2'>
                    <img src={moblink.path === location.pathname ? moblink.coloredIcon:moblink.icon}  />
                    <span className=' text-black'>{moblink.name}</span>
                    <div className={`${moblink.path === location.pathname && 'bg-blue-500'} w-1.5 h-8 rounded-l right-0 absolute`}></div>
                </div>
                </NavLink>            


            
))}
    </div>

)}






        </main>

    )
}

export default Navbar
