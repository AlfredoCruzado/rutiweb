import requests
from django.db import models
from api.models import models

def cargar_datos_api():
    # URL de la API externa
    url = 'http://localhost:8000/api/external-routes/'
    response = requests.get(url)
    
    if response.status_code == 200:
        Route = response.json()
        for item in Route:
            # Guarda los datos en la base de datos
            Route.objects.update_or_create(
                id_externo=item["id"],  
                defaults={
                    "driverId": item["conductor"],
                    "date": item["fecha_programada"],
                    "notes": item["notas"],
                },
            )
    else:
        print(f"Error al obtener datos: {response.status_code}")
