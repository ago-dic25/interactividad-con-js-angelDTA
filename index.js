// Variables
var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos");

// Contenedores
var cuadros = document.getElementById("cuadros");
var galeria = document.getElementById("galeria");

// Eventos
mas.addEventListener("click", function(){
    alert("Sección en progreso...");
});

verTodos.addEventListener("click", function(){
    // Toggle cuadros
    if (cuadros.classList.contains("ocultar")) {
        cuadros.classList.remove("ocultar");
        cuadros.classList.add("mostrar");
    } else {
        cuadros.classList.remove("mostrar");
        cuadros.classList.add("ocultar");
    }
});

verFotos.addEventListener("click", function(){
    // Toggle galería
    if (galeria.classList.contains("ocultar")) {
        galeria.classList.remove("ocultar");
        galeria.classList.add("mostrar");
    } else {
        galeria.classList.remove("mostrar");
        galeria.classList.add("ocultar");
    }
});
