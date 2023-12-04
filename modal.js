// Ventana modal
let modal = document.getElementById("ventanaModal");

// Botón que abre el modal
let boton = document.getElementById("btnAbrirModal");

// Hace referencia al elemento <button> que cierra la ventana
//let close = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Si el usuario hace click en el boton cerrar, la ventana se cierra
// close.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// // Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
