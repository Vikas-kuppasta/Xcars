import React from 'react'
import Navowner from '../components/owner/Navowner'
import Sidebar from '../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className=' bg-white flex flex-col'>
            <Navowner/>
        <div className='flex '>
            <Sidebar/>
            <Outlet/>
        </div>    

        </div>
    )
}

export default Layout

