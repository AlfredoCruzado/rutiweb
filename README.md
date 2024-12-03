# Listar el contenido del directorio Backend
backend_path = os.path.join(project_path, 'Backend')
backend_contents = os.listdir(backend_path)

# Listar el contenido del directorio Frontend
frontend_path = os.path.join(project_path, 'Frontend')
frontend_contents = os.listdir(frontend_path)

backend_contents, frontend_contents
