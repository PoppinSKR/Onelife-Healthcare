import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://res.cloudinary.com/skyrev/image/upload/v1613843545/skyrev/medical/banner1_3D_2x_y2cary.png"
          alt="Banner 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://res.cloudinary.com/skyrev/image/upload/v1613843548/skyrev/medical/faq_3D_2x_uu2adj.png"
          alt="Banner 2"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    </section>
  );
}

export default Hero;
