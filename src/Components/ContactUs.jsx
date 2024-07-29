// ContactUs.js
import React from 'react';

const ContactUs = () => (
  <div className="contact-us">
    <h3>Contact Us</h3>
    <p>Have questions? Get in touch!</p>
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <textarea placeholder="Your Message"></textarea>
    <button type="button">Send Message</button>
  </div>
);

export default ContactUs;
