// src/components/Hero.jsx
import { useState, useEffect } from "react";
// import Image from "../assets/slide1.PNG"

const Hero = () => {
  const slides = [
    {
      image: "https://img.freepik.com/premium-photo/happy-newborn-baby-tender-moments-with-wearing-vibrant-clothing_865982-2533.jpg?w=900",
      heading: "Welcome to Our Baby Store",
      paragraph: "Discover the best products for your little one.",
      button1: "Shop Now",
      button2: "Learn More",
      textPosition: "left"
    },
    {
      image: "https://img.freepik.com/free-photo/fashionable-toddler-holding-guitar_23-2148442458.jpg?t=st=1726633294~exp=1726636894~hmac=4c41aaf6a4e366bcd373da4ba32509d4bfa25477b5f1756b9cddce1853d71c5c&w=1060",
      heading: "Quality Baby Products",
      paragraph: "We provide high-quality items for your child's comfort.",
      button1: "Explore",
      button2: "Get Started",
      textPosition: "right"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Text Content */}
          <div
            className={`absolute ${
              slide.textPosition === "left" ? "left-10" : "right-10"
            } top-1/3 text-white max-w-md`}
          >
            <h1 className="text-5xl font-bold mb-4">{slide.heading}</h1>
            <p className="mb-6">{slide.paragraph}</p>
            <div className="flex space-x-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
                {slide.button1}
              </button>
              <button className="bg-transparent border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-500 hover:text-white transition duration-300">
                {slide.button2}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls (optional) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 bg-white rounded-full cursor-pointer ${
              currentSlide === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
