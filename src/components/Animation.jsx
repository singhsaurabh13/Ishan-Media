import React, { useEffect } from "react";
import { gsap } from "gsap";
import bat from '../assets/batman.png'; // Replace with your actual path
import car from '../assets/car1.png'; // Replace with your actual path
import car1 from '../assets/car.png'; // Replace with your actual path

const App = () => {
  useEffect(() => {
    // Umbrella animation (rotation and flutter effect)
    gsap.to(".umbrella", {
      rotate: 20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // Smooth easing for a fluttering effect
    });

    // Cars animation
    // Car on the left moving right and shrinking
    gsap.to(".car.left", {
      x: "+=100vw", // Move car from left to right
      scaleY: 0.5,  // Decrease height by 50%
      duration: 10, // Increased duration to slow down the movement
      repeat: -1,
      ease: "linear",
      onRepeat: () => gsap.set(".car.left", { x: "-100vw" }) // Reset position when it moves off screen
    });

    // Car on the right moving left and shrinking
    gsap.to(".car.right", {
      x: "-=100vw", // Move car from right to left
      scaleY: 0.5,  // Decrease height by 50%
      duration: 10, // Increased duration to slow down the movement
      repeat: -1,
      ease: "linear",
      onRepeat: () => gsap.set(".car.right", { x: "100vw" }) // Reset position when it moves off screen
    });
  }, []);

  return (
    <div className="bg-[#6B6B6B] h-screen flex items-center justify-center relative overflow-hidden">
      {/* Road */}
      <div className="absolute inset-0 bg-gray-800 flex flex-col justify-center items-center z-0">
        {/* Road Design */}
        <div className="relative w-full h-1/3 bg-gray-900 rounded-t-lg shadow-lg">
          {/* Road Markings */}
          <div className="absolute inset-x-0 top-1/3 flex justify-between px-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="bg-white h-2 w-10 my-2 rounded-md opacity-80">
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="absolute text-center bottom-24 left-1/4 md:left-1/3 text-white">
        <h1 className="text-xl md:text-3xl font-bold">
          {/* we warned you <br/> we were random! */}
        </h1>
      </div>

      {/* Umbrella (Batman Image) */}
      <div className="umbrella absolute bottom-20 left-1/4 md:left-10 z-10">
        <img
          src={bat}
          alt="umbrella"
          className="h-56 md:h-80 rotate-6" // Increased size of umbrella (bat image)
        />
      </div>

      {/* Cars */}
      {/* Car on the left */}
      <div className="car left absolute top-40 left-0 z-0">
        <img
          src={car}
          alt="car"
          className="h-20 md:h-36 rounded-lg shadow-lg transition-all transform hover:scale-110" />
      </div>

      {/* Car on the right */}
      <div className="car right absolute top-72 right-0 z-0">
        <img
          src={car1}
          alt="car"
          className="h-20 md:h-36 rounded-lg shadow-lg transition-all transform hover:scale-110" />
      </div>

      {/* Car on the bottom */}
      <div className="car left absolute bottom-16 left-0 z-0">
        <img
          src={car}
          alt="car"
          className="h-20 md:h-36 rounded-lg shadow-lg transition-all transform hover:scale-110"/>
      </div>
    </div>
  );
};

export default App;
