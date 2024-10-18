// Variables y constantes
const TASAS_CAMBIO = {
  USD: 1,
  EUR: 0.88,
  GBP: 0.76,
  ARS: 65.50
};
const PRODUCTOS = [];
let carrito = [];
let monedaSeleccionada = "USD";

// Funciones
function cargarProductos() {
  fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(productos => {
      PRODUCTOS = productos;
      renderizarProductos();
    })
    .catch(error => console.error('Error cargando productos:', error));
}

function renderizarProductos() {
  const contenedorProductos = document.getElementById('productos');
  contenedorProductos.innerHTML = '';
  PRODUCTOS.forEach(producto => {
    const tarjetaProducto = document.createElement('div');
    tarjetaProducto.innerHTML = `
      <h2>${producto.nombre}</h2>
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <p>Precio: $${producto.precioUSD}</p>
      <button id="agregar-${(link unavailable)}">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(tarjetaProducto);
    document.getElementById(`agregar-${(link unavailable)}`).addEventListener('click', () => {
      agregarAlCarrito(producto);
    });
  });
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  renderizarCarrito();
}

function renderizarCarrito() {
  const contenedorCarrito = document.getElementById('carrito');
  contenedorCarrito.innerHTML = '';
  carrito.forEach(producto => {
    const tarjetaProducto = document.createElement('div');
    tarjetaProducto.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>Precio: $${producto.precioUSD}</p>
    `;
    contenedorCarrito.appendChild(tarjetaProducto);
  });
}

function convertirMoneda(monto, monedaOrigen, monedaDestino) {
  return monto * TASAS_CAMBIO[monedaDestino] / TASAS_CAMBIO[monedaOrigen];
}

function renderizarConversor() {
  const contenedorConversor = document.getElementById('conversor');
  contenedorConversor.innerHTML = `
    <h2>Conversor de moneda</h2>
    <select id="moneda-origen">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="ARS">ARS</option>
    </select>
    <input type="number" id="monto" placeholder="Monto">
    <select id="moneda-destino">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="ARS">ARS</option>
    </select>
    <button id="convertir">Convertir</button>
    <p id="resultado"></p>
  `;
  document.getElementById('convertir').addEventListener('click', () => {
    const monedaOrigen = document.getElementById('mon