// Archivo: gestion_datos.js

// Validación de productos
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

// Lista de productos
const productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 80 },
  { id: 3, nombre: "Teclado", precio: 150 },
];

console.log("===== VALIDACIÓN DE PRODUCTOS =====");

productos.forEach((producto) => {
  if (validarProducto(producto)) {
    console.log(`Producto válido: ${producto.nombre}`);
  } else {
    console.log("Producto inválido:", producto);
  }
});


// Uso de Set
const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log("\nSet inicial:", numeros);

numeros.add(6);

console.log("Después de agregar 6:", numeros);

console.log("¿Existe el número 3?", numeros.has(3));

numeros.delete(2);

console.log("Después de eliminar 2:", numeros);

console.log("Recorrido del Set:");

for (const numero of numeros) {
  console.log(numero);
}


// Uso de Map
const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorio", "Mouse");
categorias.set("Periférico", "Teclado");


console.log("\nRECORRIDO DE OBJETOS ");

productos.forEach((producto) => {
  console.log("\nProducto:");

  for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }
});

console.log("\n Object.keys() ");

productos.forEach((producto) => {
  console.log(Object.keys(producto));
});

console.log("\nObject.values() ");

productos.forEach((producto) => {
  console.log(Object.values(producto));
});

console.log("\n Object.entries() ");

productos.forEach((producto) => {
  console.log(Object.entries(producto));
});


// Recorrido del Map
console.log("\n RECORRIDO DEL MAP ");

categorias.forEach((valor, clave) => {
  console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});


// Pruebas finales
console.log("\n PRUEBAS FINALES ");

console.log("Lista completa de productos:");
console.log(productos);

console.log("\nLista de números únicos:");
console.log(numeros);

console.log("\nCategorías y productos:");
console.log(categorias);