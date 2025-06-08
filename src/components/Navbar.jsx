import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const projects = [
  { id: 1, title: "Project One" },
  { id: 2, title: "Project Two" },
  { id: 3, title: "Project Three" },
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

  // Close dropdown when clicking outside
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

  // Toggle dropdown on click (desktop and mobile)
  const handleProjectsToggle = (e) => {
    e.preventDefault();
    setProjectsOpen((open) => !open);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          My Portfolio
        </Link>
        <div className="navbar-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links${menuOpen ? ' active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li
            className="navbar-projects"
            ref={dropdownRef}
          >
            <span
              onClick={handleProjectsToggle}
              aria-haspopup="true"
              aria-expanded={projectsOpen}
              tabIndex={0}
              style={{ userSelect: 'none' }}
            >
              My Projects
            </span>
            <ul className={`navbar-dropdown${projectsOpen ? ' show' : ''}`}>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/project/${project.id}`}
                    onClick={closeMenu}
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
