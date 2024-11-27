"use client"; // Add this line at the top of the file



import React, { useState } from 'react';
import Image from 'next/image';

const HomeContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-container">
   

      <div className="bottom-sec">
        <div className="left-sec">
          <h1>Revolutionary Smart Watch</h1>
          <p>Advanced health tracking, seamless connectivity, stylish design, and customizable features for every lifestyle.</p>
          <button>
            Order Now
          </button>
          <div className="down-btn">
            <div className="under-btn"></div>
          </div>
        </div>
        <div className="right-sec">
          <Image src="/watch-bg.svg" alt="Watch Background" className="watch-bg" layout="fill" objectFit="cover" />
          <Image src="/watch4-img.png" alt="Watch" className="watch-img" width={400} height={400} />
        </div>
      </div>

      <div className="product-sec">
        <h1>
          Why Choose Our Smart Watch?
        </h1>
        <p>Discover unparalleled features, sleek design, fitness tracking, and seamless connectivity. Elevate your lifestyle with our innovative Smart Watch today!




</p>

        <div className="card-sec">
          <div className="card">
            <Image src="/interactive-design.png" alt="Interactive Design" width={64} height={64} />
            <h2>Advance Interface</h2>
            <p>The advanced interface of our Smart Watch offers intuitive navigation, customizable widgets, and a vibrant display for effortless access to apps and notifications..</p>
          </div>

          <div className="card">
            <Image src="/install-stopwatch.png" alt="Precision Stopwatch" width={64} height={64} />
            <h2>Precision Stopwatch</h2>
            <p>Experience unmatched accuracy with our precision stopwatch, designed for athletes and professionals alike, ensuring reliable timing for every event.




</p>
          </div>

          <div className="card">
            <Image src="/gps-tracking.png" alt="Accurate GPS" width={64} height={64} />
            <h2>Accurate GPS</h2>
            <p>Our Smart Watch features accurate GPS tracking, providing real-time location data, route mapping, and distance measurement for all your outdoor adventures.




</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;