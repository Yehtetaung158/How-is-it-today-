// src/components/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-64">
        <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="inline-block w-full h-64">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">❮</button>
      <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2">❯</button>
    </div>
  );
};

export default Carousel;
