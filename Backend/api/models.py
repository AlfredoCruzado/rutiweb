from django.db import models

class Route(models.Model):
    ruta = models.CharField(max_length=100)
    conductor = models.CharField(max_length=255)
    fecha_programada = models.DateField()
    notas = models.TextField()
    
    def __str__(self):
        return self.ruta 
    
    
class RutaLocal(models.Model):
    ruta = models.CharField(max_length=100)
    conductor = models.CharField(max_length=255)
    fecha_programada = models.DateField()
    notas = models.TextField()

    def __str__(self):
        return self.ruta
