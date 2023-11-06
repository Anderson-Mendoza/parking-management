// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <button> que cierra la ventana
var close = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Si el usuario hace click en el boton cerrar, la ventana se cierra
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// // Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
