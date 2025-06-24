import React from 'react';
import './admin.css';
import overlayImg from '../assests/9c22a81cce55e2997d9d686417c301a7b4558c5a.png';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="admission-wrapper">
      <div className="admission-container">
        {/* Left Image Section */}
        <div className="admission-image">
          <img src={overlayImg} alt="Admission Visual" />
        </div>

        {/* Right Form Section */}
        <div className="admission-form-box">
          <h2>TAKE THE FIRST STEP,<br />FILL THE DETAILS BELOW</h2>
          <form className="form-fields" onSubmit={handleSubmit}>
            <div className="form-columns">
              {/* LEFT COLUMN */}
              <div className="form-column">
                <div className="form-group position-relative">
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Student Name"
                    required
                  />
                  <span className="input-star student-name-star">*</span>
                </div>

                <div className="form-group position-relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Id"
                    required
                  />
                  <span className="input-star email-star">*</span>
                </div>

                <div className="form-group">
                  <select
                    name="gender"
                    id="gender"
                    className="form-select"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    id="previousSchool"
                    name="previousSchool"
                    type="text"
                    className="form-control"
                    placeholder="Enter Previous School"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="form-column">
                <div className="form-group position-relative">
                  <select
                    name="class"
                    id="class"
                    className="form-select"
                    required
                  >
                    <option value="">Class</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                  </select>
                  <span className="input-star class-star">*</span>
                </div>

                <div className="form-group position-relative">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    required
                  />
                  <span className="input-star mobile-star">*</span>
                </div>

                <div className="form-group">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder="Enter City"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Enter Your Message"
                  />
                </div>
              </div>
            </div>

            <div className="form-submit text-center mt-3">
              <button type="submit" className="btn btn-warning text-white px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
