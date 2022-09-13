import './App.css';
import React from 'react';
import Header from "./components/Header";
import Home from './Home';
import About from './Aboutus';
import Import from './Import';
import Export from './Export';
import Certificate from './Certificate';
import Quality from './Quality';
import Contact from './Contactus';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="aboutus" element={<About />} />
        <Route path="Import" element={<Import />} />
        <Route path="Export" element={<Export />} />
        <Route path="Certificate" element={<Certificate />} />
        <Route path="Quality" element={<Quality />} />
        <Route path="contact" element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
