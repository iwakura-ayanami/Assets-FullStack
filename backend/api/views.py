from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from core.models import Cliente, Gestor, Pago
from .serializers import ClienteSerializer, GestorSerializer, PagoSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class GestorViewSet(viewsets.ModelViewSet):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer

class PagoViewSet(viewsets.ModelViewSet):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer