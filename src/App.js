import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/nvk" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
