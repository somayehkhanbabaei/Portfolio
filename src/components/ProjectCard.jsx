import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, image, description }) => (
  <div className="w-full bg-white rounded-2xl shadow-2xl flex items-stretch overflow-hidden mb-10 min-h-[260px] h-72">
    {/* Left: Image (exact size of image) */}
    <div className="flex items-center justify-center bg-gray-100 flex-shrink-0 h-full">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-full max-h-64 w-auto object-contain"
        />
      ) : (
        <span className="text-gray-400">{title} Image</span>
      )}
    </div>
    {/* Right: Description (grows to fill remaining space) */}
    <div className="grow flex flex-col justify-center items-center p-8 min-w-[200px] h-full">
      <h3 className="text-xl font-bold mb-2 text-gray-600 text-center">{title}</h3>
      <p className="text-gray-700 text-md mb-4 text-center">{description}</p>
      <Link
        to={`/project/${id}`}
        className="inline-block px-4 py-2 bg-gray-600 text-white font-bold rounded shadow hover:bg-gray-700 transition"
      >
        More Details
      </Link>
    </div>
  </div>
);

export default ProjectCard;
