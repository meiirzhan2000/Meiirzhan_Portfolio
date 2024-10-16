import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Jobs from './sections/Jobs/Jobs';

function App() {
  return (
    <>
      <Hero />
      <Jobs/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;