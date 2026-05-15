# Gestión de Datos en JavaScript

Este proyecto realiza diferentes operaciones usando estructuras y métodos de JavaScript como:

- Validación de objetos
- Uso de `Set`
- Uso de `Map`
- Recorrido de objetos
- Métodos `Object.keys()`, `Object.values()` y `Object.entries()`

---

# Archivo principal

```bash
gestion_datos.js
```

---

# Funcionalidades

## 1. Validación de Productos

Se implementa una función llamada `validarProducto()` que verifica:

- Que el `id` sea un número mayor a 0
- Que el `nombre` sea un texto válido
- Que el `precio` sea un número mayor a 0

### Ejemplo:

```javascript
function validarProducto(producto) {
  return (
    typeof producto.id === "number" &&
    producto.id > 0 &&
    typeof producto.nombre === "string" &&
    producto.nombre.trim() !== "" &&
    typeof producto.precio === "number" &&
    producto.precio > 0
  );
}
```

---

## 2. Lista de Productos

Se trabaja con un arreglo de productos:

```javascript
const productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 80 },
  { id: 3, nombre: "Teclado", precio: 150 },
];
```

---

## 3. Uso de Set

Se utiliza `Set` para almacenar números únicos y evitar duplicados.

### Operaciones realizadas:

- Agregar elementos
- Verificar existencia
- Eliminar elementos
- Recorrer el Set

### Ejemplo:

```javascript
const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

numeros.add(6);
numeros.delete(2);
```

---

## 4. Uso de Map

Se implementa `Map` para relacionar categorías con productos.

### Ejemplo:

```javascript
const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorio", "Mouse");
categorias.set("Periférico", "Teclado");
```

---

## 5. Recorrido de Objetos

Se recorren las propiedades de cada producto usando:

### `for...in`

```javascript
for (const propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}
```

### `Object.keys()`

```javascript
Object.keys(producto);
```

### `Object.values()`

```javascript
Object.values(producto);
```

### `Object.entries()`

```javascript
Object.entries(producto);
```

---

# Ejecución del Proyecto

## Requisitos

- Node.js instalado

## Ejecutar el archivo

```bash
node gestion_datos.js
```

---

# Salida Esperada

El programa mostrará en consola:

- Validación de productos
- Operaciones con `Set`
- Recorridos de objetos
- Información almacenada en `Map`
- Pruebas finales

---

# Tecnologías Utilizadas

- JavaScript
- Node.js

---

# Autor

Proyecto realizado por **Stevel Iglesias**
