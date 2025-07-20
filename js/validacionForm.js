export default function validarFormulario() {
    const form = document.getElementById("formulario-contacto");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorMensaje = document.getElementById("error-mensaje");
    const validoMensaje = document.getElementById("form-valido");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorMensaje.textContent = "";
        validoMensaje.textContent = "";

        let esValido = true;

        // Validación del nombre
        if (nombre.value.trim() === "") {
            errorNombre.textContent = "Por favor, ingresa tu nombre y apellido.";
            esValido = false;
        }

        // Validación del email
        if (email.value.trim() === "") {
            errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
            esValido = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
            esValido = false;
        }

        // Validación del mensaje
        if (mensaje.value.trim() === "") {
            errorMensaje.textContent = "Por favor, ingresa tu mensaje.";
            esValido = false;
        }
        if (mensaje.value.trim().length < 10) {
            errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
            esValido = false;
        }

        // Mensaje de éxito
        if (esValido) {
            validoMensaje.textContent = "Formulario enviado correctamente.";
            form.reset();
        }
        });
}