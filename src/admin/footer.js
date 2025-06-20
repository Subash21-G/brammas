import React from 'react';
import './admin.css';
import logo from '../assests/logo.jpg';
import { FaPhone, FaEnvelope, FaQuestion } from 'react-icons/fa';
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedin,
  FaPinterest,
  FaCopyright
} from "react-icons/fa6";
import { TbWorldQuestion } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="school-footer">
      <div className="footer-main">
        <div className="footer-section logo-section">
          <img src={logo} alt="Logo" className="school-logo rounded-circle" />
          <p className='text-center'>
            Brammaas Vidhyalaya CBSE Senior Secondary School. Brammaas gives
            global edge to every student through International Olympiads.
          </p>
        </div>

        <div className="footer-section">
          <h3>EXPLORE</h3>
          <div className='border-bottom border-3 w-25 ms-1 mb-2' />
          <ul>
            <li>About us</li>
            <li>Academics</li>
            <li>Our Toppers</li>
            <li>Latest News</li>
            <li>Application Form</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT</h3>
          <div className='border-bottom border-3 w-25 ms-1' />
          <p>
            5/222, Railway Station Rd,<br />
            Gandhi Nagar, Gudiyatham,<br />
            Tamil Nadu 632602
          </p>
          <h4>STUDENTS HELP LINE</h4>
          <div className='border-bottom border-3 w-25 ms-2' />
          <p><FaPhone style={{ transform: 'rotate(90deg)' }} /> +91 8045134590</p>
          <p><FaEnvelope /> brammaascbse@gmail.com</p>
          <p className="pointer" onClick={() => window.open('https://brammaascbse.in', '_blank')}><TbWorldQuestion /> https://brammaascbse.in</p>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US ON</h3>
          <div className='border-bottom border-3 w-25 ms-1' />
          <div className="social-icons">
            <FaFacebook />
            <FaSquareInstagram />
            <FaSquareTwitter />
            <FaLinkedin />
            <FaPinterest />
          </div>
          <div className="subscribe-box">
            <input type="text" placeholder="Your e-mail address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyrights <span className='text-white'><FaCopyright /></span> Brammaas Vidhyalaya school
        </p>
        <div className="footer-links">
          <span><FaPhone style={{ transform: 'rotate(90deg)' }} /> Call us</span>
          <span><FaEnvelope /> Email us</span>
          <span><FaQuestion /> Enquiry Now</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
