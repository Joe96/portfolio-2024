// Home.js
import React from 'react';
import './../styles/styles.css'

const Home = () => {
  return (
    <div className="style-page container-fluid d-flex justify-content-center align-items-center vh-100"> {/* Use Bootstrap classes */}
      <div className="text-center">
        <h1 className="web-text">Hello World!</h1>
        <img src="IMG_0070-removebg.png" alt="Profile" style={{ width: '400px', height: '500px', borderRadius: '50%', marginBottom: '20px' }} />
        <h3 className="web-text">My name is Joel Afamefune.</h3>
        <h6 className="web-text">I am a fullstack developer.</h6>
      </div>
    </div>
  );
};

export default Home;
