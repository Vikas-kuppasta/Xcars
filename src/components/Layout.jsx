import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
    return (

        <main className=' w-full bg-gradient-to-tl from-gray-950 via-gray-400 to-gray-950'>

            <Navbar/>
            <Outlet/>
            <Footer/>
        </main>
    
        
        
    )
}

export default Layout
