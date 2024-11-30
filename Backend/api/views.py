from django.shortcuts import render
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Route
from .serializers import RouteSerializer
from .models import RutaLocal
from .serializers import RutaLocalSerializer
from rest_framework import status


class ExternalRoutes(APIView):
    def get(self, request):
        # Consumir el servicio externo (JSON Server)
        external_api = 'http://localhost:3000/routes/'
        response = requests.get(external_api)
        data = response.json()
        return Response(data)

class LocalRoutes(APIView):
    def get(self, request):
        routes = Route.objects.all()
        print(routes)
        serializer = RouteSerializer(routes, many=True)
        return Response(serializer.data)

class ListarRutasView(APIView):
    def get(self, request):
        rutas = RutaLocal.objects.all()
        print(rutas)
        serializer = RutaLocalSerializer(rutas, many=True)
        return Response(serializer.data)
    
class CrearRutaView(APIView):
    def post(self, request):
        serializer = RutaLocalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EditarRutaView(APIView):
    def get(self, request, pk):
        try:
            ruta = RutaLocal.objects.get(pk=pk)
            serializer = RutaLocalSerializer(ruta)
            return Response(serializer.data)
        except RutaLocal.DoesNotExist:
            return Response({"error": "Ruta no encontrada"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            ruta = RutaLocal.objects.get(pk=pk)
            serializer = RutaLocalSerializer(ruta, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except RutaLocal.DoesNotExist:
            return Response({"error": "Ruta no encontrada"}, status=status.HTTP_404_NOT_FOUND)

class EliminarRutaView(APIView):
    def delete(self, request, pk):
        try:
            ruta = RutaLocal.objects.get(pk=pk)
            ruta.delete()
            return Response({"message": "Ruta eliminada"}, status=status.HTTP_204_NO_CONTENT)
        except RutaLocal.DoesNotExist:
            return Response({"error": "Ruta no encontrada"}, status=status.HTTP_404_NOT_FOUND)

