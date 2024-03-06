// Resume.js
import React from 'react';
import './../styles/resume.css'


const Resume = () => {
  return (
    <div className="resume-style-page container-fluid d-flex justify-content-center align-items-center vh-100"> {/* Use Bootstrap classes */}

      <div className="resume-text-center">
        <p className="web-text">Certficate</p>
        <div className="resume-text-center">
          <img src="FullStackCertificate.png" alt="Profile" style={{ width: '600px', height: '500px', marginBottom: '20px' }} />
        </div>
      </div>

      <div className="resume-divider"></div>

      <div className="resume-text-center">
        <p className="web-text">Certficate</p>
        <div className="resume-text-center">
          <img src="FullStackCertificate.png" alt="Profile" style={{ width: '600px', height: '500px', marginBottom: '20px' }} />
        </div>
      </div>

    </div>
  );
};

export default Resume;
