import React from 'react';
// import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"The staff was incredibly friendly and professional. I felt well taken care of."</p>
          <cite>- John Doe</cite>
        </div>
        <div className="testimonial-item">
          <p>"Excellent service and state-of-the-art facilities. Highly recommend!"</p>
          <cite>- Jane Smith</cite>
        </div>
        <div className="testimonial-item">
          <p>"The best health care experience I've ever had. The staff is friendly and very knowledgeable."</p>
          <cite>- Emily Johnson</cite>
        </div>
      </div>
      <div className="background-image">
        <img src="https://res.cloudinary.com/skyrev/image/upload/v1613843548/skyrev/medical/footer_3d_2x_npvm8q.png" alt="Background" />
      </div>
    </section>
  );
};

export default Testimonials;
