# Proyecto rutiweb
======================

## Descripción del proyecto
---------------------------

Este proyecto es una aplicación web que permite a los usuarios realizar operaciones básicas para la lectura de sus rutas y ediciones de las mismas .

## Funcionalidades
-----------------

* lea y editar rutas
* Agregar y eliminar tareas

## Requisitos previos
-------------------

* Tener instalado Node.js y npm
* Tener un entorno de desarrollo configurado en python 

## Instrucciones de uso
----------------------

1. Clonar el repositorio de GitHub
2. Instalar las dependencias con npm install
3. Arrancar el servidor con json-server --watch db.json --port 3000
4. Arrancar el servidor de desarrollo  Django con python3 manage.py runserver
5. Arrancar el servidor con npm start
6. Acceder al proyecto en el navegador

## Notas importantes
Base de datos: El proyecto está configurado para utilizar PostgreSQL. Asegúrate de que la base de datos esté correctamente configurada en el archivo settings.py.
JSON Server (para rutas externas): Si utilizas un servidor JSON para simular rutas externas, asegúrate de que esté activo y corriendo en http://localhost:3000/routes/.

## Contacto
------------

* Autor: Alfredo Cruzado
* Correo electrónico: [tu correo electrónico]
* GitHub: [https://github.com/AlfredoCruzado]

## Licencia
------------

Este proyecto está bajo la licencia [Licencia del proyecto]
