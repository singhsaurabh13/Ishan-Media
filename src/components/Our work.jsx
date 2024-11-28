import React from "react";

const Ourwork = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-black to-blue-900 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="text-center sm:text-left">
        {/* Highlight Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span className="highlight bg-yellow-400 text-black px-2 ">Highlights</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left: Astronaut Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="https://www.ting.in/dist/img/our-work/case-studies/supersonic.jpg"
            alt="Vh1 Supersonic Astronaut"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
            Some 360° magic for India's premier music fest
          </h3>
          <p className="text-lg sm:text-xl text-white mb-6">
            Vh1 Supersonic
          </p>
          <p className="text-sm sm:text-base text-white">
            Branding, Web, ATL, BTL, Digital, Marketing & SEO
          </p>
        </div>
      </div>
    </div>

   <div className="flex flex-col lg:flex-row gap-12 p-8 bg-white">
      {/* First Image Section */}
      <div className="flex flex-col items-center lg:w-1/2">
        <img 
          src="https://www.ting.in/dist/img/our-work/case-studies/max-protien.jpg" 
          alt="First Image" 
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover" 
        />
        <h1 className="text-2xl font-bold text-center mb-2 font-serif">Power upgrade for a power snack</h1>
        <p className="text-lg text-center text-black font-serif">
        ATL, BTL, Digital, Digital e-commerce, Amazon, Media Management
        </p>
      </div>

      {/* Second Image Section */}
      <div className="flex flex-col items-center lg:w-1/2">
        <img 
          src="https://www.ting.in/dist/img/our-work/case-studies/hamleys.jpg" 
          alt="Second Image" 
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover" 
        />
        <h1 className="text-2xl font-bold text-center mb-2 font-serif">India’s grandest character parade</h1>
        <p className="text-lg text-center text-black font-serif">
        360° Creative and Digital marketing campaign
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-12 p-8 bg-white ">
      {/* First Section: Heading, Image, Heading, Paragraph */}
      <div className="flex flex-col items-center lg:w-1/3 text-center">
        <h1 className="text-2xl mb-4 font-serif">SOME PALTAN SWAG</h1>
        <img
          src="https://www.ting.in/dist/img/our-work/case-studies/puneri-paltan.jpg"
          alt="Placeholder Image"
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"
        />
        <h1 className="text-xl font-semibold mb-4 font-serif">Puneri Paltan Branding</h1>
        <p className="text-lg text-black font-serif">
        Branding, Merchandise, Web, Social Media, Media Management
        </p>
      </div>

      {/* Second Section: Another Heading, Image, Heading, Paragraph */}
      <div className="flex flex-col items-center lg:w-1/3 text-center">
        <h1 className="text-2xl  mb-4 font-serif">IT'S IN OUR BLOOD</h1>
        <img
          src="https://www.ting.in/dist/img/our-work/case-studies/chennai-fc.jpg"
          alt="Another Placeholder Image"
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"
        />
        <h1 className="text-xl font-semibold mb-4 font-serif">Chennaiyin FC - 360</h1>
        <p className="text-lg text-black font-serif">
        ATL, BTL, Digital, Stadium branding, Website, Media Management        </p>
      </div>

      {/* Third Section: Third Heading, Image, Heading, Paragraph */}
      <div className="flex flex-col items-center lg:w-1/3 text-center">
        <h1 className="text-2xl mb-4 mr-20 font-serif">RISE WITH US</h1>
        <img
          src="https://www.ting.in/dist/img/our-work/case-studies/srh.jpg"
          alt="Third Placeholder Image"
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"
        />
        <h1 className="text-xl font-semibold mb-4 font-serif">SRH - 360</h1>
        <p className="text-lg text-black font-serif">
        ATL, BTL, Digital, Stadium Branding, Website, Video Content, Media Management        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-12 p-8 bg-white">
      {/* third Image Section */}
      <div className="flex flex-col items-center lg:w-1/2">
        <img 
          src="https://www.ting.in/dist/img/our-work/case-studies/oxfam-india.jpg" 
          alt="First Image" 
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover" 
        />
        <h1 className="text-2xl text-center mb-2 font-serif">#TRUTHABOUTTEA</h1>
        <p className="text-lg text-center text-black font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsa?
        </p>
      </div>

      {/* third Image Section */}
      <div className="flex flex-col items-center lg:w-1/2">
        <img 
          src="https://www.ting.in/dist/img/our-work/case-studies/fwc.jpg" 
          alt="Second Image" 
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover" 
        />
        <h1 className="text-2xl text-center mb-2 font-serif ">Famous Working Company</h1>
        <p className="text-lg text-center text-black font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsa?
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-white">
      {/* First Image with Content */}
      <div className="flex flex-col items-center lg:w-1/3 text-center">
        <img
          src="https://www.ting.in/dist/img/our-work/case-studies/wbn.jpg"
          alt="Placeholder 1"
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"
        />
        <p className="text-black font-serif">
       Wellbeing Nutrition
        </p>
      </div>

      {/* Second Image with Content */}
      <div className="flex flex-col items-center lg:w-1/3 text-center">
        <img
          src="https://www.ting.in/dist/img/our-work/case-studies/so-good.png"
          alt="Placeholder 2"
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"
        />
        <p className="text-black font-serif">So Good </p>
      </div>

      {/* Third Image with Content */}
      <div className="flex flex-col items-center lg:w-1/3 text-center">
        <img
          src="https://www.ting.in/dist/img/our-work/case-studies/opi.jpg"
          alt="Placeholder 3"
          className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"
        />
        <p className="text-black font-serif">OPI</p>
      </div>
    </div>
    <div className="bg-white px-10">
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold relative inline-block">
          <span className="relative bg-yellow-400">
            Brand Videos
            <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 -z-10"></span>
          </span>
        </h2>
      </div>
      {/* Content */}
      <div className="">
        {/* Left: Salad Image */}
        <div className="w-full  relative">
          <img
            src="https://www.ting.in/dist/img/our-work/brand-videos/salad-anyone.jpg" // Replace with your image link
            alt="Salad Bowl"
            className="rounded-lg w-full shadow-md  border border-dashed border-black "/>
          {/* Play Button */}
          {/* <button className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.518-4.149c-.75-.478-1.734.11-1.734.986v8.09c0 .876.984 1.464 1.734.986l6.518-4.148a1.15 1.15 0 000-1.965z"/>
            </svg>
          </button> */}
        </div>
      </div>
    </div>

    <div className="bg-white py-12 px-10 ">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-5xl relative inline-block">
          <span className="relative">
            Websites
            <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 -z-10"></span>
          </span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">
        {/* Image with Vedanta Logo */}
        <div className="w-full">

  <img src="https://www.ting.in/dist/img/our-work/websites/Vedanta.jpg" // Replace with your own image link
    alt="Vedanta Limited"
    className="shadow-lg w-full h-auto object-cover"/>
</div>
        {/* Company Name */}
        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl  text-black font-serif">
            Vedanta Limited
          </h3>
        </div>
      </div>
    </div>


  <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-12 px-4 bg-white">
  {/* First Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/avendus.jpg"
      alt="Placeholder 1"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">
      Avendus Capital
    </h1>
  </div>

  {/* Second Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/wns_denali.jpg"
      alt="Placeholder 2"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">
      WNS Denali
    </h1>
  </div>
</div>

<div className="py-12 px-4 bg-white">

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/dharma.jpg"
            alt="Image 1"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Dharma Production</h1>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/Vadilal.jpg"
            alt="Image 2"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Vadilal Ice Creams</h1>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/cygnus.jpg"
            alt="Image 3"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Cygnus World School</h1>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/Supreme.jpg"
            alt="Image 4"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Supreme Industries</h1>
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/d-light.jpg"
            alt="Image 5"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">DLights Hospitality</h1>
        </div>

        {/* Image 6 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/avishkar.jpg"
            alt="Image 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4" />
          <h1 className="text-xl sm:text-xl text-black font-serif">Aavishkar</h1>
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-12 px-4 bg-white">
  {/* First Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/wellbeing.jpg"
      alt="Placeholder 1"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">
      Wellbeing Nutrition 
    </h1>
  </div>

  {/* Second Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/Dabur.jpg"
      alt="Placeholder 2"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">
Dabur (UK)    </h1>
  </div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-12 px-4 bg-white">
  {/* First Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/Ubbs.jpg"
      alt="Placeholder 1"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">
Ubbs (UK)    </h1>
  </div>

  {/* Second Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/Neon_Attack.jpg"
      alt="Placeholder 2"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Neon Attack</h1>
  </div>
</div>


<div className="py-12 px-4 bg-white">

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/TWP.jpg"
            alt="Image 1"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">The Wedding Poetry</h1>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/blitzkrieg.jpg"
            alt="Image 2"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Blitzkrieg Events</h1>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/fwc.jpg"
            alt="Image 3"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Famous Working Company</h1>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/One8.jpg"
            alt="Image 4"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">One 8</h1>
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/real-ispat.jpg"
            alt="Image 5"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Real Ispat Group (GK TMT)</h1>
        </div>

        {/* Image 6 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/famous_studios.jpg"
            alt="Image 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4" />
          <h1 className="text-xl sm:text-xl text-black font-serif">Famous Studios</h1>
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-12 px-4 bg-white">
  {/* First Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/knack_studios.jpg"
      alt="Placeholder 1"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Knack Studios  </h1>
  </div>

  {/* Second Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/ROAR.jpg"
      alt="Placeholder 2"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"/>
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Roar</h1>
  </div>
</div>

<div className="py-12 px-4 bg-white">

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/MI-New-York.jpg"
            alt="Image 1"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">MI New York</h1>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/Neovantage.jpg"
            alt="Image 2"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Neovantage Parks</h1>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/WISD.jpg"
            alt="Image 3"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">World Ice Skating day</h1>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/Nidhi-pandya.jpg"
            alt="Image 4"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Nidhi Pandya</h1>
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/oxfam.jpg"
            alt="Image 5"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h1 className="text-xl sm:text-xl text-black font-serif">Oxfam</h1>
        </div>

        {/* Image 6 */}
        <div className="flex flex-col items-center animate-slide-up">
          <img
            src="https://www.ting.in/dist/img/our-work/websites/Aniket-Warty.jpg"
            alt="Image 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4" />
          <h1 className="text-xl sm:text-xl text-black font-serif">Aniket Warty</h1>
        </div>
      </div>
    </div>


    <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-12 px-4 bg-white">
  {/* First Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/AvendusEV.jpg"
      alt="Placeholder 1"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Avendus EV Report </h1>
  </div>

  {/* Second Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/Healthquad.jpg"
      alt="Placeholder 2"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"/>
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Healthquad</h1>
  </div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-12 px-4 bg-white">
  {/* First Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/bespoke.jpg"
      alt="Placeholder 1"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"
    />
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Bespoke London</h1>
  </div>

  {/* Second Image and Heading */}
  <div className="flex flex-col items-center animate-slide-up">
    <img
      src="https://www.ting.in/dist/img/our-work/websites/Samir-Lakhani.jpg"
      alt="Placeholder 2"
      className="shadow-lg w-full sm:w-[500px] h-auto object-cover mb-4"/>
    <h1 className="text-xl sm:text-2xl text-black font-serif mr-36">Samir Lakhani Hospitality</h1>
  </div>
</div>


<div className="py-12 px-4 bg-white">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl text-center mb-10 font-serif">
        Performance Marketing Case Studies
      </h1>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/wellbeing.jpg"
            alt="Case Study 1"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">
WellBeing Nutrition          </h2>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/attabouy.jpg"
            alt="Case Study 2"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">Attabouy</h2>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/so-good.jpg"
            alt="Case Study 3"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif"> So Good  </h2>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/butternut.jpg"
            alt="Case Study 4"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif"> Butternut Company  </h2>
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/jw-computers.jpg"
            alt="Case Study 5"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">JW Computers </h2>
        </div>

        {/* Image 6 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/smash.jpg"
            alt="Case Study 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">Smaash Social Media          </h2>
        </div>
        {/* image 7 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/smash.jpg"
            alt="Case Study 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">Smaash Website </h2>
        </div>
          {/* image 8 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/flochat.jpg"
            alt="Case Study 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">FloChat</h2>
        </div>
          {/* image 9 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.ting.in/dist/img/our-work/logo/max-protien.jpg"
            alt="Case Study 6"
            className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
          />
          <h2 className="text-xl sm:text-2xl text-black font-serif">Max Protien</h2>
        </div>
      </div>
    </div>

    <div className="bg-[#FAE90C] py-12 px-4 sm:px-8 md:px-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-black mb-6">
        Still want more? Greedy, aren’t we?
        <br />
        See our comprehensive credentials.
      </h1>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-black text-white py-2 px-10 text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
          Watworx
        </button>
      </div>
    </div>
    </>
  );
};

export default Ourwork;
