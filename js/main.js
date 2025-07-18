import iniciarSlider from "./slider.js";
import { inicializarCarrito } from './carrito.js';
import renderizarProductosInit from './productos.js';
import inicializarAgregarAlCarrito from './agregarAlCarrito.js';

document.addEventListener("DOMContentLoaded", () => {
  iniciarSlider();
  inicializarCarrito();
  renderizarProductosInit();
  inicializarAgregarAlCarrito();
});
