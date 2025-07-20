export default function inicializarCarrito() {
  const abrirCarrito = document.getElementById('abrirCarrito');
  const cerrarCarrito = document.getElementById('cerrarCarrito');
  const carritoPanel = document.getElementById('carritoPanel');
  const carritoOverlay = document.getElementById('carritoOverlay');
  const contenidoPrincipal = document.getElementById('contenidoPrincipal');
  const enlacesNavbar = document.querySelectorAll('header nav a');

  enlacesNavbar.forEach(enlace => {enlace.addEventListener('click', ocultarCarrito);});

  function mostrarCarrito() {
    carritoPanel.classList.add('mostrar');
    carritoOverlay.style.display = 'block';
    contenidoPrincipal?.classList.add('blur');
    document.body.style.overflow = 'hidden';
  }

  function ocultarCarrito() {
    carritoPanel.classList.remove('mostrar');
    carritoOverlay.style.display = 'none';
    contenidoPrincipal?.classList.remove('blur');
    document.body.style.overflow = '';
  }

  if (abrirCarrito && cerrarCarrito && carritoPanel && carritoOverlay) {
    abrirCarrito.addEventListener('click', mostrarCarrito);
    cerrarCarrito.addEventListener('click', ocultarCarrito);
    carritoOverlay.addEventListener('click', ocultarCarrito);
  }
}
