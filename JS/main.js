// Constantes para el conversor de moneda
const conversionRates = {
    USD: 1,        // Base en dólares
    EUR: 0.95,     // Tasa de conversión de USD a EUR
    MXN: 18.00     // Tasa de conversión de USD a MXN
};

// Productos disponibles en la tienda (array de objetos)
let productos = [
    { nombre: 'Camisa', precio: 25 },
    { nombre: 'Pantalones', precio: 40 },
    { nombre: 'Zapatos', precio: 60 },
    { nombre: 'Sombrero', precio: 20 }
];

// Carrito de compras (array)
let carrito = [];

// Función para mostrar los productos
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio} USD`);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(indiceProducto) {
    if (indiceProducto >= 0 && indiceProducto < productos.length) {
        carrito.push(productos[indiceProducto]);
        console.log(`Has agregado ${productos[indiceProducto].nombre} al carrito.`);
    } else {
        console.log("Producto no válido.");
    }
}

// Función para calcular el total del carrito en la moneda seleccionada
function calcularTotal(moneda) {
    let totalUSD = carrito.reduce((total, producto) => total + producto.precio, 0);
    let totalConvertido = totalUSD * conversionRates[moneda];
    console.log(`El total en ${moneda} es: ${totalConvertido.toFixed(2)} ${moneda}`);
}

// Función principal del simulador
function iniciarSimulador() {
    let continuar = true;
    while (continuar) {
        mostrarProductos();

        // Solicitar al usuario que elija un producto
        let seleccion = prompt("Selecciona el número del producto que deseas agregar al carrito o escribe 'fin' para terminar:");
        
        if (seleccion.toLowerCase() === 'fin') {
            continuar = false;
        } else {
            let indice = parseInt(seleccion) - 1;
            agregarAlCarrito(indice);
        }
    }

    let moneda = prompt("¿En qué moneda deseas ver el total? (USD, EUR, MXN):").toUpperCase();
    
    if (conversionRates[moneda]) {
        calcularTotal(moneda);
    } else {
        console.log("Moneda no válida. Mostrando total en USD por defecto.");
        calcularTotal('USD');
    }

    console.log("Gracias por comprar en nuestra tienda.");
}

// Iniciar el simulador
iniciarSimulador();