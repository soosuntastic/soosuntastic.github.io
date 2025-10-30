addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll("input");

  botones.forEach((boton) => { {
    boton.addEventListener("click", mostrarInformacion);
  }});

  function mostrarInformacion() {
    let texto = document.getElementById(`${this.id}-p`);
    texto.hidden = false;
    this.ariaExpanded = true;
  }
});
