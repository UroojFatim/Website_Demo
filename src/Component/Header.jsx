// src/components/Header.jsx
import { useState, useEffect } from "react";

const Header = () => {
  const [index, setIndex] = useState(0);

  // Array of texts to display
  const texts = [
    "Deliver Time: 3-5 Working Days",
    "Pakistan's Biggest Baby Store",
    "Delivery all over Pakistan",
  ];

  // Update the index to show the next text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <header className="bg-pink-500 p-3 flex justify-center items-center">
      <h1 className="text-white text-xl font-bold animate-fade">{texts[index]}</h1>
    </header>
  );
};

export default Header;
