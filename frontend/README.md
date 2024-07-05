# Sistema de Gestión de Pagos - Frontend

Este proyecto la aplicación Frontend para un visualizar un Sistema de Gestión de Pagos, desarrollada con React y Bootstrap. Permite visualizar clientes, gestores, pagos y estadísticas relacionadas. De un Backend construido con Django.

## Características

- Visualización de lista de clientes
- Visualización de lista de gestores
- Tabla de pagos con detalles
- Estadísticas generales incluyendo:
  - Total de pagos
  - Monto total a cobrar
  - Total de abonos recibidos
  - Pendiente por cobrar
- Estadísticas por gestor

## Tecnologías Utilizadas

- React
- React Bootstrap
- Axios para llamadas a la API

## Instalación 



1. Instala las dependencias:

npm install


2. Inicia la aplicación:

npm run dev

La aplicación debería estar corriendo en `http://localhost:3000`.



## Estructura del Proyecto

### Public

* `index.html`: Archivo de entrada del proyecto, que se carga en el navegador.

### Src

* `components`: Carpeta que contiene los componentes reutilizables del proyecto.
	+ `ClientesList.js`: Componente que lista los clientes.
	+ `GestoresList.js`: Componente que lista los gestores.
	+ `PagosList.js`: Componente que lista los pagos.
	+ `Estadisticas.js`: Componente que muestra estadísticas del proyecto.
* `hooks`: Carpeta que contiene los hooks personalizados del proyecto.
	+ `useApi.js`: Hook que se encarga de manejar la API del proyecto.
* `services`: Carpeta que contiene los servicios del proyecto.
	+ `api.js`: Servicio que se encarga de interactuar con la API del proyecto.
* `App.js`: Archivo que contiene la aplicación principal del proyecto.
* `index.js`: Archivo que se encarga de inicializar la aplicación.

### Package

* `package.json`: Archivo que contiene la configuración del proyecto, incluyendo dependencias y scripts.

## Funcionalidad de los Componentes Principales

- `App.js`: Componente principal que organiza la estructura de la aplicación.
- `ClientesList.js`: Muestra la lista de clientes.
- `GestoresList.js`: Muestra la lista de gestores.
- `PagosList.js`: Muestra la tabla de pagos.
- `Estadisticas.js`: Muestra las estadísticas generales y por gestor.

## Hooks Personalizados

- `useApi.js`: Hook para manejar las llamadas a la API y el estado de los datos.

## Servicios

- `api.js`: Contiene las funciones para realizar llamadas a la API.

## Configuración del Backend

Asegúrate de que la URL de la API en `src/services/api.js` apunte a tu servidor backend (En este caso la REST API de Django esta configurada para correr en el puerto 8000/api):

const API_URL = 'http://localhost:8000/api';