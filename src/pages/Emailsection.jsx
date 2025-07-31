import React from 'react'
import Title from '../components/Title'

function Emailsection() {
    return (
        <main className='bg-white px-4 flex md:flex py-35 flex-col justify-center items-center gap-10 '>
            <Title title='Never Miss a Deal!' subtitle='Subscribe to get the latest offers, new arrivals, and exclusive discounts'/>

            <form className='flex md:flex  border-1 border-solid border-gray-400 rounded-md'>
                <input type="email" className='px-1 md:p-2 md:w-150' placeholder='Enter your email id' required />
                <button className=' text-white  rounded-r-md outline-0 px-1 py-1 md:px-3 bg-blue-600'>Subscribe</button>
            </form>


        </main>
    )
}

export default Emailsection
