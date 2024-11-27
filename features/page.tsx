// pages/features.js
import React from 'react';


const Features = () => {
  return (
    <div className="container">
      <h1 className="pageTitle">Features of Our Smart Watches</h1>
      <div className="featureGrid">
        <div className="featureCard">
          <h2>Elegant Design</h2>
          <p>Our smart watches come with a sleek and modern design that fits any occasion, from casual outings to formal events.</p>
        </div>
        <div className="featureCard">
          <h2>Health Monitoring</h2>
          <p>Track your heart rate, sleep patterns, and physical activity with our advanced health monitoring features.</p>
        </div>
        <div className="featureCard">
          <h2>Long Battery Life</h2>
          <p>Enjoy extended usage with our long-lasting battery that keeps you connected without frequent recharging.</p>
        </div>
        <div className="featureCard">
          <h2>Water Resistant</h2>
          <p>Our watches are designed to withstand splashes and brief immersion in water, making them perfect for active lifestyles.</p>
        </div>
        <div className="featureCard">
          <h2>Customizable Watch Faces</h2>
          <p>Choose from a variety of watch faces to match your style and mood, or create your own custom designs.</p>
        </div>
        <div className="featureCard">
          <h2>Notifications & Alerts</h2>
          <p>Stay connected with notifications for calls, messages, and apps right on your wrist, so you never miss an important update.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;