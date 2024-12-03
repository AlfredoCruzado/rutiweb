"""
URL configuration for Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import ExternalRoutes, LocalRoutes
from api.views import ListarRutasView, CrearRutaView, EditarRutaView, EliminarRutaView
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        "message": "Bienvenido a la API",
        "endpoints": [
            "api/external-routes/",
            "api/local-routes/",
            "api/routes/",
        ],
    })


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/external-routes/', ExternalRoutes.as_view()),
    path('api/local-routes/', LocalRoutes.as_view(), name='rutas-list'),
    path('api/routes/', ListarRutasView.as_view(), name='listar-rutas'),
    path('api/routes/create/', CrearRutaView.as_view(), name='crear-ruta'),
    path('api/routes/<int:pk>/', EditarRutaView.as_view(), name='editar-ruta'),
    path('api/routes/<int:pk>/delete/', EliminarRutaView.as_view(), name='eliminar-ruta'),
    path('api/', api_root),  # Ruta para "api/"
    
]
