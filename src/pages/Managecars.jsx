import React, { useEffect } from 'react'
import { useState } from 'react'
import { assets, dummyCarData } from '../assets/assets';

function Managecars() {
    const[cars ,setCar] = useState([]);

    const fetchedbookingdata = async()=>{
        setCar(dummyCarData);
    }
    useEffect(()=>{
        fetchedbookingdata();
    },[])

    return (
      <main className='py-4 px-4 md:py-10 md:px-10 h-screen'>
            <div className='md:text-left  flex flex-col gap-3  '>
                <h1 className='text-black text-3xl md:text-4xl font-semibold'>Manage Cars</h1>
                <p className='text-gray-400  text-sm md:text-lg '>View all listed cars, update their details, or remove them from the booking platform.</p>
            </div>

            <div className='max-xl:hidden mt-6 w-full border-solid border-1 border-gray-400 rounded-md overflow-x-auto'>
                <table className=' w-full text-left min-w-[600px]'>
                    <thead>
                    <tr className='  '>
                        <th className='p-3 '>Car</th>
                        <th className='p-3'>Category</th>
                        <th className='p-3'>Price</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cars.slice(0,4).map((car , index)=>(
                            <tr className=' border-t-gray-400 border-t-1' key={index}>
                                <td className='p-3 flex items-center gap-4 '>
                                    <img src={car.image} className='h-12 w-12 aspect-square rounded-md object-cover' alt="" />
                                    <div className='flex flex-col'>
                                        <p className='font-medium'>{car.brand} {car.model}</p>
                                        <p className='text-sm'>{car.seating_capacity} {car.transmission}</p>
                                    </div>
                                </td>
                                <td className='p-3'>{car.model}</td>
                                <td className='p-3'>{car.pricePerDay}/day</td>
                                <td className='p-3'>
                                    <span className={`px-3 py-1 rounded-full    ${car.isAvailable? 'bg-green-300 text-green-700':'bg-red-400 text-red-700'}`}>{car.isAvailable? "Available":"Unavailable"}</span>
                                </td>
                                <td className='p-3 flex items-center'>
                                    <img src={car.isAvailable? assets.eye_close_icon : assets.eye_icon} alt="" />
                                    <img src={assets.delete_icon} alt="" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

      </main>
    )
}

export default Managecars
