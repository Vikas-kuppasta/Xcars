import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import { IoIosArrowBack } from "react-icons/io";
function CarDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cardetail, setCar] = useState(null)

    useEffect(() => {
        setCar(dummyCarData.find(cardetails => cardetails._id === id))
    }, [id])
    return cardetail ? (
        <main className='px-4 py-5  '>
            <button onClick={() => { navigate(-1) }} className='flex mb-8 text-white bg-gradient-to-tl from-gray-700 via-gray-500 to-gray-700 outline-1 outline-offset-0 items-center justify-center px-3 py-1 rounded-md   gap-2' >
                <IoIosArrowBack className='text-white' />
                back to all cars
            </button>

            <div className='grid grid-cols-1 gap-0 lg:grid  lg:grid-cols-3 lg:gap-x-8'>

                {/* left side img and details */}
                <div className='col-span-2'>

                    <div className='flex flex-col gap-6'>
                        <img src={cardetail.image} className='w-full max-h-100 rounded-md shadow-gray-300 shadow-md' alt="" />
                        <div className='flex flex-col '>
                            <p className='text-4xl font-semibold'>{cardetail.brand} {cardetail.model}</p>
                            <p className='text-gray-800'>{cardetail.category} {cardetail.year}</p>
                        </div>

                    </div>

                    <div className='border-t-2 border-solid border-amber-200  py-6 mt-4 flex flex-col gap-7'>

                        <div className='grid grid-cols-1 lg:grid lg:grid-cols-4 gap-4'>
                            <div className='flex flex-col items-center justify-center outline-1 outline-offset-0 outline-white bg-gradient-to-tl from-gray-600 via-gray-300 to-gray-600 w-auto p-4 gap-2 rounded-md'>
                                <img src={assets.users_icon} className='h-5 w-5' alt="" />
                                <p>{cardetail.seating_capacity} Seats</p>
                            </div>
                            <div className='flex flex-col items-center justify-center  outline-1 outline-offset-0 outline-white bg-gradient-to-tl from-gray-600 via-gray-300 to-gray-600 p-4 gap-2 rounded-md'>
                                <img src={assets.fuel_icon} className='h-5 w-5' alt="" />
                                <p>{cardetail.fuel_type}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center  outline-1 outline-offset-0 outline-white bg-gradient-to-tl from-gray-600 via-gray-300 to-gray-600 p-4 gap-2 rounded-md'>
                                <img src={assets.car_icon} className='h-5 w-5' alt="" />
                                <p>{cardetail.transmission} </p>
                            </div>
                            <div className='flex flex-col items-center justify-center  outline-1 outline-offset-0 outline-white bg-gradient-to-tl from-gray-600 via-gray-300 to-gray-600 p-4 gap-2 rounded-md'>
                                <img src={assets.users_icon} className='h-5 w-5' alt="" />
                                <p>{cardetail.location} </p>
                            </div>

                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl md:text-2xl font-medium '>Description</h1>
                            <p className='text-gray-800 text-sm'>{cardetail.description}</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl md:text-2xl font-medium'>Features</h1>
                            <div className='grid grid-cols-2 gap-5'>

                                <div className='flex items-center gap-2'>
                                    <img src={assets.check_icon} alt="" />
                                    <p className='text-sm font-medium'>360 Camera</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={assets.check_icon} alt="" />
                                    <p className='text-sm font-medium'>Bluetooth</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={assets.check_icon} alt="" />
                                    <p className='text-sm font-medium'>GPS</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={assets.check_icon} alt="" />
                                    <p className='text-sm font-medium'>Heated Seats</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={assets.check_icon} alt="" />
                                    <p className='text-sm font-medium'>Rear View Mirror</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* right side details */}

                <form className='mt-15 lg:mt-0 h-max space-y-6 top-18 bg-white sticky  px-6 py-4 rounded-lg shadow-xl '>
                    <p className='flex items-center text-2xl font-medium justify-between'>$ {cardetail.pricePerDay} <span className='text-gray-500 text-lg'>per day</span></p>


                    <div className='flex flex-col gap-6 border-t-1 border-solid border-gray-300 py-2'>

                        <div className='md:flex flex-col gap-1'>
                            <label htmlFor="pickup-date" className='text-gray-400 text-lg'>Pickup Date</label>
                            <input type="date" className='w-full outline-0 border-2 text-gray-400 border-solid border-gray-500 px-1 py-2 rounded-lg' id="pickup-date" min={new Date().toISOString().split('T')[0]} required />
                        </div>

                        <div className='md:flex flex-col gap-1'>
                            <label htmlFor="return-date" className='text-gray-400 text-lg'>Return Date</label>
                            <input type="date" className='w-full outline-0 border-2 border-solid border-gray-500 px-1 py-2 text-gray-400 rounded-lg' id="return-date" required />
                        </div>

                    </div>

                    <button className='flex items-center justify-center font-medium rounded-lg text-white w-full py-2 bg-blue-600'>
                        Book Now
                    </button>

                    <p className='text-gray-400 text-center'>No credit card required to reserve</p>

                </form>

            </div>


        </main>
    ) : <p>Loading ...</p>
}

export default CarDetails
