const productos = [
  {
    id: 1,
    nombre: "Remera Lisa color Azul",
    precio: 95000,
    categoria: ["casual", "hombre"],
    imagen: "assets/img/remeraAzul.webp",
  },
  {
    id: 2,
    nombre: "Reloj elegante para hombre",
    precio: 95000,
    categoria: ["accesorios", "hombre"],
    imagen: "assets/img/reloj2.webp",
  },
  {
    id: 3,
    nombre: "Campera Impermeable Urbana",
    precio: 145000,
    categoria: ["urbano", "hombre"],
    imagen: "assets/img/impermeable.webp",
  },
  {
    id: 4,
    nombre: "Collar Minimalista",
    precio: 25000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/collar.webp",
  },
  {
    id: 5,
    nombre: "Zapatos formales de Cuero",
    precio: 135000,
    categoria: ["elegante", "hombre"],
    imagen: "assets/img/zapatos.webp",
  },
  {
    id: 6,
    nombre: "Zapatillas Deportivas",
    precio: 98000,
    categoria: ["casual", "hombre"],
    imagen: "assets/img/running.webp",
  },
  {
    id: 7,
    nombre: "Mochila Urbana Negra",
    precio: 40000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/mochila.webp",
  },
  {
    id: 8,
    nombre: "Sombrero de Paja",
    precio: 18000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/sombrero.webp",
  },
  {
    id: 9,
    nombre: "Blazer Elegante",
    precio: 120000,
    categoria: ["elegante", "mujer"],
    imagen: "assets/img/blazer.webp",
  },
  {
    id: 10,
    nombre: "Falda de tirantes",
    precio: 70000,
    categoria: ["urbano", "mujer"],
    imagen: "assets/img/skirt.webp",
  },
  {
    id: 11,
    nombre: "Cinturón de Cuero",
    precio: 35000,
    categoria: ["accesorios", "hombre"],
    imagen: "assets/img/belt.webp",
  },
  {
    id: 12,
    nombre: "Vestido de Fiesta",
    precio: 160000,
    categoria: ["elegante", "mujer"],
    imagen: "assets/img/dress.webp",
  },
  {
    id: 13,
    nombre: "Camisa Formal Blanca",
    precio: 90000,
    categoria: ["elegante", "hombre"],
    imagen: "assets/img/camisa.webp",
  },
  {
    id: 14,
    nombre: "Anteojos de sol",
    precio: 28000,
    categoria: ["accesorios", "mujer"],
    imagen: "assets/img/anteojos.webp",
  },
  {
    id: 15,
    nombre: "Jean Slim Fit",
    precio: 105000,
    categoria: ["casual", "hombre"],
    imagen: "assets/img/jeans.webp",
  },
  {
    id: 16,
    nombre: "Zapatillas Urbanas",
    precio: 115000,
    categoria: ["urbano", "hombre"],
    imagen: "assets/img/zapatillas.webp",
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
