import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Contact from '../components/Contact';

const projects = [
  {
    id: 1,
    title: "Lena Toys",
    image: "/images/landing-page.png",
    description: "This project is a modern landing page built with React. It provides a visually appealing and responsive interface to showcase a product, service, or brand. The landing page features clean design, smooth navigation, and customizable sections to highlight key information and drive user engagement.",
    longDescription: "Designed and implemented a landing page UI from scratch based on a custom or provided design. Utilized React for component-based architecture, enabling modular and reusable UI elements. Applied CSS for styling, ensuring a modern and consistent look across devices. Structured the page to include sections such as a hero banner, features, testimonials, and a call-to-action. Focused on accessibility and performance for an optimal user experience. Ensured the layout is fully responsive, adapting seamlessly to mobile, tablet, and desktop screens.,Focused on accessibility and performance for an optimal user experience.Ensured the layout is fully responsive, adapting seamlessly to mobile, tablet, and desktop screens.",
    technologies: ["React", "JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/somayehkhanbabaei/Landing-page",
    demo: "https://somayehlandingpage.netlify.app/"
  },
  {
    id: 2,
    title: "Weather App",
    image: "/images/weather-app.png", 
    description: "This project is a modern weather dashboard built with **React**. It allows users to search for any city and view the current weather, a detailed hourly forecast, and a multi-day forecast. The app features a clean, responsive UI inspired by professional weather platforms.",
    longDescription: "- Designed and implemented a weather dashboard UI from scratch based on a custom design. - Integrated with the OpenWeatherMap API for real-time weather data. - Built a robust search and data-fetching flow, including error handling and loading states. - Developed custom scrollable and interactive components for hourly and daily forecasts. - Ensured the app is visually appealing, accessible, and easy to use.",
    technologies: ["React", "JavaScript", "CSS", "JavaScript (ES6+)","Fetch API", "OpenWeatherMap API","Modern UI/UX patterns"],
    github: "https://github.com/somayehkhanbabaei/WeatherApp",
    demo: "https://somayehweatherwebapp.netlify.app/" 
  },
 
  {
    id: 3,
    title: "Recipe Finder",
    image: "/images/recipe-finder.png", 
    description: "This project is a recipe finder application that allows users to search for recipes based on ingredients. It features a user-friendly interface and provides detailed information about each recipe, including ingredients, cooking instructions, and nutritional information.",
    longDescription: "Recipe Finder is a responsive web application that helps users easily discover recipes by searching with keywords or ingredients. It features a smooth and interactive user experience, including detailed recipe views in modals, real-time search results, and a modern, accessible design. The interface adapts seamlessly to all screen sizes, ensuring usability on both mobile and desktop. Clear feedback is provided during loading or error states to enhance user trust and experience. The application is built with React, utilizing the Fetch API to retrieve data from TheMealDB API, and styled with CSS for a clean and modern look. It is designed to be user-friendly, allowing anyone to find and explore recipes effortlessly.",
    technologies: ["React", "Node.js", "CSS"],
    github: "https://github.com/somayehkhanbabaei/recipe-finder",
    demo: "https://somayehrecipefinder.netlify.app/"
  },
  {
    id: 4,
    title: "Project Four",
    image: "/project4.png",
    description: "This is a short description of Project Four.",
    longDescription: "This is a detailed description of Project Four. Here you can write about your experience, challenges, and what you learned.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "JavaScript (ES6+)","Fetch API", "TheMealDB API"],
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
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-4">
          <Link to="/" className="inline-flex items-center px-4 py-2 mb-4 rounded-lg bg-gray-600 text-white font-semibold shadow hover:bg-gray-700 transition-colors">
            ← Back to Main Page
          </Link>
        </div>
        {/* Full-width image row */}
        <div className="w-full flex justify-center bg-gray-100 px-3">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-96 object-contain rounded-xl shadow-lg m-4"
            />
          ) : (
            <div className="w-full h-60 flex items-center justify-center text-gray-400 text-xl">
              {project.title + " Image"}
            </div>
          )}
        </div>
        {/* Details row */}
        <div className="p-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h1>
          <p className="text-lg text-gray-700"><strong>Short Description:</strong> {project.description}</p>
          <p className="text-gray-700 whitespace-pre-line"><strong>About this project:</strong> {project.longDescription}</p>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Technologies Used:</h3>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <li key={idx} className="bg-gray-200 rounded px-3 py-1 text-sm text-gray-700">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 mt-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-700 text-white font-semibold shadow hover:bg-gray-600 transition-colors">GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-600 text-white font-semibold shadow hover:bg-gray-700 transition-colors">Live Demo</a>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full max-w-3xl">
        <Contact />
      </div>
    </div>
  );
};

export default ProjectDetail;
