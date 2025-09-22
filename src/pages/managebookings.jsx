import React from 'react'
import { useState } from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets';
import { useEffect } from 'react';

function Managebookings() {
    const[Managebookings,setBookings] = useState([]);
    const bookingdata = async()=>{
        setBookings(dummyMyBookingsData);
    }
    useEffect(()=>{
        bookingdata();
    },[])

    return (
              <main className='py-4 px-4 md:py-10 md:px-10 h-screen'>
                    <div className='text-left flex flex-col gap-3 w-full '>
                        <h1 className='text-black text-3xl md:text-4xl font-semibold'>Manage Bookings</h1>
                        <p className='text-gray-400  text-sm md:text-lg '>Track all customer bookings, approve or cancel requests, and manage booking statuses.</p>
                    </div>
        
                    <div className='max-xl:hidden mt-6 w-full border-solid border-1 border-gray-400 rounded-md'>
                        <table className='w-full text-left'>
                            <thead>
                            <tr className='  '>
                                <th className='p-3 '>Car</th>
                                <th className='p-3'>Date Range</th>
                                <th className='p-3'>Total</th>
                                <th className='p-3'>Payment</th>
                                <th className='p-3'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {Managebookings.map((bookedcar , index)=>(
                                    <tr className=' border-t-gray-400 border-t-1' key={index}>
                                        <td className='p-3 flex items-center gap-4 '>
                                            <img src={bookedcar.car.image} className='h-12 w-12 aspect-square rounded-md object-cover' alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-medium'>{bookedcar.car.brand} {bookedcar.car.model}</p>

                                            </div>
                                        </td>
                                        <td className='p-3'><p className='text-sm'>{bookedcar.pickupDate} to {bookedcar.returnDate}</p></td>

                                        <td className='p-3'>{bookedcar.price}</td>
                                        <td className='p-3'><p className='px-3 py-1 rounded-md border-1 border-solid border-gray-400'>Offline</p></td>
                                        <td className='p-3'>
                                    <span className={`px-3 py-1 rounded-full    ${bookedcar.status === 'pending'? 'bg-red-200 text-red-700':'bg-green-200 text-green-600'}`}>{bookedcar.status}</span>                                            
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        
              </main>
    )
}

export default Managebookings
