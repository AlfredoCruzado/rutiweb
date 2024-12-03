import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Consultar las rutas desde el backend (base de datos PostgreSQL)
    //axios.get('http://localhost:8000/api/local-routes/')  // Cambiado a la URL correcta
    axios.get('http://localhost:8000/api/external-routes/')
      .then(response => {
        console.log(response.data);  // Añadido para depurar la respuesta
        setRutas(response.data);
      })
      .catch(err => setError('Error al cargar las rutas.'));
  }, []);

  const eliminarRuta = (id) => {
    axios.delete(`http://localhost:8000/api/rutas/delete/${id}/`)  // Corregido endpoint de eliminación
      .then(() => {
        setRutas(rutas.filter(ruta => ruta.id !== id));
      })
      .catch(_err => setError('Error al eliminar la ruta.'));
  };

  return (
    <div>
      <h1>Listado de Rutas</h1>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Conductor</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rutas.map(ruta => (
            <tr key={ruta.id}>
              <td>{ruta.id}</td>
              <td>{ruta.driverId}</td>
              <td>{ruta.date	}</td> 
              <td>
                <button onClick={() => window.location.href = `/editar-ruta/${ruta.id}`}>Editar</button>
                <button onClick={() => eliminarRuta(ruta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoRutas;
