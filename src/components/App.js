import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import projectData from './data/projects'; // Assuming you have a file with project data

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />
    </div>
  );
};

export default App;
