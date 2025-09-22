import React from 'react'
import { Link } from 'react-router-dom'
import { dummyUserData } from '../../assets/assets'

function Navowner() {
    const user = dummyUserData
    return (
        <main className='py-2 border-b-1 border-solid border-b-gray-400 flex justify-between items-center px-3 '>
            
            <Link to='/'>
            <img src="logo5.png" className='h-10 w-10 md:h-16 md:w-17' alt="" />
            </Link>
            <p className='text-md md:text-xl'>Welcome,{user.name || "owner"}</p>
        </main>
    )
}

export default Navowner
