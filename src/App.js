import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetail from './Components/Services/ServiceDetail/ServiceDetail';
import ScrollToTop from './ScrollToTop';
import Gallery from './Components/Gallery/Gallery';
import MakeAppointment from './Components/MakeAppointment/MakeAppointment';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/make-an-appointment" element={<MakeAppointment />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/services/:id" element={<ServiceDetail />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
