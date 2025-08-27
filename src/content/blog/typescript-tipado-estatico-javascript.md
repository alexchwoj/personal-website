---
title: 'TypeScript: Tipado Estático para JavaScript'
description: 'Descubre cómo TypeScript mejora la experiencia de desarrollo con tipado estático, interfaces, y herramientas avanzadas para crear código más robusto.'
publishDate: '2024-02-10'
categories: ['Programming Languages', 'Web Development']
tags: ['typescript', 'javascript', 'tipos', 'desarrollo']
author: 'Alexander Chwojewski'
language: 'es'
coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq3joaHJkCS8gftpCUUR3Yg63O6kFWSO7fg&s'
---

# TypeScript: Tipado Estático para JavaScript

TypeScript ha revolucionado el desarrollo de JavaScript al agregar tipado estático opcional. Esta guía explora las características fundamentales que hacen de TypeScript una herramienta esencial para proyectos modernos.

## ¿Qué es TypeScript?

TypeScript es un superset de JavaScript que compila a JavaScript plano. Agrega tipos estáticos opcionales y características de programación orientada a objetos avanzadas.

### Ventajas Principales

- **Detección temprana de errores**: Los errores se capturan en tiempo de compilación
- **Mejor IDE**: Autocompletado, refactoring, y navegación mejorados
- **Documentación viva**: Los tipos sirven como documentación
- **Refactoring seguro**: Cambios con confianza en bases de código grandes
- **Compatibilidad**: JavaScript válido es TypeScript válido

## Tipos Básicos

TypeScript incluye todos los tipos de JavaScript más algunos adicionales:

```typescript
// Tipos primitivos
let nombre: string = 'Alex';
let edad: number = 30;
let activo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ['Ana', 'Luis'];

// Tuplas
let coordenada: [number, number] = [10, 20];

// Enum
enum Color {
	Rojo = 'rojo',
	Verde = 'verde',
	Azul = 'azul'
}

// Any (evitar cuando sea posible)
let valor: any = 42;

// Unknown (más seguro que any)
let entrada: unknown = obtenerDatos();

// Void
function saludar(): void {
	console.log('¡Hola!');
}

// Never
function error(mensaje: string): never {
	throw new Error(mensaje);
}
```

## Interfaces y Tipos

Las interfaces definen la forma de los objetos:

```typescript
interface Usuario {
	id: number;
	nombre: string;
	email: string;
	fechaNacimiento?: Date; // Opcional
	readonly createdAt: Date; // Solo lectura
}

// Implementación
const usuario: Usuario = {
	id: 1,
	nombre: 'María García',
	email: 'maria@example.com',
	createdAt: new Date()
};

// Extender interfaces
interface Administrador extends Usuario {
	permisos: string[];
	nivel: number;
}

// Type aliases
type ID = string | number;
type Estado = 'pendiente' | 'aprobado' | 'rechazado';

// Tipos de unión
function procesarId(id: ID): void {
	if (typeof id === 'string') {
		console.log(id.toUpperCase());
	} else {
		console.log(id.toFixed(2));
	}
}
```

## Funciones Tipadas

TypeScript mejora significativamente el tipado de funciones:

```typescript
// Funciones con tipos explícitos
function sumar(a: number, b: number): number {
	return a + b;
}

// Funciones arrow
const multiplicar = (a: number, b: number): number => a * b;

// Parámetros opcionales
function saludar(nombre: string, apellido?: string): string {
	return apellido ? `Hola, ${nombre} ${apellido}` : `Hola, ${nombre}`;
}

// Parámetros por defecto
function crearUsuario(nombre: string, activo: boolean = true): Usuario {
	return {
		id: Math.random(),
		nombre,
		email: `${nombre.toLowerCase()}@example.com`,
		createdAt: new Date()
	};
}

// Rest parameters
function sumarTodos(...numeros: number[]): number {
	return numeros.reduce((total, num) => total + num, 0);
}

// Sobrecarga de funciones
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: string | number): string | number {
	if (typeof valor === 'string') {
		return valor.toUpperCase();
	}
	return valor * 2;
}
```

## Generics

Los generics permiten crear componentes reutilizables:

```typescript
// Función genérica
function identidad<T>(arg: T): T {
	return arg;
}

// Uso
let resultado = identidad<string>('texto');
let numero = identidad<number>(42);

// Interfaz genérica
interface Respuesta<T> {
	datos: T;
	estado: number;
	mensaje: string;
}

// Clase genérica
class Contenedor<T> {
	private items: T[] = [];

	agregar(item: T): void {
		this.items.push(item);
	}

	obtener(indice: number): T | undefined {
		return this.items[indice];
	}

	obtenerTodos(): T[] {
		return [...this.items];
	}
}

// Constrains en generics
interface Longitud {
	length: number;
}

function conLongitud<T extends Longitud>(arg: T): T {
	console.log(arg.length);
	return arg;
}
```

## Clases y Orientación a Objetos

TypeScript mejora las clases de JavaScript:

```typescript
abstract class Animal {
	protected nombre: string;

	constructor(nombre: string) {
		this.nombre = nombre;
	}

	abstract hacerSonido(): void;

	mover(): void {
		console.log(`${this.nombre} se está moviendo`);
	}
}

class Perro extends Animal {
	private raza: string;

	constructor(nombre: string, raza: string) {
		super(nombre);
		this.raza = raza;
	}

	hacerSonido(): void {
		console.log('¡Guau!');
	}

	// Getter
	get informacion(): string {
		return `${this.nombre} es un ${this.raza}`;
	}

	// Setter
	set cambiarNombre(nuevoNombre: string) {
		this.nombre = nuevoNombre;
	}
}

// Implementar interfaces
interface Volador {
	volar(): void;
}

class Pajaro extends Animal implements Volador {
	hacerSonido(): void {
		console.log('¡Pío!');
	}

	volar(): void {
		console.log(`${this.nombre} está volando`);
	}
}
```

## Utilidades de Tipos

TypeScript incluye tipos utilitarios poderosos:

```typescript
interface UsuarioCompleto {
	id: number;
	nombre: string;
	email: string;
	telefono: string;
	direccion: string;
}

// Partial - hace todas las propiedades opcionales
type UsuarioParcial = Partial<UsuarioCompleto>;

// Pick - selecciona propiedades específicas
type UsuarioBasico = Pick<UsuarioCompleto, 'id' | 'nombre' | 'email'>;

// Omit - excluye propiedades específicas
type UsuarioSinId = Omit<UsuarioCompleto, 'id'>;

// Required - hace todas las propiedades obligatorias
type UsuarioRequerido = Required<UsuarioParcial>;

// Record - crea un tipo con claves y valores específicos
type EstadosUsuario = Record<'activo' | 'inactivo' | 'suspendido', boolean>;

// Readonly - hace todas las propiedades de solo lectura
type UsuarioReadonly = Readonly<UsuarioCompleto>;
```

## Configuración de TypeScript

El archivo `tsconfig.json` configura el compilador:

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"module": "ES2020",
		"moduleResolution": "node",
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true,
		"declaration": true,
		"outDir": "./dist",
		"rootDir": "./src",
		"removeComments": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"exactOptionalPropertyTypes": true,
		"noImplicitReturns": true,
		"noFallthroughCasesInSwitch": true
	},
	"include": ["src/**/*"],
	"exclude": ["node_modules", "dist"]
}
```

## Mejores Prácticas

### Configuración Estricta

- Habilita `strict: true`
- Usa `noImplicitAny`
- Evita `any` cuando sea posible

### Nomenclatura

- Usa PascalCase para interfaces y clases
- Usa camelCase para variables y funciones
- Usa UPPER_CASE para constantes

### Organización

- Agrupa tipos relacionados en archivos `.d.ts`
- Usa índices de barril para exports
- Mantén interfaces pequeñas y específicas

## Conclusión

TypeScript transforma JavaScript en un lenguaje más robusto y mantenible. Con tipos estáticos, herramientas mejoradas, y características avanzadas, TypeScript es esencial para proyectos web modernos.

La inversión en aprender TypeScript se paga rápidamente con código más seguro, mejor documentado, y más fácil de mantener.
