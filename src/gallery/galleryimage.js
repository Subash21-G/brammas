import React from 'react';
import './gallery.css'; // for styling
import { Link } from 'react-router-dom';

import sportsday from '../assests/sportsday.png';
import graduationday from '../assests/graduationday.jpg';
import pongal from '../assests/pongal.jpg';
import extra from '../assests/extra.jpg';
import tour from '../assests/tour.jpg';
import exhibitions from '../assests/exhibitions.jpg';
import annual from '../assests/annual.jpg';
import food from '../assests/food.jpg';


const galleryData = [
  { title: 'sportsday', img: sportsday},
  { title: 'graduationday', img: graduationday},
  { title: 'pongal Celebration', img: pongal},
  { title: 'extra circular', img: extra},
  { title: 'tour', img: tour },
  { title: 'exhibitions', img: exhibitions},
  { title: 'annual day', img: annual,link:'/annual'},
  { title: 'food Feast', img: food}
];

const Galleryimage = () => {
  return (
    <div className="gallery-section">
      <h2>EVENTS PHOTO GALLERY</h2>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-card">

            {item.link ? (
          <Link to={item.link}>
            <img src={item.img} alt={item.title} />
            <div className="gallery-title">{item.title}</div>
          </Link>
        ) : (
          <>
            <img src={item.img} alt={item.title} />
            <div className="gallery-title">{item.title}</div>
          
          </>
        )}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Galleryimage;
