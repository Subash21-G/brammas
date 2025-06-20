import React from 'react';
import './admin.css';
import Header from '../components/header.jsx';
import Form from './Form.js';
import Banners from'./banners.js';
import Footer from'./footer.js';

function Admin() {
  return (
    <>
      <Header />
      
      <section className="hero">
        <div>
          <h1>ADMISSION ENQUIRY</h1>
          <p>Home &gt; Admission Enquiry</p>
        </div>
      </section>
      <Form/>
      <Banners/>
      <Footer/>
    </>
  );
}

export default Admin;
