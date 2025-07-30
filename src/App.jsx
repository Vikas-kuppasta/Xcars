import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Car from './pages/Car'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
