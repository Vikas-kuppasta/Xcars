import React from 'react'
import { assets } from '../assets/assets'

function Testimonialcard({Customersreview}) {
    return (
        <main className='flex flex-col gap-4 py-13 px-7 rounded-md  shadow-md w-80'>
            <div className='flex flex-row gap-7 items-center '>
                <img className='h-10 rounded-full' src={Customersreview.image} alt="" />

                <div className='flex flex-col '>
                    <h1 className='text-xl text-black'>{Customersreview.name}</h1>
                    <p className='text-gray-600'>{Customersreview.location}</p>
                </div>



            </div>
                <div className='flex gap-2'>
                    <img src={assets.star_icon} alt="" />
                    <img src={assets.star_icon} alt="" />
                    <img src={assets.star_icon} alt="" />
                    <img src={assets.star_icon} alt="" />
                    <img src={assets.star_icon} alt="" />
                </div>
                <div>
                    <p className='text-gray-500  '>{Customersreview.review}</p>
                </div>
        </main>
    )
}

export default Testimonialcard
