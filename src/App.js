import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-black w-full h-full text-white">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/skills" element={ <Skills/> } />
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
