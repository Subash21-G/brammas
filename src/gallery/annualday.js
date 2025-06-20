import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './annual.css'; // You can still keep custom styles for extra tweaks

import img1 from '../assests/a1.jpg';
import img2 from '../assests/a2.jpg';
import img3 from '../assests/a3.jpg';
import img4 from '../assests/a4.jpg';
import img5 from '../assests/a5.jpg';
import img6 from '../assests/a6.jpg';
import img7 from '../assests/a7.jpg';
import img8 from '../assests/a8.jpg';
import img9 from '../assests/a9.jpg';
import img10 from '../assests/a10.jpg';
import img11 from '../assests/a11.jpg';
import img12 from '../assests/a12.jpg';
import img13 from '../assests/a13.jpg';
import img14 from '../assests/a14.jpg';
import img15 from '../assests/a15.jpg';
import img16 from '../assests/a16.jpg';
import img17 from '../assests/a17.jpg';
import img18 from '../assests/a18.jpg';
import img19 from '../assests/a19.jpg';
import img20 from '../assests/a20.jpg';
import img21 from '../assests/a21.jpg';
import img22 from '../assests/a22.jpg';
import img23 from '../assests/a23.jpg';
import img24 from '../assests/a24.jpg';
import img25 from '../assests/a25.jpg';

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25
];

const Annualday= () => {
  return (
     <div className="container1 py-4">
      <div className="row row-cols-5 g-3 justify-content-center">
        {images.map((img, index) => (
          <div key={index} className="col">
            <div className="equal-box">
              <img
                src={img}
                alt={`Annual Day ${index + 1}`}
                className="img-fluid w-100 h-100 object-fit-cover rounded"
            />
            </div>
          </div>
        ))}
      </div>  {/* 👈 Arrow button goes right below this */}

{/* 👇 Insert the arrow button code here */}
<div className="arrow-buttons d-flex justify-content-center gap-3 mt-4">
  <button className="arrow-btn shadow">
    <span className="arrow-icon">&lt;</span>
  </button>
  <button className="arrow-btn shadow">
    <span className="arrow-icon">&gt;</span>
  </button>
        
        </div>

    </div>
  );
};

export default Annualday;
