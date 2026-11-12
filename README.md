# ProdHub — Backend (REST API)

[English](#english) | [Español](#español)

---

<a name="english"></a>

## English

Backend server and REST API for **ProdHub**, a full-stack product management application built with the PERN stack (PostgreSQL, Express, React, and Node.js).

### What the project does

This repository contains the server-side application responsible for managing a product catalog. The goal of this backend is to provide a clean, reliable REST API that handles all data operations, validates incoming requests, connects to a relational database, and includes automated tests and API documentation.

### Tech Stack

* **Runtime & Framework:** Node.js, Express 5
* **Language:** TypeScript
* **Database & ORM:** PostgreSQL, Sequelize, sequelize-typescript
* **Validation:** express-validator
* **Utilities & Development Tools:** dotenv, colors, Nodemon, tsx
* **Testing & Documentation:** Jest, Supertest, Swagger / OpenAPI *(planned)*

### Roadmap

- [x] Initial server setup with Express, TypeScript, and Nodemon
- [x] Modular routing and HTTP methods (GET, POST, PUT, PATCH, DELETE)
- [x] PostgreSQL database connection with Sequelize and environment variables
- [x] Product database model definition with TypeScript decorators
- [x] Request validation middleware for incoming data
- [ ] Complete CRUD controllers and database operations
- [ ] Automated API testing and code coverage
- [ ] Interactive API documentation with Swagger
- [ ] CORS configuration and request logging for frontend integration

### Local Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ThePuchadesProject/prodhub_backend.git
   cd prodhub_backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment variables using the template:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set your PostgreSQL connection string in `DATABASE_URL`.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The API will run locally at `http://localhost:4000`.

---

<a name="español"></a>

## Español

Servidor backend y REST API para **ProdHub**, una aplicación full-stack de administración de productos construida con el stack PERN (PostgreSQL, Express, React y Node.js).

### Qué hace el proyecto

Este repositorio contiene la parte del servidor encargada de gestionar un catálogo de productos. El objetivo de este backend es ofrecer una REST API clara y fiable que gestione las operaciones de datos, valide la información recibida, se conecte a una base de datos relacional e incluya pruebas automatizadas y documentación.

### Tech Stack

* **Entorno y Framework:** Node.js, Express 5
* **Lenguaje:** TypeScript
* **Base de datos y ORM:** PostgreSQL, Sequelize, sequelize-typescript
* **Validación:** express-validator
* **Utilidades y Herramientas de desarrollo:** dotenv, colors, Nodemon, tsx
* **Testing y Documentación:** Jest, Supertest, Swagger / OpenAPI *(planificado)*

### Roadmap

- [x] Configuración inicial del servidor con Express, TypeScript y Nodemon
- [x] Enrutamiento modular y métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- [x] Conexión a base de datos PostgreSQL con Sequelize y variables de entorno
- [x] Definición del modelo de productos en base de datos con decoradores de TypeScript
- [x] Middleware de validación de datos de entrada en las peticiones
- [ ] Controladores CRUD completos y operaciones en base de datos
- [ ] Testing automatizado de endpoints y cobertura de código
- [ ] Documentación interactiva de la API con Swagger
- [ ] Configuración de CORS y registro de peticiones (logging) para conectar con el frontend

### Instalación local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/ThePuchadesProject/prodhub_backend.git
   cd prodhub_backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura tus variables de entorno a partir de la plantilla:
   ```bash
   cp .env.example .env
   ```
   Abre el archivo `.env` y añade tu cadena de conexión de PostgreSQL en `DATABASE_URL`.

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La API estará disponible localmente en `http://localhost:4000`.

---

## Author / Autor

* **The Puchades Project** - [thepuchadesproject.com](https://thepuchadesproject.com)
