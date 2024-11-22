import React from 'react';
import Marquee from 'react-fast-marquee';
import img from "../assets/build.png";
import img1 from "../assets/build2.png";

function Home1() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-4">
      {/* Top Scrolling Marquee */}
      <Marquee
        gradient={false}
        direction="right"
        speed={50}
        loop={0} // Infinite loop
        className="w-full py-2 bg-black text-[#ff9933] text-xs uppercase tracking-widest">
        Hello! You know why you need a little yellow hello! You know what we do now but do you reallyyy know what we do?
      </Marquee>

      {/* Left Vertical Scrolling Marquee */}
      <div className="absolute left-0 top-0 h-full w-16 overflow-hidden z-10 flex flex-col items-center">
        <Marquee
          gradient={false}
          direction="up"
          speed={50}
          loop={0} // Infinite loop
          className="h-full">
          <div className="text-[#ff9933] text-xs uppercase tracking-widest transform rotate-90 whitespace-nowrap">
            Hello! You know why you need a little yellow hello! You know what we do now but do you reallyyy know what we do?
          </div>
        </Marquee>
      </div>

      {/* Right Vertical Scrolling Marquee */}
      <div className="absolute right-0 top-0 h-full w-16 overflow-hidden z-10 flex flex-col items-center">
        <Marquee
          gradient={false}
          direction="down"
          speed={50}
          loop={0} // Infinite loop
          className="h-full">
          <div className="text-[#ff9933] text-xs uppercase tracking-widest transform rotate-90 whitespace-nowrap">
            Hello! You know why you need a little yellow hello! You know what we do now but do you reallyyy know what we do?
          </div>
        </Marquee>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-screen-lg mx-auto space-y-6 lg:space-y-0 lg:space-x-6 py-12 bg-black w-full px-4 md:px-8">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl lg:text-8xl text-white ml-10 font-bold tracking-wide">watworx</h1>
          <p className="text-3xl mt-4 text-white ml-10 tracking-wide font-medium">A fully <br />integrated</p>
          <p className="text-3xl font-bold mt-5 ml-10 text-black tracking-wide">
            <span style={{ backgroundColor: '#ff9933' }} className="px-1">digital</span>& <br />
            <span className="bg-white text-black px-1 ml-14">creative</span>
          </p>
          <p className="text-3xl text-white ml-36 tracking-wide font-light">agency</p>
          <img src={img1} alt="Zebra" className="mt-6" style={{ width: '450px', height: '300px' }} />
        </div>

        {/* Right Section */}
        <div
          className="relative lg:block hidden w-full max-w-5xl h-[600px] rounded-lg shadow-xl overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Enlarged image */}

          <img
            src={img1}
            alt="Creative Design"
            className="absolute right-0 top-0 transform scale-125 shadow-lg w-full h-full object-cover z-10"/>
          {/* Card content over the image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-[#ff9933] text-black p-8 rounded-lg w-[90%] lg:w-[75%] shadow-2xl z-20 mt-24">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Creative Design Solutions</h2>
            <p className="text-lg lg:text-xl leading-relaxed text-center">
              We craft engaging digital experiences that captivate and deliver results. Our team brings your vision to life with cutting-edge technology and innovative design.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Marquee */}
      <Marquee
        gradient={false}
        direction="left"
        speed={50}
        loop={0} // Infinite loop
        className="w-full py-2 bg-black text-[#ff9933] text-xs uppercase tracking-widest">
        Scroll to know why you need a little yellow hello! You know what we do now but do you reallyyy know what we do?
      </Marquee>
    </div>
  );
}

export default Home1;
