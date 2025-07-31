import React from 'react'
import Banner from './Banner'
import Testimonialcard from '../components/Testimonialcard'
import Title from '../components/Title'
import { assets, reviews } from '../assets/assets'

function Testimonialpage() {
    return (
        <main className='bg-white px-4 py-15 flex flex-col justify-center items-center gap-10'>
            <Title title='What Our Customers Say' subtitle='Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.'/>
            <div className='grid grid-rows-1 md:grid md:grid-cols-2 gap-5'>
                {reviews.map((Customersreview)=>(
                    <div key={Customersreview.id}>

                        <Testimonialcard Customersreview={Customersreview} />
                    </div>

                ))}

            </div>
        </main>
    )
}

export default Testimonialpage
