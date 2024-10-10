// Constantes
const TASAS_CAMBIO = {
    USD: 1,
    EUR: 0.88,
    GBP: 0.76,
    ARS: 65.50
  };
  
  const PRODUCTOS = [
    { id: 1, nombre: "Producto 1", precioUSD: 10 },
    { id: 2, nombre: "Producto 2", precioUSD: 20 },
    { id: 3, nombre: "Producto 3", precioUSD: 30 }
  ];
  
  // Variables
  let carrito = [];
  let monedaSeleccionada = "USD";
  let total = 0;
  
  // Funciones
  function convertirMoneda(monto, monedaOrigen, monedaDestino) {
    return monto * TASAS_CAMBIO[monedaDestino] / TASAS_CAMBIO[monedaOrigen];
  }
  
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    calcularTotal();
  }
  
  function calcularTotal() {
    total = 0;
    carrito.forEach(producto => {
      total += convertirMoneda(producto.precioUSD, "USD", monedaSeleccionada);
    });
    actualizarInterfaz();
  }
  
  function actualizarInterfaz() {
    document.getElementById("total").innerText = `Total: ${total.toFixed(2)} ${monedaSeleccionada}`;
    document.getElementById("carrito").innerHTML = "";
    carrito.forEach(producto => {
      const elemento = document.createElement("li");
      elemento.innerText = `${producto.nombre} - ${convertirMoneda(producto.precioUSD, "USD", monedaSeleccionada).toFixed(2)} ${monedaSeleccionada}`;
      document.getElementById("carrito").appendChild(elemento);
    });
  }
  
  // Eventos
  document.getElementById("moneda").addEventListener("change", evento => {
    monedaSeleccionada = evento.target.value;
    calcularTotal();
  });
  
  document.getElementById("agregar").addEventListener("click", evento => {
    const productoSeleccionado = PRODUCTOS.find(producto => (link unavailable) === parseInt(document.getElementById("producto").value));
    agregarAlCarrito(productoSeleccionado);
  });
  
  // Inicialización
  calcularTotal();