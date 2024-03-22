/* tooltip */
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/* alerta de correo*/
$(function () {
  $("#boton-correo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

/* cambiar color el texto */
$(function () {
  $(".titulo-receta").on("dblclick", function () {
    $(this).css("color", "red");
  });
});

/* desaparecer texto de las cards */
$(function () {
  $(".titulo-card").click(function () {
    $(".texto").toggle(400);
  });
});
