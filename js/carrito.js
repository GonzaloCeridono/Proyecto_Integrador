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

  // 🚫 Bloquear scroll del fondo en mobile al scrollear el carrito
  function bloquearScrollExtra(panel) {
    panel.addEventListener('touchstart', (e) => {
      const scrollTop = panel.scrollTop;
      const scrollHeight = panel.scrollHeight;
      const offsetHeight = panel.offsetHeight;

      if (scrollTop === 0) {
        panel.scrollTop = 1; // evita scroll hacia arriba desde el borde superior
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        panel.scrollTop -= 1; // evita scroll hacia abajo desde el borde inferior
      }
    });

    panel.addEventListener('touchmove', (e) => {
      if (panel.offsetHeight >= panel.scrollHeight) {
        e.preventDefault(); // bloquea el scroll cuando no hay contenido suficiente
      }
    }, { passive: false }); // importante para que funcione preventDefault
  }

  // Activar scroll trap solo si existe el panel
  if (carritoPanel) {
    bloquearScrollExtra(carritoPanel);
  }
}
