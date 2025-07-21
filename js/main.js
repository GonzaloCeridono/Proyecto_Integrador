import iniciarSlider from "./slider.js";
import inicializarCarrito from './carrito.js';
import renderizarProductosInit from './productos.js';
import inicializarAgregarAlCarrito from './agregarAlCarrito.js';
import validarFormulario from "./validacionForm.js";
import inicializarMenuHamburguesa from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarSlider();
  inicializarCarrito();
  renderizarProductosInit();
  inicializarMenuHamburguesa();
  validarFormulario();
  inicializarAgregarAlCarrito();
});
