import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './pages/connexion';
import Archives from './pages/archives';
import Identite from './pages/fiche/identite';
import Psycho from './pages/fiche/psycho';
import Physique from './pages/fiche/physique';
import Equipement from './pages/fiche/equipement';
import Plus from './pages/fiche/plus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/dallastest">
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archives" element={<Archives />} />

        <Route path="/home/equipements" element={<Equipement />} />
        <Route path="/home/identite" element={<Identite />} />
        <Route path="/home/autres" element={<Plus />} />
        <Route path="/home/psychologique" element={<Psycho />} />
        <Route path="/home/apparence" element={<Physique />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
