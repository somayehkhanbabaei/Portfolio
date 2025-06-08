import React from 'react';
import '../styles/Hero.css';

const Hero = () => (
  <section className="hero-bg">
    <div className="hero-container">
      <div className="hero-col hero-left">
        <div className="hero-image-placeholder">Your Photo</div>
      </div>
      <div className="hero-col hero-right">
        <h1>Your Name</h1>
        <p>
          This is the "About Me" section. Write a short introduction about yourself, your background, and what you do.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
