import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ResumeContent from './components/Resume/ResumeContent';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portofolio" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
