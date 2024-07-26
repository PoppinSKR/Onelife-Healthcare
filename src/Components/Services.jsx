import React from 'react';
// import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Consultation</h3>
          <p>Get expert health advice from our qualified professionals.</p>
        </div>
        <div className="service-card">
          <h3>24/7 Support</h3>
          <p>We are here to assist you with all your health concerns around the clock.</p>
        </div>
        <div className="service-card">
          <h3>Pharmacy</h3>
          <p>Access a wide range of medicines delivered to your doorstep.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
