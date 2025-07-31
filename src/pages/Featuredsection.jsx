import React from 'react'
import Carcards from '../components/Carcards'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import Banner from './Banner'
import Testimonialcard from '../components/Testimonialcard'

function Featuredsection() {
    return (
        <main className='bg-white py-20  px-4 flex flex-col items-center justify-center gap-20'>
            <div>
                <Title title='Featured Vehicles' subtitle='Explore our selection of premium vehicles available for your next adventure.'/>
            </div>

            <div className='grid grid-rows-1 md:grid md:grid-cols-2 gap-y-10 gap-x-5'>
                {
                    dummyCarData.slice(0,6).map((car)=>(
                    <div key={car._id}>
                        <Carcards car={car}/>
                    </div>
                    ))
                }
                </div>
                <button className='text-gray-600 border-1 border-solid border-gray-500 flex items-center gap-4 px-3 py-2'>
                    Explore more cars <img src={assets.arrow_icon} alt="" />
                    </button>

            



        </main>
    )
}

export default Featuredsection
