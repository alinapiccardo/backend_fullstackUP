# Fullstack Web Development

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Este repositorio remoto corresponde a la primera parte del TP integrador, que se enfoca en el desarrollo del Backend y la API.

- **Alumna**: Alina Piccardo
- **Profesora**: Maria Belen Alegre
- **Clase**: Full Stack Web Development - LUN 19hs

## Table of Contents

1. [Descripción del Juego](#🎮descripción-del-juego)
2. [Configuración del Entorno](#⚙️configuración-del-entorno)
3. [Endpoints](#📌endpoints)

## Descripción del Juego

Este emocionante proyecto es una aplicación web diseñada especialmente para un juego infantil, donde los niños pueden sumergirse en un mundo de creatividad y diversión. Aquí te presentamos los aspectos clave del proyecto:

### 🎮Descripción del Juego

El juego infantil permite a los niños:

1. **Autenticarse**: Los niños ingresan su nombre y un PIN numérico para iniciar sesión. El nombre se mostrará durante todo el juego.

2. **Selección de Personajes**: Pueden elegir entre 4 personajes adorables, cada uno con su nombre y rostro único.

3. **Construcción de Atuendos**: Los niños pueden armar atuendos diarios combinando partes superiores, partes inferiores y zapatos.

4. **Visualización de Atuendos**: Pueden ver sus creaciones de atuendos completos y admirar su creatividad.

5. **Guardado de Resultados**: Los atuendos creados se almacenan en el sistema para su disfrute futuro.

6. **Recuperación de Resultados**: Si vuelven a jugar, los niños pueden acceder a los personajes y atuendos que crearon anteriormente.

7. **Visualización Pública**: Además, el proyecto permite que cualquiera pueda ver los últimos 5 personajes creados, mostrando la creatividad de los niños al mundo.

## ⚙️Configuración del Entorno

Para configurar el entorno de desarrollo y ejecutar el proyecto, sigue estos pasos:

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/alinapiccardo/fwd_TP_up.git
   cd fwd_TP_up
   ```

2. **Instalar Dependencias**:

   ```bash
   npm install axios body-parser cookie-parser cors crypto dotenv express express-session mongodb mongoose morgan nodemon
   ```

3. **Configurar Variables de Entorno**:
   Crea un archivo `.env` en la raíz del proyecto y establece las variables necesarias:

   ```bash
   MONGO_URI="piccardoalina:03069733@cluster0.dau2mfp.mongodb.net/characters?retryWrites=true&w=majority"
   SESSION_SECRET="123456789"
   ```

4. **Iniciar la Aplicación**:
   ```bash
   npm start
   ```

## 📌Endpoints

A continuación, se describen los endpoints de la API y cómo utilizarlos:

### Usuarios

- `GET /users`: Obtiene todos los usuarios registrados.
- `POST /users`: Crea un nuevo usuario en la base de datos.

  **Parámetros:**

  - `username` (String): Nombre de usuario del jugador (debe ser único).
  - `password` (Number): Contraseña del jugador (debe ser un número de 5 dígitos).

### Autenticación de Usuarios

- `POST /login`: Autentica a un usuario y genera un token de sesión.

  **Parámetros:**

  - `username` (String): Nombre de usuario del jugador.
  - `password` (Number): Contraseña del jugador (debe ser un número de 5 dígitos).

### Personajes

- `GET /characters`: Obtiene todos los personajes disponibles.
- `GET /characters/:id`: Obtiene un personaje específico por ID.

  **Parámetros:**

  - `id`: ID del personaje.

### Atuendos (Outfits)

- `GET /outfits`: Obtiene todos los atuendos disponibles.

  **Parámetros:**

  - `category` (String): Filtra los atuendos por categoría (por ejemplo, "shoes" para zapatos).
    Ejemplo: `http://localhost:3002/outfits?category=shoes`

- `GET /outfits/:id`: Obtiene un atuendo específico por ID.

  **Parámetros:**

  - `id` (String): ID del atuendo.
