import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaCheck } from "react-icons/fa";

function Addcar() {

    const[image, setimage]=useState(null)
    const[car, setcar] = useState({
        brand:'',
        model:'',
        year:0,
        pricePerDay:0,
        category:'',
        transmission:'',
        fuel_type:'',
        seating_capacity:0,
        location: '',
        description:'',
    })

    return (
        <main className='py-4 px-4 md:py-10 md:px-10  '>
            <div className='text-left flex flex-col gap-3 w-full '>
                <h1 className='text-black text-3xl md:text-4xl font-semibold'>Add New Car</h1>
                <p className='text-gray-400  text-sm md:text-lg '>Fill in details to list a new car for booking, including pricing, availability, and car specifications.</p>
            </div>

            <form className='py-4 flex flex-col gap-y-4'>
                <div className='flex gap-2 items-center '>
                    <label htmlFor="car-image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 ' />
                        <input type="file" id='car-image' accept='image/*' hidden onChange={e=>setimage(e.target.files[0])} />
                    </label>
                    <p>Upload a picture of your car</p>
                </div>

                {/* car detailes */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 '>
                    <div className='flex flex-col w-full'>
                        <label>Brand</label>
                        <input type="text" placeholder='e.g BMW, Mercedes ,Audi...' className='py-1 px-2 mt-1 rounded-md border border-gray-200 borer-solid outline-none'required value={car.brand} onChange={e=> setcar({...car,model:e.target.value})} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Model</label>
                        <input type="text" placeholder='e.g X5, E-Class,M4...' className='py-1 px-2 mt-1 rounded-md outline-none border border-solid border-gray-200'required value={car.model} onChange={e=> setcar({...car,model:e.target.value})} />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-2'>
                    <div className='flex flex-col w-full'>
                        <label>Year</label>
                        <input type="text" placeholder='0' className='py-1 px-2 mt-1 rounded-md border border-gray-200 borer-solid outline-none'required value={car.year} onChange={e=> setcar({...car,year:e.target.value})} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Daily Price $</label>
                        <input type="text" placeholder='0' className='py-1 px-2 mt-1 rounded-md border border-gray-200 borer-solid outline-none'required value={car.pricePerDay} onChange={e=> setcar({...car,pricePerDay:e.target.value})} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Category</label>
                        <select className='border border-solid border-gray-300 py-1 px-2 mt-1 rounded-md outline-none'onChange={e=>setcar({...car,category:e.target.value})}>
                            <option value="">Select a category</option>
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Transmission</label>
                        <select className='border border-solid border-gray-300 py-1 px-2 mt-1 rounded-md outline-none'onChange={e=>setcar({...car,transmission:e.target.value})}>
                            <option value="">Select a transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                            <option value="Semi-automatic">Semi-automatic</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Fuel type</label>
                        <select className='border border-solid border-gray-300 py-1 px-2 mt-1 rounded-md outline-none'onChange={e=>setcar({...car,fuel_type:e.target.value})}>
                            <option value="">Select a fuel type</option>
                            <option value="Gas">Gas</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Seating Capacity</label>
                        <input type="text" placeholder='0' className='py-1 px-2 mt-1 rounded-md border border-gray-200 borer-solid outline-none'required value={car.year} onChange={e=> setcar({...car,seating_capacity:e.target.value})} />
                    </div>

                </div>
                <div className='grid grid-cols-1 gap-y-2'>
                    <div className='flex flex-col w-full'>
                        <label>Location</label>
                        <select className='border border-solid border-gray-300 py-1 px-2 mt-1 rounded-md outline-none'value={car.location} onChange={e=>setcar({...car,location:e.target.value})}>
                            <option value="">Select a Location</option>
                            <option value="New York">New York</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Los Angles">Los Angles</option>
                            <option value="Houstan">Houstan</option>
                        </select>                        
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Descriptive</label>
                        <textarea rows={5} placeholder='e.g A luxurious SUV with a spacious interior and a powerful engine' className='py-1  px-2 mt-1 rounded-md border border-gray-200 borer-solid outline-none'required value={car.description} onChange={e=> setcar({...car,description:e.target.value})} ></textarea>
                    </div>
                </div>
                <button className='py-2 px-4 w-max flex items-center gap-2 outline-none text-sm rounded-md text-white bg-blue-600 mt-2 '> <FaCheck /> List Your Car</button>
            </form>
        </main>
    )
}

export default Addcar
