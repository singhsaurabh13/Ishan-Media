import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
   
      
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container bg-white py-5 px-10 text-center">
      <Slider {...settings}>
        <div>
        <h1>We appreciate the innovation, ideas, creatives and execution of watworx. Team understands the requirements and delivers consistently with same great thought process and commitment
        . We are happy to partner with them</h1>
            <h3 className="text-gray-500 mt-2">Suparna Bhattacharyya</h3>
        </div>
        <div>
          <h3>"What you need for running a seamless event is a hardworking, all hands on deck and committed team, and, that is exactly what you get when you join hands with Watworx - a task force willing to do whatever it takes to achieve the goal no matter hurdles they face.
          We've always had a wonderful experience partnering with them. "</h3>
          <h1 className="text-gray-500 mt-2">Pankaj Upadhyay</h1>
        </div>
        <div>
          <h3>What you need for running a seamless event is a hardworking, all hands on deck and committed team, and, that is exactly what you get when you join hands with Watworx - a task force willing to do whatever it takes to achieve the goal no matter hurdles they face.
          We've always had a wonderful experience partnering with them. 

</h3>
<h1 className="text-gray-500 mt-2" >Kanika Katyal</h1>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
