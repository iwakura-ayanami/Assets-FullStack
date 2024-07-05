from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, GestorViewSet, PagoViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'gestores', GestorViewSet)
router.register(r'pagos', PagoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]