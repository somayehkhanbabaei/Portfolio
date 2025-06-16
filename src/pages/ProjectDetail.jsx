import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Contact from '../components/Contact';
import '../styles/ProjectDetail.css';

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: "/images/weather-app.png", // Ensure this path is correct
    description: "This project is a modern weather dashboard built with **React**. It allows users to search for any city and view the current weather, a detailed hourly forecast, and a multi-day forecast. The app features a clean, responsive UI inspired by professional weather platforms.",
    longDescription: "- Designed and implemented a weather dashboard UI from scratch based on a custom design. - Integrated with the OpenWeatherMap API for real-time weather data. - Built a robust search and data-fetching flow, including error handling and loading states. - Developed custom scrollable and interactive components for hourly and daily forecasts. - Ensured the app is visually appealing, accessible, and easy to use.",
    technologies: ["React", "JavaScript", "CSS", "JavaScript (ES6+)","Fetch API", "OpenWeatherMap API","Modern UI/UX patterns"],
    github: "https://github.com/somayehkhanbabaei/WeatherApp",
    demo: "https://somayehweatherwebapp.netlify.app/" // <-- Updated demo link
  },
  {
    id: 2,
    title: "Project Two",
    image: "/project2.png",
    description: "This is a short description of Project Two.",
    longDescription: "This is a detailed description of Project Two. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "HTML", "CSS"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://demo-link.com"
  },
  {
    id: 3,
    title: "Project Three",
    image: "/project3.png",
    description: "This is a short description of Project Three.",
    longDescription: "This is a detailed description of Project Three. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "Node.js", "CSS"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://demo-link.com"
  },
  {
    id: 4,
    title: "Project Four",
    image: "/project4.png",
    description: "This is a short description of Project Four.",
    longDescription: "This is a detailed description of Project Four. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project-four",
    demo: "https://demo-link.com"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === id);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-card">
          <h1>Project Not Found</h1>
          <Link to="/" className="back-button">← Back to Projects</Link>
        </div>
        <Contact />
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-card">
        <Link to="/" className="back-button">← Back to Projects</Link>
        <div className="project-detail-image-top">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-detail-main-image"
            />
          ) : (
            project.title + " Image"
          )}
        </div>
        <div className="project-detail-info">
          <h1>{project.title}</h1>
          <p><strong>Short Description:</strong> {project.description}</p>
          <p><strong>About this project:</strong> {project.longDescription}</p>
          <h3>Technologies Used:</h3>
          <ul>
            {project.technologies.map((tech, idx) => <li key={idx}>{tech}</li>)}
          </ul>
          <div className="project-detail-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button">Live Demo</a>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ProjectDetail;
