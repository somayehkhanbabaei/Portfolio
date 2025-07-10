import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Lena Toys",
    image: "/images/landing-page.png",
    description: "This project is a modern landing page built with React. It provides a visually appealing and responsive interface to showcase a product, service, or brand. The landing page features clean design, smooth navigation, and customizable sections to highlight key information and drive user engagement",
  },
  {
    id: 2,
    title: "Weather App",
    image: "/images/weather-app.png",
    description: "This project is a modern weather dashboard built with React. It allows users to search for any city and view the current weather, a detailed hourly forecast, and a multi-day forecast. The app features a clean, responsive UI inspired by professional weather platforms.",
  },
  {
    id: 3,
    title: "Recipe Finder",
    image: "/images/recipe-finder.png",
    description: "This project is a recipe finder application that allows users to search for recipes based on ingredients. It features a user-friendly interface and provides detailed information about each recipe, including ingredients, cooking instructions, and nutritional information.",
  }
];

const Projects = () => (
  <section className="my-12">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">My Projects</h2>
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
