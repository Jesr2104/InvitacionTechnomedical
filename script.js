document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioRegistro");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbza4uDJSioWGeWeP1mV_28pu8bsuwkqpxMs3BPfzd_7Z9ne-_jZZT7rub5t4jA68ole/exec", {
      method: "POST",
      body: data,
      mode: "no-cors"
    })
    .then(() => {
      mensaje.textContent = "Formulario enviado correctamente. ¡Gracias por confirmar!";
      form.reset();
      window.location.href = "registroExitoso.html";
    })
    .catch((error) => {
      mensaje.textContent = "Hubo un error al enviar el formulario.";
      console.error("Error:", error);
    });
  });
});