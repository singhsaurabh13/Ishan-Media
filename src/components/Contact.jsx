// Contact.js
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/logo1.jpg"
import logo1 from "../assets/logo2.jpg"
import logo2 from "../assets/logo3.jpg"
import logo3 from "../assets/logo4.jpg"
import logo4 from "../assets/logo5.jpg"
import logo5 from "../assets/logo6.jpg"
import logo6 from "../assets/logo7.jpg"
import logo7 from "../assets/logo8.jpg"
import logo8 from "../assets/logo9.jpg"
import img from "../assets/cycle.png"
function Contact() {
  return (
    <>
    <div className="App font-sans text-center">
      {/* Email Icon (larger and centered) */}

      <div className="flex justify-center py-4 bg-gray-100">
        <a href="mailto:your-email@example.com" title="Email" className="text-gray-700 hover:text-gray-900">
          <FaEnvelope size={32} className="text-3xl"/>
        </a>
      </div>
      {/* Social Media Icons */}

      <div className="flex justify-center space-x-6 py-4 bg-gray-100">
        <a href="https://www.facebook.com" title="Facebook" className="text-gray-700 hover:text-gray-900">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com" title="LinkedIn" className="text-gray-700 hover:text-gray-900">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com" title="Instagram" className="text-gray-700 hover:text-gray-900">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.youtube.com" title="YouTube" className="text-gray-700 hover:text-gray-900">
          <FaYoutube size={24} />
        </a>
      </div>
      {/* Certifications Section */}

      <div className="flex justify-center flex-wrap space-x-4 space-y-2 py-4 bg-white">
        <img src={logo} alt="Certification 1" className="h-12" />
        <img src={logo1} alt="Certification 2" className="h-12" />
        <img src={logo2} alt="Certification 3" className="h-12" />
        <img src={logo3} alt="Certification 4" className="h-12" />
        <img src={logo4} alt="Certification 5" className="h-12" />
        <img src={logo5} alt="Certification 6" className="h-12" />
        <img src={logo6} alt="Certification 6" className="h-12" />
        <img src={logo7} alt="Certification 6" className="h-12" />
        <img src={logo8} alt="Certification 6" className="h-12" />
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
  <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 font-serif">
      Enquiry Form
    </h1>
    <form>
      {/* Name Field */}
      <div className="mb-5">
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Phone Field */}
      <div className="mb-5">
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Message Field */}
      <div className="mb-5">
        <textarea
          id="message"
          rows="4"
          placeholder="Your Message"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 shadow-lg transition-all duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>


      {/* Celebration Section */}
      <div className="py-8 bg-[#26bcb3]  border-t-8 border-b-8 border-[#add45d]">
      <h2 className="text-4xl text-black font-bold mb-4 font-serif">Celebrating 15 Years of Watworx:</h2>
      <div className="flex justify-center items-center bg-white">
        {/* Replace this with the actual celebration image */}
        <img
          src={img} // Use your actual image source here
          alt="Celebration Illustration"
          className="w-full max-w-4xl slide-in-left" />
      </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
