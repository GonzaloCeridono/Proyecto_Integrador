export default function inicializarCarrito() {
  const abrirCarrito = document.getElementById('abrirCarrito');
  const cerrarCarrito = document.getElementById('cerrarCarrito');
  const carritoPanel = document.getElementById('carritoPanel');
  const carritoOverlay = document.getElementById('carritoOverlay');
  const contenidoPrincipal = document.getElementById('contenidoPrincipal');
  const enlacesNavbar = document.querySelectorAll('header nav a');
  const carritoScroll = document.getElementById('carrito-container');

  let scrollPos = 0;

  // Bloquear scroll de fondo sin perder posición
  function bloquearScroll() {
    scrollPos = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPos}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }

  // Restaurar scroll original
  function restaurarScroll() {
    document.documentElement.classList.add('restaurando-scroll');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPos);
    setTimeout(() => {
      document.documentElement.classList.remove('restaurando-scroll');
    }, 100);
  }

  // Función para bloquear scroll extra en iOS dentro del carrito
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

      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + offsetHeight >= scrollHeight - 1;
      const scrollingUp = currentY > startY;
      const scrollingDown = currentY < startY;

      if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  // Mostrar y ocultar carrito
  function mostrarCarrito() {
    carritoPanel.classList.add('mostrar');
    carritoOverlay.classList.add('visible');
    contenidoPrincipal?.classList.add('blur');
    bloquearScroll();
  }

  function ocultarCarrito() {
    carritoPanel.classList.remove('mostrar');
    carritoOverlay.classList.remove('visible');
    contenidoPrincipal?.classList.remove('blur');
    restaurarScroll();
  }

  // Eventos de apertura/cierre
  if (abrirCarrito && cerrarCarrito && carritoPanel && carritoOverlay) {
    abrirCarrito.addEventListener('click', (e) => {
    e.preventDefault();

    const estaAbierto = carritoPanel.classList.contains('mostrar');
    if (estaAbierto) {
      ocultarCarrito();
    } else {
      mostrarCarrito();
    }
  });

    cerrarCarrito.addEventListener('click', ocultarCarrito);
    carritoOverlay.addEventListener('click', ocultarCarrito);
  }

  // Cerrar carrito al hacer clic en enlaces del navbar
  enlacesNavbar.forEach(enlace => {
    enlace.addEventListener('click', ocultarCarrito);
  });

  // Bloquear scroll interno táctil
  if (carritoScroll) {
    bloquearScrollExtra(carritoScroll);
  }
}