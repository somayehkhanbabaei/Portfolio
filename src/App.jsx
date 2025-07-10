import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

const App = () => (
  <Router>
    <div className="app bg-white min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto responsive-padding">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </main>
    </div>
  </Router>
);

export default App;
