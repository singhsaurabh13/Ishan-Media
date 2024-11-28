import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-700 via-orange-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <h2 className="text-xl font-semibold">Company Name</h2> */}
            <Link to="/"><img src={logo} alt="" /></Link>
            <p className="mt-2 text-sm text-gray-200">
            Delivering unparalleled quality and excellence since 2000. We pride ourselves on exceeding expectations through customer-centric solutions, innovation, and a commitment to creating lasting value.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-10">
            <h3 className="text-lg font-semibold ">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/ourwork" className="text-gray-300 hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300">
                <span className="font-medium">Email:</span> loombaji123@gmail.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Phone:</span> +91 81468 78186
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Address:</span> 123 Street Name,
                City, Country
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Facebook" >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/watworxlive?igsh=cGwwMHk4eGNnd2Fs"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Instagram" >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="LinkedIn" >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div> 
        <Link to="https://techxpert.in/">
          <div className="mt-8 border-t border-gray-500 pt-4 text-center">
            <p className="text-[14px] text-gray-200">
              © {new Date().getFullYear()} Created by TechXpert.
            </p>
          </div>
        </Link>
      </div>
    </footer>
  );
}
