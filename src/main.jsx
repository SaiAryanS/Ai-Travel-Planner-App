import { StrictMode   } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
// import createtrip from './create-trip/create-trip.jsx'
import Createtrip from './create-trip/index.jsx'
import Header from './components/custom/Header'
import { Toaster } from 'sonner'
const router = createBrowserRouter([
  {
    path: '/', 
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<Createtrip/>

  }
])

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Header/>
    <Toaster />
    <RouterProvider router = {router} />
  </React.StrictMode>

)
