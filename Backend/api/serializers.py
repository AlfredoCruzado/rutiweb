from rest_framework import serializers
from .models import Route
from .models import RutaLocal

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'
        
class RutaLocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = RutaLocal
        fields = ['id', 'ruta', 'conductor', 'fecha_programada', 'notas']