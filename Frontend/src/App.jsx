import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListadoRutas from './components/ListadoRutas';
import RutaFormulario from './components/RutaFormulario';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Gestión de Rutas</h1>
        <Routes>
          <Route path="/" element={<ListadoRutas />} />
          <Route path="/editar-ruta/:id" element={<RutaFormulario />} />
          <Route path="/crear-ruta" element={<RutaFormulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
