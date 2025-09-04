import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetail from './Components/Services/ServiceDetail/ServiceDetail';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/services/:id" element={<ServiceDetail />} /> 
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
