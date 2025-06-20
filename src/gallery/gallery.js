import React from 'react';
import './gallery.css';
import Header from '../components/header.jsx';
import Galleryimage from '../gallery/galleryimage.js';
import Footer from'../admin/footer.js';


function Gallery() {
  return (
    <>
      <Header />

      <section className="gallery">
        <div>
          <h1>GALLERY</h1>
          <p>Home &gt; Gallery</p>
        </div>
      </section>
      <Galleryimage/>
      <Footer/>
    </>
  );
}

export default Gallery;