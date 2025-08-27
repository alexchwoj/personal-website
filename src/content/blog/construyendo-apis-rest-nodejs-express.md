---
title: 'Construyendo APIs REST con Node.js y Express'
description: 'Aprende a crear APIs REST robustas y escalables usando Node.js y Express. Una guía completa desde los fundamentos hasta las mejores prácticas.'
publishDate: '2024-01-20'
categories: ['Backend', 'API Development']
tags: ['nodejs', 'express', 'api', 'rest', 'javascript']
author: 'Alexander Chwojewski'
language: 'es'
coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq3joaHJkCS8gftpCUUR3Yg63O6kFWSO7fg&s'
---

# Construyendo APIs REST con Node.js y Express

Node.js y Express forman una combinación poderosa para crear APIs REST escalables y eficientes. En esta guía, exploraremos cómo construir una API completa desde cero.

## ¿Por qué Node.js y Express?

Esta stack ofrece numerosas ventajas:

- **Rendimiento**: Event-driven y non-blocking I/O
- **Ecosistema**: NPM con millones de paquetes disponibles
- **JavaScript**: Usar el mismo lenguaje en frontend y backend
- **Comunidad**: Gran comunidad y soporte activo
- **Flexibilidad**: Arquitectura minimalista y extensible

## Configuración Inicial

Comencemos creando un nuevo proyecto:

```bash
mkdir mi-api
cd mi-api
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon @types/node typescript
```

## Estructura del Proyecto

Organizar tu proyecto correctamente es crucial:

```
src/
  controllers/
  middleware/
  models/
  routes/
  utils/
  app.js
  server.js
```

## Creando el Servidor Básico

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas básicas
app.get('/api/health', (req, res) => {
	res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
	console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
```

## Diseñando Endpoints RESTful

Los endpoints REST siguen convenciones estándar:

| Método | Endpoint         | Descripción                |
| ------ | ---------------- | -------------------------- |
| GET    | `/api/users`     | Obtener todos los usuarios |
| GET    | `/api/users/:id` | Obtener usuario específico |
| POST   | `/api/users`     | Crear nuevo usuario        |
| PUT    | `/api/users/:id` | Actualizar usuario         |
| DELETE | `/api/users/:id` | Eliminar usuario           |

## Middleware Personalizado

```javascript
// Middleware de autenticación
const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		return res.sendStatus(401);
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};

// Middleware de validación
const validateUser = (req, res, next) => {
	const { name, email } = req.body;

	if (!name || !email) {
		return res.status(400).json({
			error: 'Nombre y email son requeridos'
		});
	}

	next();
};
```

## Manejo de Errores

Un manejo robusto de errores es esencial:

```javascript
// Middleware global de manejo de errores
app.use((err, req, res, next) => {
	console.error(err.stack);

	if (err.name === 'ValidationError') {
		return res.status(400).json({
			error: 'Datos de entrada inválidos',
			details: err.message
		});
	}

	res.status(500).json({
		error: 'Error interno del servidor'
	});
});
```

## Mejores Prácticas

### Seguridad

- Usa HTTPS en producción
- Implementa rate limiting
- Valida y sanitiza todas las entradas
- Usa variables de entorno para secretos

### Performance

- Implementa caché cuando sea apropiado
- Usa compresión gzip
- Optimiza consultas a la base de datos
- Implementa paginación para listas grandes

### Documentación

- Documenta tus endpoints con Swagger/OpenAPI
- Incluye ejemplos de respuestas
- Mantén la documentación actualizada

## Conclusión

Node.js y Express proporcionan una base sólida para construir APIs REST modernas. Con las prácticas correctas, puedes crear servicios escalables y mantenibles que sirvan aplicaciones web y móviles de manera eficiente.

¡El siguiente paso es conectar tu API con una base de datos y implementar autenticación robusta!
