import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { FaSearch } from "react-icons/fa";


function Herosection() {
    const [pickupLocation , SetpickupLocation] = useState('');
    return (
        <main className='flex flex-col mt-5 items-center md:overflow-x-hidden justify-center px-4 gap-10 md:flex  md:flex-col md:h-screen md:items-center md:justify-center md:gap-14 md:px-4'>
            <h1 className=' text-2xl font-medium md:text-5xl md:font-medium '>Luxury cars on Rent</h1>
            <form action="" className='flex flex-col  items-center justify-center gap-8 rounded-md py-10 px-8 md:flex md:flex-row md:justify-between md:items-center  text-white bg-gradient-to-tl from-gray-600 via-gray-500 to-gray-600 outline-1 outline-offset-0 md:py-8 md:px-6 md:rounded-full md:gap-20 '>

            <div className=' flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:gap-20 '>

                <div className='flex flex-col  md:flex md:flex-col md:items-start md:gap-2'>
                    <select required value={pickupLocation} className='' onChange={(e)=>SetpickupLocation(e.target.value)}>
                     <option className='text-black' value=''>Pickup Location</option>
                     {cityList.map((city)=> <option className='text-black' key={city} value={city} >{city}</option>)}
                    </select>
                    <p className='px-1'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
                    </div>

                <div className='md:flex flex-col gap-2'>
                    <label htmlFor="pickup-date">Pickup Date</label>
                    <input type="date" className='text-sm' id="pickup-date" min={new Date().toISOString().split('T')[0]} required/>
                </div>

                <div className='md:flex flex-col gap-2'>
                    <label htmlFor="return-date">Return Date</label>
                    <input type="date" className='text-sm'  id="return-date" required />
                </div>
                
                </div>
                <button className='flex items-center justify-center gap-4 w-30 rounded-sm py-1 md:flex md:flex-row md:gap-3  md:items-center md:px-6 md:py-3 outline-1 outline-offset-0 md:rounded-xl bg-blue-600 text-white '>
                    <FaSearch />
                    Search
                </button>

            </form>
            <img src={assets.main_car} className=' md:max-h-74' alt="" />
            
            

        </main>
    )
}

export default Herosection
