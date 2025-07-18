const productos = [
  {
    id: 1,
    nombre: "Remera Lisa color Azul",
    precio: 95000,
    categoria: ["casual", "hombre"],
    imagen: "assets/img/remeraAzul.jpg",
  },
  {
    id: 2,
    nombre: "Reloj elegante para hombre",
    precio: 95000,
    categoria: ["accesorios", "hombre"],
    imagen: "assets/img/reloj.jpg",
  },
  {
    id: 3,
    nombre: "Campera Impermeable Urbana",
    precio: 145000,
    categoria: ["urbano", "hombre"],
    imagen: "assets/img/remeraNegra.jpg",
  },
  {
    id: 4,
    nombre: "Collar Minimalista",
    precio: 25000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/camisaJeans.jpg",
  },
  {
    id: 5,
    nombre: "Zapatos de Charol",
    precio: 135000,
    categoria: ["elegante", "mujer"],
    imagen: "assets/img/pantalonGabardina.jpg",
  },
  {
    id: 6,
    nombre: "Zapatillas Deportivas",
    precio: 98000,
    categoria: ["casual", "hombre"],
    imagen: "assets/img/zapatillasUrbanas.jpg",
  },
  {
    id: 7,
    nombre: "Mochila Urbana Negra",
    precio: 40000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/gorraUrbana.jpg",
  },
  {
    id: 8,
    nombre: "Sombrero de Paja",
    precio: 18000,
    categoria: ["accesorios", "hombre"],
    imagen: "assets/img/bufandaLana.jpg",
  },
  {
    id: 9,
    nombre: "Blazer Elegante",
    precio: 120000,
    categoria: ["elegante", "hombre"],
    imagen: "assets/img/vestidoVerano.jpg",
  },
  {
    id: 10,
    nombre: "Falda Plisada",
    precio: 70000,
    categoria: ["casual", "mujer"],
    imagen: "assets/img/chaquetaCuero.jpg",
  },
  {
    id: 11,
    nombre: "Cinturón de Cuero",
    precio: 35000,
    categoria: ["accesorios", "hombre"],
    imagen: "assets/img/botinesCuero.jpg",
  },
  {
    id: 12,
    nombre: "Vestido de Fiesta",
    precio: 160000,
    categoria: ["elegante", "mujer"],
    imagen: "assets/img/botaCuero.jpg",
  },
  {
    id: 13,
    nombre: "Camisa Formal Blanca",
    precio: 90000,
    categoria: ["elegante", "hombre"],
    imagen: "assets/img/botinCuero.jpg",
  },
  {
    id: 14,
    nombre: "Riñonera Urbana",
    precio: 28000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/botinCuero.jpg",
  },
  {
    id: 15,
    nombre: "Jean Slim Fit",
    precio: 105000,
    categoria: ["casual", "hombre"],
    imagen: "assets/img/botinCuero.jpg",
  },
  {
    id: 16,
    nombre: "Zapatillas Urbanas de Cuero",
    precio: 115000,
    categoria: ["urbano", "mujer"],
    imagen: "assets/img/botinCuero.jpg",
  }
];

function renderizarProductos(filtro = "todos") {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = "";

  const productosFiltrados = filtro === "todos"
    ? productos
    : productos.filter(p => Array.isArray(p.categoria) && p.categoria.includes(filtro));

  productosFiltrados.forEach(producto => {
    const articulo = document.createElement("article");
    articulo.classList.add("producto");

    articulo.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio.toLocaleString("es-AR")}</p>
      <button data-id="${producto.id}">COMPRAR</button>
    `;

    contenedor.appendChild(articulo);
  });
}

function iniciarFiltrado() {
  const botones = document.querySelectorAll(".filtros-categorias button");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const categoria = btn.dataset.categoria;
      renderizarProductos(categoria);
    });
  });
}

export default function renderizarProductosInit() {
  renderizarProductos();
  iniciarFiltrado();
}

window.productos = productos;
