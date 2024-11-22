import React from 'react'
import '../App.css'
import logo from '../assets/logo.png' // Make sure this path is correct

export default function Header() {
  return (
    <>
      <div className="w-full h-20 lg:h-24 flex items-center justify-center bg-[#ff9933]"> {/* Set blue background */}
        <div className="w-full max-w-6xl flex items-center justify-between px-5 lg:px-10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 lg:h-16" /> {/* Logo image */}
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-5 text-black text-sm lg:text-base font-semibold">
                <a href="/">
              <li className="hover:text-gray-700 cursor-pointer">Home</li></a>
              <a href="/ourwork">
              <li className="hover:text-gray-700 cursor-pointer">Our Work</li></a>
              <a href="/service">
              <li className="hover:text-gray-700 cursor-pointer">Services</li></a>
              <a href="/team">
              <li className="hover:text-gray-700 cursor-pointer">Team</li></a>
              <a href="/contact">
              <li className="hover:text-gray-700 cursor-pointer">Contact us</li></a>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-white text-2xl">☰</button> {/* Hamburger menu for mobile */}
          </div>
        </div>
      </div>
    </>
  )
}
