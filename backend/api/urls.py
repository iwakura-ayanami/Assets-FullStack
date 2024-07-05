from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls
from .views import ClienteViewSet, GestorViewSet, PagoViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'gestores', GestorViewSet)
router.register(r'pagos', PagoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='API Documentation')),
]