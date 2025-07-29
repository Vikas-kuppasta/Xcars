import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Car from './pages/Car'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/cars' element={<Car/>}/>

      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
