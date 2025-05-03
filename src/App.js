import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';
import OverseasRecruitment from './pages/OverseasRecruitment';
import ExecutiveSearch from './pages/ExecutiveSearch';
import TemporaryStaffing from './pages/TemporaryStaffing';
import HospitalityRecruitment from './pages/HospitalityRecruitment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overseas-recruitment" element={<OverseasRecruitment />} />
        <Route path="/executive-search" element={<ExecutiveSearch />} />
        <Route path="/temporary-staffing" element={<TemporaryStaffing />} />
        <Route path="/hospitality-recruitment" element={<HospitalityRecruitment />} />
      </Routes>
    </Router>
  );
}

export default App;
