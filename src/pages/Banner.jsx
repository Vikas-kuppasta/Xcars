import React from 'react'
import { assets } from '../assets/assets'

function Banner() {
    return (
        <main className='bg-gradient-to-br from-gray-700 via-gray-300 to-gray-700 md:py-3 px-4 lg:py-6 lg:px-6'>

        <div className='flex flex-col gap-10 md:flex md:flex-row justify-between  items-center md:gap-8 rounded-xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 px-7 py-7 md:px-6 md:py-15'>
            
            <div className='flex flex-col md:text-sm lg:text-md  text-white'>

             <h1 className='text-3xl lg:text-4xl font-medium mb-3'>Do You Own a Luxury Car?</h1>
             <p>Monetize your vehicle effortlessly by listing it on CarRental.</p>
             <p className='mt-1 mb-1'>We take care of insurance, driver verification and secure payments — so</p>
             <p>you can earn passive income, stress-free.</p>

             <button className='text-sm w-35 rounded-xl mt-3 outline-0  text-blue-500 bg-white py-2 px-3'>
                List your car
             </button>

            </div>

            <div>
                <img className='h-25 md:h-30 lg:h-48' src={assets.banner_car_image} alt="" />
            </div>
        </div>
        </main>
    )
}

export default Banner
