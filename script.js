document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularioRegistro");
  const mensaje = document.getElementById("mensaje");
  const boton = document.getElementById("botonSubmit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (boton.classList.contains('bloqueado')) return;

    // Mostrar loader y bloquear visualmente
      boton.innerHTML = 'Enviando <span class="loader"></span>';
      boton.classList.add('bloqueado');

    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbxlY10bYGGFmOrbaO-lt_YWKr1C4_Woy0urza_XjeIURQFp5jaDygtPc_fVttYV3QLD/exec", {
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

function mostrarOtraCiudad(select) {
    const otraCiudadContainer = document.getElementById('otraCiudadContainer');
    const otraCiudadInput = document.getElementById('otraCiudad');

    if (select.value === 'otra') {
      otraCiudadContainer.style.display = 'block';
      otraCiudadInput.required = true;
      select.name = 'ciudad_dummy'; // desactiva temporalmente el select como "ciudad"
    } else {
      otraCiudadContainer.style.display = 'none';
      otraCiudadInput.required = false;
      otraCiudadInput.value = '';
      select.name = 'ciudad'; // el select vuelve a ser el campo ciudad
    }
  }