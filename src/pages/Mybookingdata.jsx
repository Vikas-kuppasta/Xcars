import React, { useEffect, useState } from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets';
import Title from '../components/Title';

function Mybookingdata() {

    const [bookings , setbookings] = useState([]);
    const fetchbookingdata = async()=>{
        setbookings(dummyMyBookingsData)

    }

    useEffect(()=>{
        fetchbookingdata();
    },[])

    return (
        <main className='px-4 py-4'>
            <div className=' flex flex-col gap-3 '>
                <h1 className='text-black text-3xl md:text-5xl font-semibold'>My Bookings</h1>
                <p className='text-gray-200 text-sm md:text-lg '>View and manage your all car bookings</p>
            </div>

            <div>
            {bookings.map((booking ,index)=>(
                <div key={booking.id} className='grid bg-white grid-cols-4 gap-5 shadow-black rounded-md p-2 shadow-md mt-3'>
                    <div className='p-1 '>
                        <img className='w-full object-cover h-48 rounded-md' src={booking.car.image} alt="" />
                        <span className='text-2xl font-medium '>{booking.car.brand}</span>
                        <p className='text-sm mt-2'>{booking.car.year} • {booking.car.model} • {booking.car.location}</p>
                    </div>
                    <div className=' flex flex-col py-2 gap-3 col-span-2'>
                        <div className='flex gap-2'>
                            <div className='px-4 py-1 bg-gray-400 rounded-md'><p>Booking #{index+1}</p></div>
                            <div className={`px-4 text-sm  rounded-full flex items-center justify-center${booking.status=== 'confirmed' ? ' text-green-600 bg-green-200':'text-red-600 bg-red-300'}`}><p>{booking.status}</p></div>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <img className='mt-1 h-4 w-4' src={assets.calendar_icon_colored} alt="" />
                            <div>
                                <p>Rental Period</p>
                                <p>{booking.car.createdAt}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <img className='mt-1 h-4 w-4' src={assets.location_icon_colored} alt="" />
                            <div>
                                <p>Pick-up location</p>
                                <p>{booking.car.location}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex justify-end py-2 mr-2 '>
                        <div className='text-right space-y-1.5'>
                        <p className='text-sm'>Total price</p>
                        <p className='text-2xl text-blue-700 font-medium'>$-{booking.car.pricePerDay}</p>
                        <p className='text-sm'>Booked on {booking.car.createdAt}</p>
                        </div>
                    </div>
                    
                </div>
            ))}
            </div>


        </main>
            
        
    )
}

export default Mybookingdata
