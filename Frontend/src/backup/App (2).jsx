import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [externalRoutes, setExternalRoutes] = useState([]);
    const [localRoutes, setLocalRoutes] = useState([]);

    useEffect(() => {
        // Consultar rutas externas
        axios.get('http://localhost:8000/api/external-routes/')
            .then(response => setExternalRoutes(response.data))
            .catch(error => console.error(error));

        // Consultar rutas locales
        axios.get('http://localhost:8000/api/local-routes/')
            .then(response => setLocalRoutes(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Rutas Externas</h1>
            <ul>
                {externalRoutes.map(route => (
                    <li key={route.id}>{route.origin} -{'>'} {route.destination}</li>
                ))}
            </ul>

            <h1>Rutas Locales</h1>
            <ul>
                {localRoutes.map(route => (
                    <li key={route.id}>{route.origin} -{'>'} {route.destination}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
