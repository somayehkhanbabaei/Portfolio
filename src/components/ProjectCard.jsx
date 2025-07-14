import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, image, description }) => (
  <div className="w-full bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row items-stretch overflow-hidden mb-10 min-h-[260px] h-100 project-card-mobile">
    {/* Image row */}
    <div className="flex items-stretch w-full h-60 sm:h-[350px]">
      {/* Left: Image (60%) */}
      <div className="w-[60%] h-full flex items-start justify-start">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-gray-400">{title} Image</span>
        )}
      </div>
      {/* Right: Details (40%) */}
      <div className="w-[40%] flex flex-col justify-center items-center p-8 min-w-[200px] h-full">
        <h3 className="font-bold mb-2 text-gray-600 text-center">{title}</h3>
        <p className="text-gray-700 mb-4 text-center">{description}</p>
        <div className="w-full flex justify-end">
          <Link
            to={`/project/${id}`}
            className="inline-block px-4 py-2 bg-gray-600 text-white font-bold rounded shadow hover:bg-gray-700 transition"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
