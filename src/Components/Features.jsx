import React from 'react';
// import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
    <h2>Our Features</h2>
    <div className="feature-list">
      <div className="feature-item">
        <h3>Expert Doctors</h3>
        <p>Access to a network of highly qualified healthcare professionals.</p>
      </div>
      <div className="feature-item">
        <h3>Advanced Equipment</h3>
        <p>State-of-the-art medical technology for accurate diagnosis and treatment.</p>
      </div>
      <div className="feature-item">
        <h3>Personalized Care</h3>
        <p>Individual treatment plans tailored to each patient's unique needs.</p>
      </div>
    </div>
  </section>
  );
};

export default Features;
