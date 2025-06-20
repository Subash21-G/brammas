import React from 'react';
import './ContactUs.css';
import Header from '../components/header.jsx';
import Contactform from './contactform.js';
import Contactmap from './contactmap.js';
import Footer from'../admin/footer.js';

function contactus() {
  return (
    <>
      <Header />

      <section className="school">
        <div>
          <h1>CONTACT US</h1>
          <p>Home &gt; Contact us</p>
        </div>
      </section>
      <Contactform/>
      <Contactmap/>
      <Footer/>
    </>
  );
}

export default contactus;