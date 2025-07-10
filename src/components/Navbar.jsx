import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const projects = [
  { id: 1, title: "Lena Toys" },
  { id: 2, title: "Weather App" },
  { id: 3, title: "Recipe Finder" },
  { id: 4, title: "Project Four" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setProjectsOpen(false);
      }
    }
    if (projectsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [projectsOpen]);

  const handleProjectsToggle = (e) => {
    e.preventDefault();
    setProjectsOpen((open) => !open);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16 justify-between">
        <Link to="/" className="font-bold text-xl text-blue-600" onClick={closeMenu}>
          My Portfolio
        </Link>
        <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`md:flex md:items-center md:gap-8 absolute md:static left-0 top-16 w-full md:w-auto bg-white shadow-lg md:shadow-none transition-all duration-200 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 font-bold text-gray-700 transition-all duration-300 rounded hover:bg-blue-100 hover:text-blue-700 hover:scale-110"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <span
              onClick={handleProjectsToggle}
              className="block px-4 py-2 font-bold text-gray-700 transition-all duration-300 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-700 hover:scale-110"
              aria-haspopup="true"
              aria-expanded={projectsOpen}
              tabIndex={0}
            >
              My Projects
            </span>
            <ul className={`absolute left-0 mt-2 bg-white shadow-lg rounded w-48 z-10 ${projectsOpen ? '' : 'hidden'}`}>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/project/${project.id}`}
                    className="block px-4 py-2 font-bold text-gray-700 transition-all duration-300 rounded hover:bg-blue-100 hover:text-blue-700 hover:scale-110"
                    onClick={closeMenu}
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 font-bold text-gray-700 transition-all duration-300 rounded hover:bg-blue-100 hover:text-blue-700 hover:scale-110"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
