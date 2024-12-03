# Proyecto RutiWeb

Este proyecto es una aplicación web para la gestión de rutas, desarrollada utilizando **Django** como backend y **React** como frontend. La base de datos utilizada es **PostgreSQL**.

---

## **Descripción General**
RutiWeb es una plataforma que permite realizar las siguientes acciones relacionadas con rutas:
- Listar rutas disponibles desde una API externa.
- Gestionar rutas locales almacenadas en una base de datos PostgreSQL.
- Crear, editar y eliminar rutas.

---

## **Requisitos Previos**

### **Software Necesario**
1. **Python 3.8 o superior**  
   - Asegúrate de que Python esté instalado y accesible desde la línea de comandos.  
   [Descargar Python](https://www.python.org/downloads/)

2. **Node.js y npm (Node Package Manager)**  
   - Node.js se utiliza para ejecutar el entorno de desarrollo de React.  
   [Descargar Node.js](https://nodejs.org/)

3. **PostgreSQL**  
   - Base de datos relacional para almacenar datos de la aplicación.  
   [Descargar PostgreSQL](https://www.postgresql.org/download/)

4. **Git**  
   - Para clonar el repositorio si se distribuye por este medio.  
   [Descargar Git](https://git-scm.com/)

5. **Virtualenv (opcional)**  
   - Herramienta para crear entornos virtuales de Python.  
   Se instala con:
     ```bash
     pip install virtualenv
     ```

### **Dependencias del Proyecto**
1. **Backend (Django)**  
   - Framework Django instalado junto con las librerías requeridas (indicadas en `requirements.txt`).  
   - Instalar dependencias ejecutando:  
     ```bash
     pip install -r requirements.txt
     ```

2. **Frontend (React)**  
   - React con sus librerías dependientes (indicadas en `package.json`).  
   - Instalar dependencias ejecutando:  
     ```bash
     npm install
     ```

### **Otros Requisitos**
- **Conexión a Internet** para descargar dependencias.
- Configurar las variables de entorno necesarias (como las credenciales para PostgreSQL).

---

## **Pasos para la Instalación y Ejecución**

### **Backend**
1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-directorio>
   
2. Crear un entorno virtual:
   ```bash
   virtualenv venv```
   
4. Instalar las dependencias:
   ```bash
   pip install -r requirements.txt```

6. Realizar las migraciones:
   ```bash
   python manage.py makemigrations
   python manage.py migrate```

8. Ejecutar el servidor de desarrollo:
   ```bash
   python manage.py runserver```

## **Frontend**
1. Navegar al directorio del frontend:
   ```bash
   cd frontend```

3. Instalar las dependencias:
   ```bash
   npm install```
   
5. Ejecutar el servidor de desarrollo de React:
   ```bash
   npm start```
   
##Funcionalidades Principales

1. Listado de Rutas Externas
    Consulta rutas disponibles desde un servicio externo.
   
3. Gestión de Rutas Locales
    Crear: Permite añadir nuevas rutas.
    Editar: Modifica rutas existentes.
    Eliminar: Elimina rutas de la base de datos.
   
4. Integración Backend y Frontend
   Los datos gestionados por el backend en Django se consumen directamente en el frontend de React.


## Notas importantes
Base de datos: El proyecto está configurado para utilizar PostgreSQL. Asegúrate de que la base de datos esté correctamente configurada en el archivo settings.py.
JSON Server (para rutas externas): Si utilizas un servidor JSON para simular rutas externas, asegúrate de que esté activo y corriendo en http://localhost:3000/routes/.

## Contacto
------------

* Autor: [Alfredo Cruzado]
* Correo electrónico: [Alfredo.c12@hotmail.com]
* GitHub: [https://github.com/AlfredoCruzado]

## Licencia
------------

Este proyecto está bajo la licencia [Licencia del proyecto]
