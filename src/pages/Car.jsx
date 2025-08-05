import React, { useState } from 'react'
import Title from '../components/Title'
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { dummyCarData } from '../assets/assets';
import Carcards from '../components/Carcards'
function Car() {
    const [input ,setinput] = useState('');
    const filteredCar = dummyCarData.filter(car => car.brand.toLowerCase().includes(input.toLowerCase()))
    return (
    

    <main className='bg-gradient-to-tl px-4 from-gray-700 via-gray-500  to-gray-700'>
        <div className=' py-10 md:py-16'>
            <div className='flex flex-col items-center justify-center gap-8'>
                {/* <Title title='Available Cars' subtitle='Browse our selection of premium vehicles available for your next adventure'/> */}
                <div>

                <h1 className='text-4xl md:text-5xl font-medium text-center mb-2'>Available Cars</h1>
                <p className='text-white text-sm text-center md:text-lg'>Browse our selection of premium vehicles available for your next adventure</p>
                </div>

                <div className='flex items-center justify-between w-72  md:w-120 lg:w-140 border-1 px-2 py-2 rounded-full border-solid border-white'>
                    <FaSearch className='w-6 h-6 text-white'/>
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setinput(e.target.value)} 
                        placeholder='Search by make, model or features' 
                        className='w-full text-white text-sm h-full outline-0 ml-2'
                    />
                    <CiFilter className='w-6 h-6 text-white' />
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10  py-5 px-4'>
            {
                filteredCar.map(car =>(
                    
                    <Carcards key={car._id} car={car}/>
                ))
            }

        </div>


        </main>
      

        
    )
}

export default Car
