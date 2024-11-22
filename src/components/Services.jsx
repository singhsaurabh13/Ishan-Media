import React from 'react'
import man from '../assets/man.png'
import man1 from '../assets/man2.png'
import man3 from '../assets/man3.png'

export default function Services() {
  return (
    <>
    <div className="bg-white py-12 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black font-serif">
        360° Creative, Digital <br></br> & Web integrated solutions
        </h1>
    </div>
    <div className="bg-white p-6 sm:p-10">
      <div className="grid gap-10 md:grid-cols-3">

        {/* Left Section */}
        <div className="bg-[#ff9933] text-white p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 font-serif">
            <span className="text-[#26bcb3]">d</span>
            <span className="text-[#26bcb3]">@</span>dos
          </h1>
          <p className="text-lg font-serif">
            A niche set-up, Dodos is focused completely on breathing life into
            your brand's identity, packaging, and strategy.
          </p>
        </div>

        {/* Middle Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 font-serif">BRAND IDENTITY</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-xs font-serif">
            <li>BRAND IDENTITY CREATION</li>
            <li>BRAND MATRIX AND GOLDEN CIRCLE</li>
            <li>
              BRAND TOUCHPOINT EXTENSIONS - DESIGN LANGUAGE, BRAND PERSONALITY,
              PACKAGING, COLLATERAL, WEBSITE TO CAMPAIGN THEMES
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 font-serif">RESEARCH AND STRATEGY</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-xs font-serif">
            <li>QUALITATIVE RESEARCH</li>
            <li>BRAND PLAYBOOK</li>
            <li>BRAND STRATEGY</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 sm:p-10">
      {/* Top Section */}
      <div className="grid gap-10 md:grid-cols-3">
  {/* Left Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4 font-serif">PACKAGING</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-800 text-xs font-serif">
      <li>AMAZON BRAND PAGE & A+ CONTENT CREATION</li>
      <li>AMAZON ADVERTISING</li>
      <li>AMAZON PAGE OPTIMISATION</li>
      <li>
        OTHER E-COMMERCE PORTAL ASSISTANCE (FLIPKART, BIGBASKET, NYKAA,
        PURPLE, ETC.)
      </li>
    </ul>
  </div>

  {/* Right Section (Image) */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center">
    {/* Placeholder for the superhero image */}
    <img
      src={man} // Replace with actual image URL or file
      alt="Superhero"
      className="w-full object-contain" />
  </div>

  {/* Middle Section (Content) */}
  <div className="bg-[#ff9933] text-white p-6 rounded-lg">
    <h1 className="text-4xl font-bold mb-4 font-serif">
      <span className="text-[#26bcb3]">ting</span>
      <span className="text-[#26bcb3]">X</span>
    </h1>
    <p className="text-lg font-serif">
      Our largest sub-segment in the digital division, Ting X is focused
      on creating content to resonate with audiences our brands cater to.
    </p>
  </div>
</div>


      {/* Bottom Section */}
      <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-6">
  {/* Social Media Management */}
  <div className="bg-white p-8 rounded-xl shadow-xl max-w-full w-full transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold mb-4 font-serif text-gray-800 ">SOCIAL MEDIA MANAGEMENT</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm font-serif">
      <li>STRATEGY & CAMPAIGNS</li>
      <li>CONTENT MARKETING</li>
      <li>PAGE & RESPONSE MANAGEMENT</li>
      <li>YOUTUBE MANAGEMENT & MONETIZATION</li>
    </ul>
  </div>

  {/* Brand Advocacy */}
  <div className="bg-white p-8 rounded-xl shadow-xl max-w-full w-full transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold mb-4 font-serif text-gray-800">BRAND ADVOCACY</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm font-serif">
      <li>INFLUENCER CAMPAIGNS</li>
      <li>MICRO-INFLUENCER MANAGEMENT</li>
    </ul>
  </div>

  {/* Other Services */}
  <div className="bg-white p-8 rounded-xl shadow-xl max-w-full w-full transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold mb-4 font-serif text-gray-800">OTHER SERVICES</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm font-serif">
      <li>WHATSAPP BUSINESS & MARKETING</li>
      <li>EMAIL MARKETING</li>
      <li>QUORA / REDDIT MANAGEMENT</li>
    </ul>
  </div>
</div>
   </div>

   <div className="bg-white p-6 sm:p-10">
  <div className="grid gap-10 md:grid-cols-3 items-center">
  
    {/* Left Section */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 font-serif">Platforms</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 text-xs font-serif">
        <li>FACEBOOK </li>
        <li>YOUTUBE</li>
        <li>INSTAGRAM </li>
        <li>LINKEDIN</li>     
        <li>REDDIT</li>    
        <li>GOOGLE</li>     
         </ul>
    </div>

    {/* Middle Section (Black Card) */}
    <div className="bg-[#ff9933] text-white p-6 rounded-lg mx-4 w-full md:max-w-2xl lg:max-w-[40rem]">
  <h1 className="text-4xl font-bold mb-4 font-serif">
    <span className="text-white">Qo</span>
    <span className="text-[#26bcb3]">De</span>
  </h1>
  <p className="text-lg font-serif">
    The pandemic sent Qode into pandemonium. Our Tech vertical has had to grow in size, increase skill, and ensure quality - we're talking massive tech upgrades.
  </p>
</div>

    {/* Right Section */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 font-serif">Websites, E-commerce & Apps</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800 text-xs font-serif">
        <li>CREATIVE STATIC WEBSITES</li>
        <li>DYNAMIC WEBSITES</li>
        <li>E-COMMERCE SOLUTIONS</li>
        <li>UI/UX SOLUTIONS</li>
        <li>MOBILE APPLICATIONS</li>
        <li>API BASED INTEGRATIONS</li>
        <li>MARTECH INTEGRATIONS</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-white p-6 sm:p-10">
      {/* Top Section */}
      <div className="grid gap-10 lg:grid-cols-2">
  {/* Left Section - Image */}
  <div className="flex justify-center items-center rounded-lg shadow-md w-full h-72">
    <img
      src={man1} // Replace with actual image URL
      alt="Skeleton at desk"
      className="w-auto h-full object-contain"
    />
  </div>

  {/* Right Section - Cards */}
  <div className="grid gap-6 lg:grid-cols-2">
    {/* Platforms and Tech */}
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-72 flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-4 font-serif text-gray-800">
        PLATFORMS AND TECH
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm font-serif">
        <li>SHOPIFY</li>
        <li>WOOCOMMERCE</li>
        <li>PHP</li>
        <li>NODEJS</li>
      </ul>
    </div>

    {/* 3rd Party Integrations */}
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-72 flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-4 font-serif text-gray-800">
        3RD PARTY INTEGRATIONS
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm font-serif">
        <li>MOENGAGE</li>
        <li>WHATSAPP</li>
        <li>GROWLITICS</li>
      </ul>
    </div>
  </div>
</div>


      {/* Bottom Section */}
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
  {/* CMYK Section */}
  <div className="bg-[#ff9933] text-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h1 className="text-4xl font-bold mb-4 font-serif">
      <span className="text-white">c</span>
      <span className="text-[#26bcb3]">m</span>
      <span className="text-white">y</span>
      <span className="text-white">k</span>
    </h1>
    <p className="text-xl flex-grow font-serif">
      Our most humble vertical, CMYK, is the one that puts your brand out there. Out there for the world to see, recognize, and fall in love with.
    </p>
  </div>

  {/* ATL Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h2 className="text-2xl font-bold mb-4 text-black">ATL</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-xs flex-grow">
      <li>ATL</li>
      <li>OOH</li>
      <li>PRINT</li>
      <li>RADIO</li>
      <li>TVC</li>
      <li>STADIUM BRANDING</li>
      <li>EVENT BRANDING</li>
    </ul>
  </div>

  {/* BTL Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h2 className="text-2xl font-bold mb-4 text-black">BTL</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-xs flex-grow">
      <li>COLLATERALS</li>
      <li>SPACE BRANDING</li>
      <li>MAGAZINES & ANNUAL REPORTS</li>
      <li>INNOVATION & EXPERIENTIAL IDEAS</li>
      <li>STALL BRANDING</li>
      <li>SOCIAL MEDIA & DIGITAL AD CREATIVES</li>
    </ul>
  </div>
</div>
    </div>

    <div className="bg-white p-6 sm:p-10">
      {/* Top Section */}
      <div className="grid gap-10 md:grid-cols-3">
  {/* Left Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">EMPLOYER BRANDING</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-800 text-xs">
      <li>INTERNAL COMMUNICATION</li>
      <li>SOCIAL MEDIA CREATIVE MANAGEMENT</li>
      <li>OFFICE BRANDING </li>
      <li>INTERNAL CAMPAIGNS
      </li>
    </ul>
  </div>

  {/* Right Section (Image) */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center">
    {/* Placeholder for the superhero image */}
    <img
      src={man3} // Replace with actual image URL or file
      alt="Superhero"
      className="w-full object-contain" />
  </div>

  {/* Middle Section (Content) */}
  <div className="bg-[#ff9933] text-white p-6 rounded-lg">
    <h1 className="text-4xl font-bold mb-4">
      <span className="text-white">Studi</span>
      <span className="text-[#26bcb3]">o</span>
      <span className="text-white">s</span>

    </h1>
    <p className="text-lg">
      Our largest sub-segment in the digital division, Ting X is focused
      on creating content to resonate with audiences our brands cater to.
    </p>
  </div>
</div>


      {/* Bottom Section */}
      <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-6">
  {/* Social Media Management */}
  <div className="bg-white p-8 rounded-xl shadow-xl max-w-full w-full transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold mb-4 font-serif text-gray-800">DIGITAL SHOOT & EDIT</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
      <li>LIVE SHOOTS</li>
      <li>INTERVIEW SHOOTS</li>
      <li>EVENT COVERAGE</li>
      <li>VIDEO MONTAGES</li>
      <li>MICRO CONTENT </li>
      <li>INFLUENCER SHOOTS </li>
      <li>F&B SHOOTS </li>
      <li>STOP MOTION </li>
    </ul>
  </div>

  {/* Brand Advocacy */}
  <div className="bg-white p-8 rounded-xl shadow-xl max-w-full w-full transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold mb-4 font-serif text-gray-800">ANIMATION & MOTION GRAPHICS</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
      <li>2D ANIMATION</li>
      <li>MOTION GRAPHICS</li>
      <li>BRAND EXPLAINERS & INTRODUCTION</li>
      <li>MICRO CONTENT </li>
    </ul>
  </div>

  {/* Other Services */}
  <div className="bg-white p-8 rounded-xl shadow-xl max-w-full w-full transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold mb-4 font-serif text-gray-800">PRODUCTION SCALE</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
      <li>PRODUCTION SCALE</li>
      <li>CAMPAIGN SHOOTS</li>
      <li>TVC</li>
      <li>STUDIOS SHOOTS</li>
    </ul>
  </div>
</div>
   </div>

<div className="bg-white p-6 sm:p-10">
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
  {/* CMYK Section */}
  <div className="bg-[#ff9933] text-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h1 className="text-4xl font-bold mb-4">
      <span className="text-white">u</span>
      <span className="text-[#26bcb3]">r</span>
      <span className="text-white">b</span>
      <span className="text-white">i</span>
      <span className="text-white">n</span>
      <span className="text-white">e</span>
    </h1>
    <p className="text-xs flex-grow">
    Turbine is primarily our performance marketing focused division that is dead set on achieving that metric that matters to you at the moment. If it's awareness or is it web traffic or is it increasing sales. Whatever it may be, we pick that north start and focus all our energy in achieving that.
    </p>
  </div>

  {/* ATL Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h2 className="text-2xl font-bold mb-4 text-black">ONLINE ADVERTISING</h2>
    <ul className="list-disc pl-6 space-y-2 text-black  text-xs flex-grow">
      <li>SEARCH ENGINE MARKETING</li>
      <li>DISPLAY & DOUBLE CLICK</li>
      <li>PROGRAMMATIC ADVERTISING</li>
      <li>SOCIAL MEDIA ADVERTISING</li>
      <li>MOBILE, IN APP, OTT ADVERTISING</li>
      <li>PUBLISHER NETWORKS</li>
    </ul>
  </div>

  {/* BTL Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h2 className="text-2xl font-bold mb-4 text-black">SEARCH ENGINE OPTIMIZATION</h2>
    <ul className="list-disc pl-6 space-y-2 text-black text-xs flex-grow">
      <li>SEO STRATEGY</li>
      <li>WEBSITE ANALYSIS</li>
      <li>KEYWORD AND COMPETITOR RESEARCH</li>
      <li>WEBSITE SEO OPTIMIZATION </li>
      <li>WEBSITE CONTENT OPTIMISATION</li>
      <li>OFF PAGE CONTENT SUBMISSION</li>
    </ul>
  </div>
</div>
    </div>
    <div>
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-72">
    <h2 className="text-2xl font-bold mb-4 text-black">AMAZON MARKETING</h2>
    <ul className="list-disc pl-6 space-y-2 text-black text-xs flex-grow">
      <li>AMAZON BRAND PAGE & A+ CONTENT CREATION</li>
      <li>AMAZON ADVERTISING</li>
      <li>AMAZON PAGE OPTIMISATION</li>
      <li>WEBSITE SEO OPTIMIZATION </li>
      <li>OTHER E-COMMERCE PORTAL ASSISTANCE ( FLIPKART, BIGBASKET,NYKAA, PURPLE, ETC.)</li>
    </ul>
  </div>
    </div>


   <div className="bg-[#26bcb3] p-4 rounded-lg text-center h-48">
  <a
    href="/ourwork"
    className="text-white text-xl font-bold hover:underline md:text-5xl mt-20">
    VIEW OUR WORK +
  </a>
</div>


    </>
  )
}
