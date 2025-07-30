import React from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'


function Navbar() {
    return (
        <main className='  md:flex items-center  justify-between px-4 py-1 '>
            <Link className='' to='/'>
                <img src="/logo5.png" className='h-11 w-11 md:h-16 md:w-17 2xl:h-18 2xl:w-20 ' alt="" />
            </Link>
            

            <div className='hidden md:flex text-white gap-3 lg:flex lg:gap-9 xl:gap-15 xl:text-lg 2xl:text-xl'>
                {menuLinks.map((link , index) => (
                    <Link className='' key={index} to={link.path}>
                    {link.name}
                    </Link>
                ))}
            </div>
           
            <div className=' hidden md:flex items-center md:border-2 border-gray-50 border-solid rounded-full px-3 xl:w-120 2xl:w-130 '>
                <input type="text" placeholder='Search cars' className=' outline-0 placeholder-white w-full bg-transparent py-1.5' />
                
                <FaSearch className='text-white w-5 h-5'/>
            </div>

            <div className='hidden md:flex gap-4 lg:gap-8 xl:gap-12 '>
                <button className=' text-white xl:text-lg 2xl:text-xl'>Dashboard</button>
                <button className='bg-gradient-to-tl from-gray-700 via-gray-500 to-gray-700 outline-1 outline-offset-0  px-2 text-white rounded-md xl:px-4 xl:text-lg 2xl:px-4 py-1 text-xl'>Sign Up</button>
            </div>

        </main>

    )
}

export default Navbar
