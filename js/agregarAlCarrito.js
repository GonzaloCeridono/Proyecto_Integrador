let carrito = [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const data = localStorage.getItem("carrito");
  carrito = data ? JSON.parse(data) : [];
}

function agregarAlCarrito(producto) {
  const productoExistente = carrito.find(p => p.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  actualizarCarritoUI();
  actualizarContador();
}

function eliminarUnoDelCarrito(id) {
  const index = carrito.findIndex(p => p.id === id);
  if (index > -1) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    } else {
      carrito.splice(index, 1);
    }
  }

  guardarCarrito();
  actualizarCarritoUI();
  actualizarContador();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarCarritoUI();
  actualizarContador();
}

function actualizarCarritoUI() {
  const contenedor = document.getElementById('carrito-container');
  contenedor.innerHTML = "";

  carrito.forEach(producto => {
    const item = document.createElement("div");
    item.classList.add("item-carrito");
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div>
        <h4>${producto.nombre}</h4>
        <div class="control-cantidad">
          <button class="btn-menos" data-id="${producto.id}">-</button>
          <span>${producto.cantidad}</span>
          <button class="btn-mas" data-id="${producto.id}">+</button>
        </div>
        <p>Precio total: $${(producto.precio * producto.cantidad).toLocaleString("es-AR")}</p>
      </div>
    `;
    contenedor.appendChild(item);
  });
  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  const totalElement = document.createElement("div");
  totalElement.classList.add("total-carrito");
  totalElement.innerHTML = `<h3>Total: $${total.toLocaleString("es-AR")}</h3>`;
  contenedor.appendChild(totalElement);
}


function actualizarContador() {
  const contador = document.getElementById('cart-count');
  const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  contador.textContent = total;
}

function inicializarAgregarAlCarrito() {
  cargarCarrito();
  actualizarCarritoUI();
  actualizarContador();

  const contenedorProductos = document.getElementById("productos-container");
  const contenedorCarrito = document.getElementById("carrito-container");
  const btnVaciar = document.getElementById("vaciar-carrito");

  // Evento: Comprar producto
  contenedorProductos.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.dataset.id) {
      const id = parseInt(e.target.dataset.id);
      const producto = window.productos.find(p => p.id === id);
      if (producto) agregarAlCarrito(producto);
    }
  });

  // Evento: Actualizar cantidad en el carrito
  contenedorCarrito.addEventListener("click", (e) => {
  const id = parseInt(e.target.dataset.id);

  if (e.target.classList.contains("btn-mas")) {
    const producto = carrito.find(p => p.id === id);
    if (producto) {
      producto.cantidad++;
      guardarCarrito();
      actualizarCarritoUI();
      actualizarContador();
    }
  }

  if (e.target.classList.contains("btn-menos")) {
    const index = carrito.findIndex(p => p.id === id);
    if (index > -1) {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      } else {
        carrito.splice(index, 1); // eliminar si llega a 1 y se resta
      }
      guardarCarrito();
      actualizarCarritoUI();
      actualizarContador();
    }
  }
});

  // Evento: Vaciar carrito
  if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
  }
}

export default inicializarAgregarAlCarrito;