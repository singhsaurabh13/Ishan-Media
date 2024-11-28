import React, { useState, useEffect } from 'react';

const roles = [
  {
    title: "CLIENT SERVICING",
    description: "The subject has total disregard to anything that has lack of design - including humans.",
    imgSrc: "https://www.ting.in/dist/img/home/careers/client-servicing.jpg",
  },
  {
    title: "COPYWRITER",
    description: "Loner with dark circles, addicted to words, allergic to grammatical errors, obsessed with sentence structures.",
    imgSrc: "https://www.ting.in/dist/img/home/careers/copywriter.jpg",
  },
  {
    title: "VIDEOGRAPHER",
    description: "Whether you're as talented as Steven Spielberg or not, as long you believe you can pull off something visually attractive.",
    imgSrc: "https://www.ting.in/dist/img/home/careers/videographer.jpg",
  },
  {
    title: "GRAPHIC DESIGNER",
    description: "Obsessed with symmetry and pixel perfection, communicates better through visuals than words.",
    imgSrc: "https://www.ting.in/dist/img/home/careers/visualizer.jpg",
  },
  {
    title: "WEB DEVELOPER",
    description: "Fluent in code, makes complex things simple, can turn coffee into websites.",
    imgSrc: "https://www.ting.in/dist/img/home/careers/copywriter.jpg",
  },
  {
    title: "MARKETING SPECIALIST",
    description: "Understands human psychology, speaks in KPIs, and knows the best time to post on any platform.",
    imgSrc: "https://www.ting.in/dist/img/home/careers/copywriter.jpg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 2;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? roles.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= roles.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" mx-auto p-4 bg-white">
      {/* Top Line */}
      <div className="border-t-4 border-gray-800 mb-4"></div>

      {/* Header Section */}
      <div className="max-w-3xl mx-auto p-4 bg-white">
        <div className="flex flex-col md:flex-row justify-between mb-10 items-center">
          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 font-serif">
              Watworx <span className="text-[#ff9933] ">classifieds</span>
            </h1>
            <p className="text-gray-700 mb-2">#AllWork #AllPlay #JackWho?</p>
            <p className="text-blue-600 font-semibold cursor-pointer font-serif">
              To apply at ting <span className="underline">CLICK HERE</span>
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 text-center md:text-right">
            <p className="text-lg italic text-gray-700 font-serif">
              "because the people who are <span className="font-bold text-2xl">crazy enough to think</span> they can change the world, are the ones who do."
            </p>
            <p className="text-sm font-semibold mt-2 text-gray-500">- Apple Inc.</p>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 p-4"
              style={{ minWidth: `${100 / itemsToShow}%` }}
            >
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl font-bold text-[#ff9933] mb-4  text-center">{role.title}</h2>
                <img
                  src={role.imgSrc}
                  alt={role.title}
                  className="mx-auto mb-4 w-full h-64 object-cover rounded-lg shadow-md"
                />
                <h3 className="font-semibold mb-2 text-gray-700">SUSPECT</h3>
                <p className="text-gray-600">{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider;
