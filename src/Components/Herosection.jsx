// src/Hero.js
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
// import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to One Life Health Care</h1>
        <p className="hero-subtitle">
          Your health, our priority. Experience the best in healthcare with us.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
      <div className="hero-image">
      <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
</div>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://res.cloudinary.com/skyrev/image/upload/v1613843545/skyrev/medical/banner1_3D_2x_y2cary.png" alt="" class="d-block" style={{width:'100%', height:'auto'}} />
  </div>
  <div class="carousel-item">
    <img src="https://res.cloudinary.com/skyrev/image/upload/v1613843548/skyrev/medical/faq_3D_2x_uu2adj.png" alt="" class="d-block" style={{width:'100%', height:'auto'}} />
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
      </div>
    </section>
  );
}

export default Hero;
