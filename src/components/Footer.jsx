import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
function Footer() {
    return (
        <main className='px-3'>
            <div className= 'md:flex md:items-center md:justify-center lg:flex lg:items-center  lg:justify-between'>
                <div className='flex flex-col text-center justify-center items-center lg:flex lg:flex-col lg:text-left  '>
                    <img className=' lg:flex lg:justify-start lg:self-start h-22 w-22' src="/logo5.png" alt=""/>
                    <p className='mt-4 mb-4 md:w-100 lg:w-85 lg:flex lg:justify-start lg:self-start text-gray-200 '>Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>

                    <div className='flex lg:flex lg:justify-start lg:self-start gap-6'>
                        <FaFacebook className='w-6 h-6 text-gray-200' />

                        <FaInstagram className='w-6 h-6 text-gray-200' />
                        <FaXTwitter className='w-6 h-6 text-gray-200' />
                        <IoMail className='w-6 h-6 text-gray-200' />
                        
                    </div>

                </div>

                <div className='hidden md:hidden lg:flex lg:gap-6'>
                    <div className=' px-4 py-6 text-left text-gray-900'>
                        <h1 className='mb-3 font-bold'>OUICK LINKS</h1>
                        <Link ><h2 className='text-gray-200' >Home</h2></Link>
                        <Link ><h2 className='text-gray-200' >Browse Cars</h2></Link>
                        <Link ><h2 className='text-gray-200' >List Cars</h2></Link>
                        <Link ><h2 className='text-gray-200' >About us</h2></Link>
                    </div>
                    <div className=' px-4 py-6 text-left  text-gray-900'>
                        <h1 className='mb-3 font-bold'>RESOURCES</h1>
                        <Link ><h2 className='text-gray-200' >Help Center</h2></Link>
                        <Link ><h2 className='text-gray-200' >Terms of services</h2></Link>
                        <Link ><h2 className='text-gray-200' >Privcy policy</h2></Link>
                        <Link ><h2 className='text-gray-200' >Insurance</h2></Link>
                    </div>
                    <div className=' px-4 py-6 text-left text-white'>
                        <h1 className='font-bold text-gray-900' >CONTACT</h1>
                        <ul className='text-gray-200 mt-3'>
                            <li>1234 Luxury Drive</li>
                            <li>San Francisco, CA 94107</li>
                            <li>+1 234 567890</li>
                            <li>Xcarsofficial@gmail.com</li>
                        </ul>

                    </div>

                </div>

                </div>

                

            <div className='flex flex-col justify-center items-center md:flex md:items-center md:justify-between py-2 mt-4 border-t-1 border-t-gray-400 border-solid'>
            <h1 className='text-gray-300'>© 2025 Brand. All rights reserved.</h1>

            <ul className='flex mt-1 md:flex text-gray-300 gap-6'>
                <li>Privacy</li>
                <li>|</li>
                <li>Terms</li>
                <li>|</li>
                <li>Conditions</li>
            </ul>

            </div>
        </main>
       
    )
}

export default Footer
