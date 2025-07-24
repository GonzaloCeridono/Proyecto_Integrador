export default function iniciarSlider() {
  const imagenes = document.querySelectorAll(".hero-slider img");
  let index = 0;

  setInterval(() => {
    // Ocultar imagen actual
    imagenes[index].classList.remove("active");

    // Avanzar al siguiente índice
    index = (index + 1) % imagenes.length;

    // Mostrar nueva imagen
    imagenes[index].classList.add("active");
  }, 3000); // Cada 3 segundos
}
