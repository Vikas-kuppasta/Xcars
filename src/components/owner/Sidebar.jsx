import React from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {
    const location = useLocation();
    const[image,setimage] = useState('')
    const user = dummyUserData
    const updateimage = async()=>{
        user.image = URL.createObjectURL(image)
        setimage('')
    }
    return (
        <div className='min-w-13  md:min-w-60 relative pt-8 border-solid border-r-1 border-r-gray-400 flex flex-col items-center  '>
            <div className='group relative '>
                <label htmlFor="image">
                    <img className='w-8 h-8 md:w-14 md:h-14 rounded-full' src={image ? URL.createObjectURL(image) : user?.image || "https://randomuser.me/api/portraits/men/55.jpg" } alt="" />
                    <input type='file' id='image' accept='image/*  'hidden onChange={()=>setimage(e.target.files[0])} />
                    <div className='h-14 w-14 absolute hidden top-0 right-0 left-0 bottom-0
                    bg-gray-200 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
                        <img src={assets.edit_icon} alt="" />
                    </div>
                </label>
            </div>
            {image && (
                <button className='absolute top-0  right-0 flex p-2 gap-1 bg-red-200 cursor-pointer'  onChange={updateimage}>Save{assets.check_icon}</button>
            )}
            <p className='max-md:text-sm'>Aditro</p>

        <div className='w-full'>
            {ownerMenuLinks.map((linkss, op6) => (
                <NavLink key={op6} to={linkss.path} className={`relative flex items-center gap-2 pl-1 w-full py-3 md:pl-4 first:mt-6 ${linkss.path===location.pathname? 'bg-blue-100':'text-gray-400'}`}>
                <div  className='w-full py-1 pl-2 flex items-center gap-2'>
                    <img src={linkss.path === location.pathname ? linkss.coloredIcon:linkss.icon} alt={linkss.name} />
                    <span className='max-md:hidden'>{linkss.name}</span>
                    <div className={`${linkss.path === location.pathname && 'bg-blue-500'} w-1.5 h-8 rounded-l right-0 absolute`}></div>
                </div>
                </NavLink>
            ))}
</div>
  

        </div>
    )
}

export default Sidebar
