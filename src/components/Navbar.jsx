import React from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    return (
        <main className='flex items-center  justify-between  md:flex md:items-center  md:justify-between px-4 py-1 '>
            <Link className='' to='/'>
                <img src="/logo5.png" className='h-13 w-13 md:h-16 md:w-17 2xl:h-18 2xl:w-20 ' alt="" />
            </Link>
            

            <div className='hidden md:text-sm md:flex text-white md:gap-6 lg:flex lg:gap-9 xl:gap-15 xl:text-lg 2xl:text-xl'>
                {menuLinks.map((link , index) => (
                    <Link className='' key={index} to={link.path}>
                    {link.name}
                    </Link>
                ))}
            </div>
           
            <div className=' hidden md:flex items-center  md:border-2 border-gray-50 border-solid rounded-full px-3 xl:w-120 2xl:w-130 '>
                <input type="text" placeholder='Search cars' className=' outline-0 placeholder-white w-full bg-transparent md:py-0.5 md:text-sm text-white' />
                
                <FaSearch className='text-white md:w-3 md:h-3  w-5 h-5'/>
            </div>

            <div className='hidden md:flex gap-4 lg:gap-8 xl:gap-12 '>
                <button className=' text-white xl:text-lg 2xl:text-xl'>Dashboard</button>
                <button className='bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 outline-1 outline-offset-0  md:px-3 md:text-sm text-white rounded-md xl:px-4 xl:text-lg 2xl:px-4 py-1 text-xl'>Sign Up</button>
            </div>

            <div className='flex gap-7 md:hidden'>
                <button className='bg-blue-600  outline-1 outline-offset-0 text-sm px-4 text-white rounded-md'>
                    Signup

                </button>
            <GiHamburgerMenu className= 'text-gray-800 h-7 w-7 ' />
            </div>




        </main>

    )
}

export default Navbar
