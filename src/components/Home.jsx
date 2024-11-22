import React from 'react';
import img from "../assets/about.png"
import 'animate.css';
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"
import logo3 from "../assets/logo3.jpg"
import logo4 from "../assets/logo4.jpg"
import logo5 from "../assets/logo5.jpg"
import logo6 from "../assets/logo6.jpg"
import logo7 from "../assets/logo7.jpg"
import logo8 from "../assets/logo8.jpg"
import logo9 from "../assets/logo9.jpg"
import logo10 from "../assets/logo10.jpg"
import logo11 from "../assets/logo11.jpg"
import logo12 from "../assets/logo12.jpg"
import logo13 from "../assets/logo13.jpg"
import logo14 from "../assets/logo14.jpg"
import logo15 from "../assets/logo15.jpg"
import logo16 from "../assets/logo16.jpg"
import Slider from './Slider';
import Contact from './Contact';
import Home1jsx from './Home1';
import hut from '../assets/hut.png'
import stone from '../assets/stone.png'
import Animation from './Animation';

const Home = () => {
  
    const clients = [
        { name: 'Jio', logo: logo1 },
        { name: 'Sun Group', logo: logo2 },
        { name: 'Zee Tamil', logo: logo3 },
        { name: 'Vedanta', logo: logo4 },
        { name: 'Tata International', logo: logo5 },
        { name: 'Viacom 18', logo: logo6 },
        { name: 'Puneri Paltan', logo: logo7 },
        { name: 'Chennaiyin FC', logo: logo8 },
        { name: 'Rajasthan Royals', logo: logo9 },
        { name: 'Sunrisers', logo: logo10 },
        { name: 'Mumbai City FC', logo: logo11 },
        { name: 'UTT', logo: logo12 },
        { name: 'Avendus', logo: logo13 },
        { name: 'CRISIL', logo: logo14},
        { name: 'Spark Capital', logo: logo15 },
        { name: 'Greater Pacific', logo: logo16 },
      ];

  return (
    <>
<Home1jsx/>
    <div className="bg-white p-6 md:p-10 lg:p-16 text-black">
      {/* Title */}
      <div className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase">The Watworx Story</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-semibold font-serif">
            No resources? No experience? No clients? No portfolio? No problem!
          </h2>
          <p className='font-serif'>
            <strong>Chennai:</strong> A hot summer day, a flat tyre and a long chat was the lethal concoction that killed our jobs and mothered TING! Two offices: one in Chennai and the other one in Mumbai, our laptops, and the friendship and faith we had built in MICA is the foundation of our passion, our work, our agency; TING.
          </p>
          <p className='font-serif'>
            Ten years later, we can say that the journey has been nothing but phenomenal. What started out as an Advertising agency soon became a space where we worked on anything and everything digital.
          </p>
          <p className='font-serif'>
            We soon evolved within the digital space and ventured into social media marketing and our taste of the digital world has been quite rewarding so far!
          </p>

          <h2 className="text-2xl font-semibold font-serif">house of tingdom</h2>
          <p className='font-serif'>
            On February 18th, we fell in love with our new home, right in the heart of Fort, Mumbai. Come say hello and while you’re at it, put us up on your Instagram, ‘cos why not?
          </p>
          <p className='font-serif'>
            Since then, 2 new houses have come into being.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={hut} // Replace with the path to the image you want to use
            alt="Ting Office"
            className="rounded-lg shadow-lg w-full max-w-sm lg:max-w-md h-2/3" />
        </div>
      </div>
    </div>

<div className="p-8 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-5xl font-extrabold mb-6 text-gray-900 animate__animated animate__fadeIn animate__delay-1s font-serif">
      Some things we do...
    </h1>

    {/* We've got goss section */}
    <div className="md:flex md:justify-between">
      <div className="bg-[#ff9933]  p-6 rounded-md mb-6 md:mb-0 md:w-1/2 animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-4xl font-bold mb-2 text-gray-800 font-serif">we've got goss!</h2>
        <p className="text-lg text-gray-700 font-serif">
          You know that flying high feels? Well, well - KLM and Air France have given us their boarding pass.
        </p>
        <p className="text-lg text-gray-700 mt-4 font-serif">
          As if the Sun group didn't have enough yellow, they hired some more.
        </p>
      </div>

      {/* Award Winning section */}
      <div className="border-2 border-dotted border-gray-300 p-6 rounded-md md:w-1/2 md:ml-6 animate__animated animate__fadeIn animate__delay-2s">
  <p className="text-lg text-gray-700 mb-4 font-serif">
    This one's for you, our future clients, 'Cos if we didn't win any, how would we start our introduction with
    <span className="bg-[#ff9933] font-bold"> "Award winning agency..."</span>
  </p>
  <div className="flex space-x-4">
    <img
      src={stone}
      alt="Award 1"
      className="w-40 mt-4 animate__animated animate__bounceIn"/>
    <img
      src={stone}
      alt="Award 2"
      className="w-40 mt-4 animate__animated animate__bounceIn" />
  </div>
</div>

    </div>

    {/* About Us Section */}
    <div className="mt-10 space-y-8 md:flex md:space-x-8">
  {/* Left Section with Images in Vertical Layout */}
  <div className="w-full md:max-w-sm mx-auto animate__animated animate__fadeIn animate__delay-2s space-y-4">
    {/* First Image */}
    <div className="animate__animated animate__fadeIn animate__delay-4s">
      <img
        src={img}
        alt="Work in Action 1"
        className="w-4/5 h-48 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500" />
    </div>

    {/* Second Image */}
    <div className="animate__animated animate__fadeIn animate__delay-4s">
      <img
        src="https://www.ting.in/dist/img/home/aboutusbig.png"
        alt="Work in Action 2"
        className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"/>
    </div>
  </div>

  {/* Right Section - Text Content */}
  <div className="w-full md:w-2/3 mx-auto mt-8 md:mt-0 animate__animated animate__fadeIn animate__delay-3s space-y-8">
    {/* First Text Block */}
    <div>
      <h1 className="text-xl mb-4 font-bold text-gray-900 font-serif">
        If you asked us 5 years ago, to tell you a lil bit about us – it would sound something like this:
      </h1>
      <p className="text-lg text-gray-700 font-serif">
        TING is our flesh and blood. It’s everything we do. Be it from solving one's identity crisis or going digitally mad… we think we cover it all. So throw us a challenge, even if your pet dog needs an urgent makeover, we are up for it.
      </p>
    </div>

    {/* Second Text Block */}
    <div>
      <h1 className="text-xl mb-4 font-bold text-gray-900 font-serif">
        But since classy is the new quirky, our answer now sounds somewhat like this:
      </h1>
      <p className="text-lg text-gray-700 font-serif">
        For now, we are a fully integrated digital and creative agency with a few gold medalists and an MBA leading a team of 500+ offering core services like digital marketing, website design and development, branding, ATL, BTL, videography, and more.
      </p>
    </div>
  </div>
</div>


  </div>
</div>

<div className="px-4 py-8 max-w-6xl mx-auto bg-white">
      <h1 className="text-2xl font-bold text-center text-black mb-6 font-serif ">
        The ones responsible for selling things you don't want to buy
      </h1>

     
      <div className="flex gap-6 justify-center mt-20">
  {/* Image 1 */}
  <div className="w-1/5">
    <img
      src="https://www.ting.in/dist/img/home/sudi.jpg"
      alt="Product 1"
      className="w-full h-auto rounded-lg shadow-lg object-cover"/>
    <div className="bg-[#ff9933] text-black font-bold text-center py-2 rounded-b-lg mt-2">
      <h3>Sudi</h3>
    </div>
  </div>

  {/* Image 2 */}
  <div className="w-1/5">
    <img
      src="https://www.ting.in/dist/img/home/shruti.jpg"
      alt="Product 2"
      className="w-full h-auto rounded-lg shadow-lg object-cover"  />
    <div className="bg-[#ff9933] text-black font-bold text-center py-2 rounded-b-lg mt-2">
      <h3>Shruti</h3>
    </div>
  </div>

  {/* Image 3 */}
  <div className="w-1/5">
    <img
      src="https://www.ting.in/dist/img/home/manan.jpg"
      alt="Product 3"
      className="w-full h-auto rounded-lg shadow-lg object-cover" />
    <div className="bg-[#ff9933] text-black text-center py-2 rounded-b-lg mt-2 font-bold">
      <h3>Manan</h3>
    </div>
  </div>

  {/* Image 4 */}
  <div className="w-1/5">
    <img
      src="https://www.ting.in/dist/img/home/aadil.jpg"
      alt="Product 4"
      className="w-full h-auto rounded-lg shadow-lg object-cover" />
    <div className="bg-[#ff9933] text-black font-bold text-center py-2 rounded-b-lg mt-2">
      <h3>Aadil</h3>
    </div>
  </div>

  {/* Yellow Background Box */}
  <div className="w-1/5 bg-[#ff9933] p-6 flex items-center justify-center rounded-lg">
    <h1 className="text-center text-lg font-semibold text-black">Meet the other 500</h1>
  </div>
</div>
</div>

<div className="px-6 py-10 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold font-serif">So, we meet again, butter!</h1>
        <p className="text-lg font-serif">Let's take a moment to thank our dear clients</p>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center border border-gray-200">
            <img src={client.logo} alt={client.name} className="h-16 w-auto" />
          </div>
        ))}
      </div>
    </div>

<Slider/>
<Animation/>
<Contact/>
    </>
  );
};

export default Home;
