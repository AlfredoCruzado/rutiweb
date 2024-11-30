import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';


const App = () => {
    const [externalRoutes, setExternalRoutes] = useState([]);
    const [localRoutes, setLocalRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Consultar rutas externas
                const externalResponse = await axios.get('http://localhost:8000/api/external-routes/');
                setExternalRoutes(externalResponse.data);

                // Consultar rutas locales
                const localResponse = await axios.get('http://localhost:8000/api/local-routes/');
                setLocalRoutes(localResponse.data);

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
        <h1>Rutas Externas</h1>
        <table>
            <thead>
                <tr>
                    <th>Ruta</th>
                    <th>conductor</th>
                    <th>Fecha</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                {externalRoutes.map((route) => (
                    <tr key={route.id}>
                        <td>{route.id}</td>
                        <td>{route.driverId}</td>
                        <td>{route.date	}</td>
                        <td>{route.note	}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h1>Rutas Locales</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                {localRoutes.map((route) => (
                    <tr key={route.id}>
                        <td>{route.id}</td>
                        <td>{route.nombre}</td>
                        <td>{route.detalle}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default App;
