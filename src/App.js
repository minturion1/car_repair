import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetail from './Components/Services/ServiceDetail/ServiceDetail';
import ScrollToTop from './ScrollToTop';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/services/:id" element={<ServiceDetail />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
