// src/components/sections/One.jsx
import React from 'react';
import './One.css';

function One() {
  return (
    <section className="section white-card">
      <section className = "scroll-reveal">
        <h1><span>Be the hare, or the turtle ;</span></h1>
        <h2><span>but no need to race.</span></h2>
      <p><span>Unlock your dream job with our secret recipe. We provide a customized roadmap designed specifically fr your college journey, starting from <strong>day one.</strong> Learn exactly what skills to build each semester, gain real-world experience through internships, and master interview skills with our expert guidance. We'll equip you with the tools and confidence to land your dream job right after graduation.</span></p>
      </section>
      <img className = 'rabit' src="Rabbit Face Emoji.png" alt="" />
      <img src="Turtle Emoji.png" alt="" className="tortoise" />
      <img src="girl.png" alt="" className="girl" />
    </section>
  );
}

export default One;
