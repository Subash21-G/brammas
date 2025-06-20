// import Header from "./components/header.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Admin from './admin/admin.js';
import Contactus from './content/contactus.js'
import Gallery from './gallery/gallery.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Annual from './gallery/annual.js';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Admin />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Gallery" element={<Gallery/> } />
        <Route path="/annual" element={<Annual />} />
      </Routes>
    </Router>
  );
}

export default App;
