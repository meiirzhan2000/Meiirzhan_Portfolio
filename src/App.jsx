import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Jobs from './sections/JobsDone/JobsDone';
import Interests from './sections/Activities/Activities';
import MenuButton from './sections/MenuButton/MenuButton';
import ProjectsDetails from './sections/ProjectsDetails/ProjectsDetails';
import ActivityDetails from './sections/ActivityDetails/ActivityDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <MenuButton />
            <section id="hero">
              <Hero />
            </section>
            <section id="jobs">
              <Jobs />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="interests">
              <Interests />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </>
        } />
        <Route path="/ActivityDetails/:category" element={<ActivityDetails />} />
        <Route path="/projects-details/:category" element={<ProjectsDetails />} />
      </Routes>
    </>
  );
}


export default App;
