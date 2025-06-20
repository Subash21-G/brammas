import React from 'react';
import './admin.css';
import waveImage from '../assests/Line 35.png';
import paperplane from '../assests/paperplane.png';
import Jet from '../assests/jet.png';
import Kidseating from '../assests/kidseating.png';
import Labs from '../assests/labs.png';
import School from '../assests/school.png';
import Meeting from '../assests/meeting.png';
import Sports from '../assests/sports.png';
import Teaching from '../assests/teach.png';
import Coach from '../assests/coach.png';

const Banners = () => {
  return (
    <div>
      {/* Wave section */}
      <div className="wave-section">
        <img src={waveImage} alt="Wave" className="wave-image" />
        <h2 className="wave-heading">WHY CHOOSE BRAMMAAS?</h2>

        <img src={paperplane} alt="Paper Plane" className="plane-image" />
         <img src={paperplane} alt="Paper Plane" className="plane-image1" />
          <img src={Jet} alt="jet" className="jet" />
      </div>

      {/* Features grid */}
      <div className="features-grid">
        <div className="feature-card">
          <img src={Kidseating} alt="Activity" />
          <p>Activity Based Learning</p>
        </div>
        <div className="feature-card">
          <img src={Labs} alt="Labs" />
          <p>Well Equipped Labs & <br /> Classrooms</p>
        </div>
        <div className="feature-card">
          <img src={School} alt="School" />
          <p>Excellent Environment</p>
        </div>
        <div className="feature-card">
          <img src={Meeting} alt="Attention" />
          <p>Individual Attention</p>
        </div>
        <div className="feature-card">
          <img src={Sports} alt="Sports" />
          <p>Indoor & Outdoor Sports</p>
        </div>
        <div className="feature-card">
          <img src={Teaching} alt="Teachers" />
          <p>Well Qualified & <br /> Experienced Teachers</p>
        </div>
        <div className="feature-card">
          <img src={Coach} alt="Coaching" />
          <p>Integrated IIT/ JEE/ <br /> NEET coaching</p>
        </div>
      </div>
    </div>
  );
};

export default Banners;
