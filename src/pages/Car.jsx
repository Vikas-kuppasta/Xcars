import React from 'react'
import Featuredsection from './Featuredsection'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import Carcards from '../components/Carcards'

function Car() {
    return (
        <main className=' py-20  px-4 flex flex-col items-center justify-center gap-20'>

            <div className='text-center flex flex-col gap-3 '>
            <h1 className='text-black text-3xl md:text-5xl font-semibold'>Featured Vehicles</h1>
            <p className='text-white text-sm md:text-lg '>Explore our selection of premium vehicles available for your next adventure.</p>

            </div>

            <div className='grid grid-rows-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5'>
                {
                    dummyCarData.map((car)=>(
                    <div onClick={() =>(navigate('/car-details:id'))} key={car._id}>
                        <Carcards car={car}/>
                    </div>
                    ))
                }
                </div>

        </main>



    )
}

export default Car
