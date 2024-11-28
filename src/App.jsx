import { useEffect } from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  let location=useLocation()

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },[location.pathname])
  
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
