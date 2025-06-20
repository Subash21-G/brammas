import React from 'react';
import './annual.css';
import Header from '../components/header.jsx';
import Annualday from '../gallery/annualday.js'; // your actual page component
import Footer from'../admin/footer.js';



function Annual() {
  return (
    <>
      <Header />

      <section className="annual">
        <div>
          <h1>ANNUAL DAY 2025</h1>
          <p>Home &gt; Annual Day</p>
        </div>
      </section>
      <Annualday/>
      <Footer/>
    </>
  );
}

export default Annual;