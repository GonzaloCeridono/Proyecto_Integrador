export default function inicializarCarrito() {
  const abrirCarrito = document.getElementById('abrirCarrito');
  const cerrarCarrito = document.getElementById('cerrarCarrito');
  const carritoPanel = document.getElementById('carritoPanel');
  const carritoOverlay = document.getElementById('carritoOverlay');
  const contenidoPrincipal = document.getElementById('contenidoPrincipal');
  const enlacesNavbar = document.querySelectorAll('header nav a');

  // Cierra el carrito si se hace clic en un link del navbar
  enlacesNavbar.forEach(enlace => {
    enlace.addEventListener('click', ocultarCarrito);
  });

  function mostrarCarrito() {
    carritoPanel.classList.add('mostrar');
    carritoOverlay.classList.add('visible');
    contenidoPrincipal?.classList.add('blur');
    document.body.style.overflow = 'hidden';
  }

  function ocultarCarrito() {
    carritoPanel.classList.remove('mostrar');
    carritoOverlay.classList.remove('visible');
    contenidoPrincipal?.classList.remove('blur');
    document.body.style.overflow = '';
  }

  if (abrirCarrito && cerrarCarrito && carritoPanel && carritoOverlay) {
    abrirCarrito.addEventListener('click', mostrarCarrito);
    cerrarCarrito.addEventListener('click', ocultarCarrito);
    carritoOverlay.addEventListener('click', ocultarCarrito);
  }

  // Bloquear scroll del fondo en mobile
  function bloquearScrollExtra(container) {
  let startY = 0;

  container.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  container.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const offsetHeight = container.offsetHeight;
    const atTop = scrollTop === 0;
    const atBottom = scrollTop + offsetHeight >= scrollHeight;

    const scrollingUp = currentY > startY;
    const scrollingDown = currentY < startY;

    if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
      e.preventDefault(); // Evita el scroll hacia el fondo
    }
  }, { passive: false });
}

  const carritoScroll = document.getElementById('carrito-container');
if (carritoScroll) {
  bloquearScrollExtra(carritoScroll);
}
}
