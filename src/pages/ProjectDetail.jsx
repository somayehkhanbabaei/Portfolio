import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a detailed description of Project One. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername/project-one",
    demo: "https://demo-link.com"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a detailed description of Project Two. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "HTML", "CSS"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://demo-link.com"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a detailed description of Project Three. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "Node.js", "CSS"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://demo-link.com"
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is a detailed description of Project Four. Here you can write about your experience, challenges, and what you learned.",
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
      <div className="project-detail">
        <h1>Project Not Found</h1>
        <Link to="/" className="back-button">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-button">← Back to Projects</Link>
      <div className="project-detail-content">
        <div className="project-detail-image">
          {project.title} Image
        </div>
        <div className="project-detail-info">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
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
    </div>
  );
};

export default ProjectDetail;
