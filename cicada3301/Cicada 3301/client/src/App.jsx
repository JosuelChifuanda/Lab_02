import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Poem1 from './pages/Challenges/Poem1';
import Poem2 from './pages/Challenges/Poem2';
import Terminal from './components/Terminal';
import NavBar from './components/NavBar';  // Importa NavBar
import './styles.css';

function App() {
  return (
    <div className="app-container">
      {/* Barra de navegação neon */}
      <NavBar />

      {/* Sistema de roteamento principal */}
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poem1" element={<Poem1 />} />
          <Route path="/poem2" element={<Poem2 />} />
        </Routes>
      </main>

      {/* Terminal interativo fixo */}
      <div className="terminal-wrapper">
        <Terminal />
      </div>
    </div>
  );
}

export default App;

