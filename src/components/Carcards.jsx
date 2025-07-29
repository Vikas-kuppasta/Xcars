import React from 'react'
import { assets } from '../assets/assets'

function Carcards({car}) {
    return (
        <main className='rounded-xl overflow-hidden shadow-xl '>
            <div className='relative h-50 overflow-hidden'>
                <img className='object-cover w-full h-full ' src={car.image} alt="" />
                <p className='bg-blue-600 absolute text-sm top-2 left-2 px-2 py-1 rounded-full text-amber-50'>Available Now</p>
                <p className='bg-black py-2 px-4 absolute bottom-4 rounded-xl right-4 text-amber-50'>$300/day</p>

            </div>

            <div className='p-4'>
                <div className='flex flex-col gap-1 items-start mb-2'>

                <div className='flex items-center gap-2'>
                    <h3 className='text-black font-medium text-xl'>{car.brand}</h3>
                    <span className='text-black font-medium text-xl'>{car.model}</span>
                </div>
                <p className='text-black text-sm'>{car.category}:{car.year}</p>

                </div>
                <div className='grid grid-cols-2 gap-y-4 text-gray-600'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.users_icon} className='h-4' alt="" />
                        <p className=''>{car.seating_capacity}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.fuel_icon} className='h-4' alt="" />
                        <p className=''>{car.fuel_type}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.car_icon} className='h-4' alt="" />
                        <p className=''>{car.transmission}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.location_icon} className='h-4' alt="" />
                        <p className=''>{car.location}</p>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Carcards
