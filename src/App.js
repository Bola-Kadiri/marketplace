import './App.css';
import Navbar from './Navbar/Navbar';
import About from './component/About'
import Service from './component/Service';
import Team from './component/Team'
import Radiography from './component/Radiography';
import Photography from './component/Photography';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './component/Footer/Footer';
import PhotoHouse from './component/PhotoHouse';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <div className="pages">
        <Routes>
           <Route path="/" element={<About/> } />
           <Route path="/service" element={<Service/> } />
           <Route path="/photography" element={<Photography/> } />
           <Route path="/radiography" element={<Radiography/> } />
           <Route path="/team" element={<Team/> } />
           <Route path="/PhotoConnet" element={<PhotoHouse/> } />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  </div>
  );
}

export default App;


