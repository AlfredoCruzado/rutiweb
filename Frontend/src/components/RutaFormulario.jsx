import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const RutaFormulario = () => {
  const { id } = useParams(); // Obtener el ID de la ruta (si es edición)
  const navigate = useNavigate();
  const [ruta, setRuta] = useState({
    nombre: '',
    notas: '',
    fecha_programada: '',
    conductor: ''
  });
  const [error, setError] = useState(null);

  // Cargar la ruta existente si estamos en edición
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/external-routes/${id}/`)
        .then(response => setRuta(response.data))
        .catch(err => setError('No se pudo cargar la ruta.'));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRuta({ ...ruta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:8000/api/routes/${id}/`
      : 'http://localhost:8000/api/routes/create/';
    const method = id ? 'put' : 'post';

    axios[method](url, ruta)
      .then(() => navigate('/')) // Volver al listado de rutas
      .catch(err => setError('No se pudo guardar la ruta.'));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/routes/${id}/delete/`)
      .then(() => navigate('/')) // Volver al listado de rutas después de eliminar
      .catch(err => setError('No se pudo eliminar la ruta.'));
  };

  return (
    <div>
      <h1>{id ? 'Editar Ruta' : 'Crear Ruta'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="route_id"
            value={ruta.id}
            onChange={handleChange}
            placeholder="ID de la ruta"
            disabled={id}  // El ID no se puede modificar si estamos editando
            required
          />
        </label>
        <br />
        <label>
          Notas:
          <textarea
            name="notas"
            value={ruta.notas}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Fecha Programada:
          <input
            type="date"
            name="fecha_programada"
            value={ruta.fecha_programada}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Conductor:
          <input
            type="text"
            name="conductor"
            value={ruta.conductor}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">{id ? 'Guardar Cambios' : 'Crear Ruta'}</button>
        {id && <button type="button" onClick={handleDelete}>Eliminar Ruta</button>}
      </form>
    </div>
  );
};

export default RutaFormulario;
