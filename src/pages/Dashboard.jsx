import React from 'react'
import Title from '../components/Title'
import { useState } from 'react'
import { useEffect } from 'react'
import { assets, dummyDashboardData } from '../assets/assets'

function Dashboard() {
    const [data, setdata] = useState({
        totalCars:0,
        totalbookings:0,
        pendingBookings:0,
        completedBookings:0,
        recentBookings:[],
        monthlyRevenue:0,

    })
    const dashboardcars = [
        {title:"Total Cars",value:data.totalCars,icon: assets.carIconColored},
        {title:"Total Bookings",value:data.totalbookings,icon:assets.listIconColored},
        {title:"Pending",value:data.pendingBookings,icon:assets.cautionIconColored},
        {title:"Confirmed",value:data.totalCars,icon:assets.listIconColored},
    ]

    useEffect(()=>{
        setdata(dummyDashboardData);
    },[])

    return (
        

        <main className='h-full border-solid border-l-1 border-l-gray-400 px-4 py-5 md:py-10 md:px-10 md:h-screen w-full'>
            <div className='text-left flex flex-col gap-3 md:w-full '>
                <h1 className='text-black text-3xl md:text-4xl font-semibold'>Admin Dashboard</h1>
                <p className='text-gray-400  text-sm md:text-lg '>Monitor overall platform performance including total cars, bookings, revenue, and recent activities</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 py-6 '>
                {dashboardcars.map((card,op1)=>(
                    <div key={op1} className='flex gap-2 items-center justify-between p-2 md:p-2  border-solid border-1 border-gray-300 rounded-md'>
                        <div>
                            <h1>{card.title}</h1>
                            <p>{card.value}</p>
                        </div>
                        <img src={card.icon} alt="" />
                    </div>
                ))}
            </div>

            <div className='max-md:flex-col flex gap-2'>
                {/* recent bookings  */}
                <div className='border-solid border-2 border-gray-200 rounded-md p-4 md:w-md'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-2xl font-medium'>Recent Bookings</h1>
                        <p className='text-md'>Latest customer bookings </p>
                    </div>
                    <div className='mt-4'>
                        {data.recentBookings.map((bookings,op5)=>(
                            <div key={op5} className='flex justify-between mt-2'>
                                <div className='flex gap-2 items-center'>
                                    <img src={assets.listIconColored} className='md:h-5 md:w-5' alt="" />
                                    <div className='flex flex-col '>
                                        <p className='text-sm md:text-md font-medium'>{bookings.car.brand} {bookings.car.model}</p> 
                                        <p className='max-md:hidden'>2025-6-20</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <h1 className='text-sm'>$840</h1>
                                    <p className='max-md:px-1 text-sm bg-green-100 text-green-400 border-solid  py-2 px-3 rounded-full'>Confirmed</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* monthly revenue  */}
                <div className='border-solid border-2 border-gray-200 rounded-md p-4 md:w-md'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-2xl font-medium'>Monthly Revenue</h1>
                        <p className='text-md'>Revenue for current month</p>
                    </div>                        
                </div>
            </div>


        </main>
    )
}

export default Dashboard
