from django.db import models

# Create your models here.

from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Gestor(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Pago(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    gestor = models.ForeignKey(Gestor, on_delete=models.CASCADE)
    rut = models.CharField(max_length=20)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    f_pago = models.DateField()
    abonos = models.IntegerField()

    def __str__(self):
        return f"Pago de {self.cliente} gestionado por {self.gestor}"
    

