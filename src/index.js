import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './pages/connexion';
import Archives from './pages/archives';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Router>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/archives" element={<Archives />} />

          <Route path="/home/equipements" element={<Archives />} />
          <Route path="/home/identite" element={<Archives />} />
          <Route path="/home/autres" element={<Archives />} />
          <Route path="/home/physchologique" element={<Archives />} />
          <Route path="/home/apparence" element={<Archives />} />
        </Routes>
      </Router>

  </React.StrictMode>
);


