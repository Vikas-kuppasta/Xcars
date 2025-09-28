import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, useLocation } from 'react-router-dom'

import Home from './components/Home'
import Car from './pages/Car'
import Footer from './components/Footer'
import Carcards from './components/Carcards'
import CarDetails from './pages/CarDetails'
import Mybookingdata from './pages/Mybookingdata'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Managecars from './pages/Managecars'
import Managebookings from './pages/managebookings'
import Addcar from './pages/Addcar'



function App() {
  
const isOwnerpath = useLocation().pathname.startsWith('/owner')


  return (
    <>
    {!isOwnerpath &&<Navbar/>}
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/cars' element={<Car/>} />
      <Route path='/car-details/:id' element={<CarDetails/>}/>
      <Route path='/my-bookings' element={<Mybookingdata/>}/>

      <Route path='/owner' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='add-car'element={<Addcar/>}/>
      <Route path='manage-cars'element={<Managecars/>}/>
      <Route path='manage-bookings'element={<Managebookings/>}/>
      </Route>

      

    </Routes>
    {!isOwnerpath &&<Footer/>}
    </>
  )
}

export default App
