from django.core.management.base import BaseCommand
from django.db import connections
from core.models import Cliente, Gestor, Pago
from datetime import date

class Command(BaseCommand):
    help = 'Import data from tabla_cubo in PostgreSQL to local SQLite models'

    def handle(self, *args, **options):
        # Usar la conexión 'default' (PostgreSQL) para leer los datos
        with connections['default'].cursor() as cursor:
            cursor.execute("SELECT * FROM tabla_cubo")
            rows = cursor.fetchall()

            for row in rows:
                # Crear o obtener Cliente y Gestor en SQLite
                cliente, _ = Cliente.objects.using('sqlite').get_or_create(nombre=row[0])
                gestor, _ = Gestor.objects.using('sqlite').get_or_create(nombre=row[2])
                
                print(f"Tipo de row[4]: {type(row[4])}, Valor: {row[4]}")

                # row[4] ya es un objeto date, no necesitamos convertirlo
                f_pago = row[4]
                
                # Crear Pago en SQLite
                Pago.objects.using('sqlite').create(
                    cliente=cliente,
                    gestor=gestor,
                    rut=row[1],
                    monto=row[3],
                    f_pago=f_pago,
                    abonos=row[5]
                )

        self.stdout.write(self.style.SUCCESS('Successfully imported data from PostgreSQL to SQLite'))