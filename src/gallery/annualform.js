import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './annual.css';

const Annualform = () => {
  const [enquiry, setEnquiry] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enquiry && contact) {
      setSubmitted(true);

      // Optionally reset the form after submission
      setTimeout(() => {
        setSubmitted(false);
        setEnquiry('');
        setContact('');
      }, 4000);
    }
  };

  return (
    <div className="form-wrapper d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: '320px' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <strong className="text-uppercase">Get in Touch</strong>
            <button type="button" className="btn-close btn-sm" aria-label="Close"></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <textarea
                className="form-control "
                placeholder="Your Enquiry..."
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Enter mobile number / Email id"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            {submitted && (
              <div className="mb-3 text-success small">
                Thank you for contacting us. We will get back shortly
              </div>
            )}

            <div className="d-grid">
              <button type="submit" className="btn btn-warning text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Annualform;
