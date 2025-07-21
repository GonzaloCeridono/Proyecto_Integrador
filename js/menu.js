export default function inicializarMenuHamburguesa() {
  const btnMenu = document.getElementById("btnMenu");
  const contenidoPrincipal = document.getElementById("contenidoPrincipal");
  const enlacesMenu = document.querySelectorAll("#barraNavegacion a");

  function aplicarBlur() {
    contenidoPrincipal?.classList.add("blur");
    document.body.style.overflow = "hidden";
  }

  function quitarBlur() {
    contenidoPrincipal?.classList.remove("blur");
    document.body.style.overflow = "";
  }

  btnMenu.addEventListener("change", () => {
    if (btnMenu.checked) {
      aplicarBlur();
    } else {
      quitarBlur();
    }
  });

  enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
      btnMenu.checked = false;
      quitarBlur();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btnMenu.checked) {
      btnMenu.checked = false;
      quitarBlur();
    }
  });
}
