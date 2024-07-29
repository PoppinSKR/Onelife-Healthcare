// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import ContactUs from './ContactUs';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">One Life Health Care</div>
//         <nav className="footer-nav">
//           <a href="/">Home</a>
//           <a href="/community">Community</a>
//           <a href="/contact">Contact</a>
//           <a href="/privacy">Privacy Policy</a>
//         </nav>
//         <div className="footer-social">
//           <a href="#" aria-label="Facebook" className="social-icon facebook">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="#" aria-label="Twitter" className="social-icon twitter">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href="#" aria-label="LinkedIn" className="social-icon linkedin">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 One Life Health Care. All rights reserved.</p>
//       </div>
//       <ContactUs />
//     </footer>
//   );
// };

// export default Footer;

// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactUs from './ContactUs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">One Life Health Care</div>
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/community">Community</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
        <div className="footer-social">
          <a href="#" aria-label="Facebook" className="social-icon facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" aria-label="Twitter" className="social-icon twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <ContactUs /> {/* Embed the ContactUs component here */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 One Life Health Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
