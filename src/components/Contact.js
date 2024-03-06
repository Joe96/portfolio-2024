import React from 'react';
import './../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="style-page container-fluid d-flex justify-content-center align-items-center vh-100">

      <div className="px-3 d-flex justify-content-center align-items-center flex-column">
        <h2 className="web-text">Contact Me:</h2>
        <div className="border-right px-3 d-flex justify-content-center flex-column">
          <p className="web-text">Email: UkwuaniAniocha@outlook.com</p>
          <p className="web-text">Phone: (763) 486-3463</p>
          <div className="d-flex align-items-center">
            <p className="web-text mr-2">Connect with me on linkedin:</p>
            <a href="https://www.linkedin.com/in/joelafamefune/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <div className="d-flex align-items-center">
            <p className="web-text mr-2">Connect with me on github:</p>
            <a href="https://github.com/Joe96" className="dark-icon icon-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="border-right px-3 d-flex justify-content-center align-items-center flex-column">
        <img src="IMG_0070-removebg.png" alt="Profile" style={{ width: '300px', height: '400px', borderRadius: '50%', marginBottom: '20px' }} />
      </div>

    </div>
  );
};

export default Contact;
