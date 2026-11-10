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
* **Development Tools:** Nodemon, tsx
* **Database & ORM:** PostgreSQL, Sequelize *(planned)*
* **Testing & Documentation:** Jest, Supertest, Swagger / OpenAPI *(planned)*

### Roadmap

- [x] Initial server setup with Express, TypeScript, and Nodemon
- [ ] Modular routing and HTTP methods (GET, POST, PUT, PATCH, DELETE)
- [ ] PostgreSQL database connection and product model
- [ ] Request validation for incoming data
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

3. Start the development server:
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
* **Herramientas de desarrollo:** Nodemon, tsx
* **Base de datos y ORM:** PostgreSQL, Sequelize *(planificado)*
* **Testing y Documentación:** Jest, Supertest, Swagger / OpenAPI *(planificado)*

### Roadmap

- [x] Configuración inicial del servidor con Express, TypeScript y Nodemon
- [ ] Enrutamiento modular y métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- [ ] Conexión a base de datos PostgreSQL y modelo de productos
- [ ] Validación de datos de entrada en las peticiones
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

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La API estará disponible localmente en `http://localhost:4000`.

---

## Author / Autor

* **The Puchades Project** - [thepuchadesproject.com](https://thepuchadesproject.com)
