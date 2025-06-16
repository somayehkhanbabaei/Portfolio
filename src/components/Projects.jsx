import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: "/images/weather-app.png",
    description: "This project is a modern weather dashboard built with React. It allows users to search for any city and view the current weather, a detailed hourly forecast, and a multi-day forecast. The app features a clean, responsive UI inspired by professional weather platforms.",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a short description of Project Two. It highlights the main features and technologies used.",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a short description of Project Three. It highlights the main features and technologies used.",
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a short description of Project Four. It highlights the main features and technologies used.",
  },
];

const Projects = () => (
  <section className="projects-section">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="project-item" key={project.id}>
          <div className="project-image-placeholder">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-main-image"
              />
            ) : (
              <span>{project.title} Image</span>
            )}
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/project/${project.id}`} className="project-detail-btn">
              More Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
