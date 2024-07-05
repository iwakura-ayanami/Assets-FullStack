# Sistema de Gestión de Pagos - Backend

Este proyecto la aplicación Backend para un Sistema de Gestión de Pagos, desarrollada con Django y Django REST Framework. Proporciona una API REST para manejar clientes, gestores y pagos, y se conecta a una base de datos PostgreSQL para cargar datos iniciales en una base de datos SQLite local.

## Características

- API REST para gestionar clientes, gestores y pagos
- Conexión a base de datos PostgreSQL para cargar datos iniciales
- Uso de SQLite como base de datos local
- Implementación de modelos, serializers y vistas en Django
- Manejo de migraciones de base de datos
- Documentación de API integrada

## Tecnologías Utilizadas

- Django
- Django REST Framework
- PostgreSQL (para carga inicial de datos)
- SQLite (como base de datos local)
- django-cors-headers
- python-decouple
- coreapi (para documentación de API)

## Instalación


1. Crea un entorno virtual

python -m venv venv

2. Activa el entorno virutal

source venv/bin/activate 

En Windows usa venv\Scripts\activate


3. Instala las dependencias:

pip install -r requirements.txt


3. Configura las variables de entorno:
- Crea un archivo `.env` en el directorio raíz del proyecto (Puedes guiarte con el .envexample)
- Añade las siguientes variables y ajusta sus valores:
  ```
  DATABASE=nombre_de_tu_base_de_datos
  USERNAME=tu_usuario_de_postgres
  PASSWORD=tu_contraseña_de_postgres
  HOST=tu_host_de_postgres
  ```

4. Realiza las migraciones:

python manage.py migrate


5. Carga los datos iniciales desde PostgreSQL a SQLite:

python manage.py import_data


6. Inicia el servidor:

python manage.py runserver


El servidor debería estar corriendo en `http://localhost:8000`.

## Estructura del Proyecto

### Backend

* api/
	+ migrations/
	+ init.py
	+ serializers.py
	+ urls.py
	+ views.py
* backend/
	+ init.py
	+ asgi.py
	+ settings.py
	+ urls.py
	+ wsgi.py
* core/
	+ management/
		- commands/
		- import_data.py
	+ migrations/
	+ init.py
	+ admin.py
	+ apps.py
	+ models.py
	+ tests.py

* .env
* db.sqlite3
* manage.py
* requirements.txt


## Componentes Principales

- `api/`: Contiene la implementación de la API REST.
  - `serializers.py`: Define los serializadores para la API.
  - `views.py`: Contiene las vistas de la API usando ViewSets.
  - `urls.py`: Define las rutas de la API usando DefaultRouter.

- `core/`: Maneja los modelos de datos y la carga de datos desde PostgreSQL.
  - `models.py`: Define los modelos Cliente, Gestor y Pago.
  - `management/commands/import_data.py`: Comando personalizado para importar datos desde PostgreSQL a SQLite.

- `backend/`: Contiene la configuración principal del proyecto Django.
  - `settings.py`: Configuraciones del proyecto, incluyendo bases de datos y CORS.
  - `urls.py`: URLs principales del proyecto.

## Configuración de la Base de Datos

El proyecto utiliza PostgreSQL para cargar datos iniciales y SQLite como base de datos local. Las credenciales de PostgreSQL se configuran en el archivo `.env`.

## API Endpoints

- `/api/clientes/`: Endpoints para manejar clientes
- `/api/gestores/`: Endpoints para manejar gestores
- `/api/pagos/`: Endpoints para manejar pagos
- `/api/docs/`: Documentación de la API

## Documentación de la API

La documentación de la API está disponible en `/api/docs/`. Esta documentación se genera automáticamente utilizando coreapi.

## Notas Adicionales

- Asegúrate de que CORS está correctamente configurado para tu entorno de producción.
- No se implemento autenticación para los endpoints de la API para este proyecto.
