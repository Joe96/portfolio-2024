// Projects.js
import React from 'react';
import './../styles/styles.css'
import Card from './Card';


const Projects = () => {
  return (

    <div>

      <div div className="style-page container-fluid d-flex justify-content-center align-items-center pt-5"><h2 className="web-text">Projects</h2></div>
 
      <div div className="style-page container-fluid d-flex justify-content-center align-items-center">

        <div className="projects">
          <div className="project-cards">
            <Card
              img="logo192.png"
              title="Project 1"
              description="This is the description of Project 1."
            />
            <Card
              img="logo192.png"
              title="Project 2"
              description="This is the description of Project 2."
            />
            <Card
              img="logo192.png"
              title="Project 3"
              description="This is the description of Project 3."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
