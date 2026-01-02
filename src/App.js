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
import ScrollautoUp from './components/layout/ScrollToTop/ScrollautoUp';
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/layout/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <>
    <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <WhatsAppButton />
      <ScrollautoUp />
      <Footer />
    </>
  );
}

export default App;
