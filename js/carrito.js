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
  function bloquearScrollExtra(panel) {
  let startY = 0;

  panel.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  panel.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY;
    const scrollTop = panel.scrollTop;
    const scrollHeight = panel.scrollHeight;
    const offsetHeight = panel.offsetHeight;
    const atTop = scrollTop === 0;
    const atBottom = scrollTop + offsetHeight >= scrollHeight;

    const scrollingUp = currentY > startY;
    const scrollingDown = currentY < startY;

    if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
      e.preventDefault(); // bloquea el scroll que se “escapa” al fondo
    }
  }, { passive: false });
}

  // Activar scroll trap solo si existe el panel
  if (carritoPanel) {
    bloquearScrollExtra(carritoPanel);
  }
}
