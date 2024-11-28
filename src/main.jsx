import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Ourwork from './components/Our work.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import TestimonialCarousel from './components/Testimonial.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/ourwork' element={<Ourwork/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/testimonial' element={<TestimonialCarousel/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
