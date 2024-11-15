// App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import MachineRepairing from './components/MachineReparing';
import Footer from './components/Footer';
import DryCleaningRateList from './pages/DryClean';
import LaundryRateList from './pages/Laundry';
import LeatherJacket from './pages/LeatherJacket';
import FloatingButtons from './components/Floatingbutton';

// This component handles both scroll to top on route change and smooth scroll to sections
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on route changes without hash
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If a hash is present, scroll to the corresponding section smoothly
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler /> {/* Handles all scrolling behavior */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <About />
              <Contact />
            </>
          } />
          <Route path="/machine-repairing" element={<MachineRepairing />} />
          <Route path="/dry-cleaning-rates" element={<DryCleaningRateList />} />
          <Route path="/laundry-rates" element={<LaundryRateList />} />
          <Route path="/leather-Jacket-rates" element={<LeatherJacket />} />
        </Routes>
        <FloatingButtons/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
