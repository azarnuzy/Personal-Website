import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
