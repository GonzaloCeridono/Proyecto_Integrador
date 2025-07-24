export default function inicializarMenuHamburguesa() {
  const btnMenu = document.getElementById("btnMenu");
  const menu = document.getElementById("barraNavegacion");
  const contenidoPrincipal = document.getElementById("contenidoPrincipal");
  const enlacesMenu = document.querySelectorAll("#barraNavegacion a");

  // Blur de fondo cuando el menú está abierto

  function aplicarBlur() {
    contenidoPrincipal?.classList.add("blur");
    document.body.style.overflow = "hidden";
  }

  function quitarBlur() {
    contenidoPrincipal?.classList.remove("blur");
    document.body.style.overflow = "";
  }

  // Menu hamburguesa

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-abierto");

    if (menu.classList.contains("menu-abierto")) {
      aplicarBlur();
    } else {
      quitarBlur();
    }
  });

  enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("menu-abierto");
      quitarBlur();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("menu-abierto")) {
      menu.classList.remove("menu-abierto");
      quitarBlur();
    }
  });
}