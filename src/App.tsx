import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Education from './components/Education';
import WhatIBuild from './components/WhatIBuild';
import FeaturedProjects from './components/FeaturedProjects';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Introduction />
        <Education />
        <WhatIBuild />
        <FeaturedProjects />
        <OpenSource />
        <Skills />
        <SoftSkills />
        <CurrentlyLearning />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
