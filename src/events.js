document.querySelector(".boton").onclick = function() {
    empezar();
   document.querySelector(".cajita").style.display = "none";
   document.querySelector("#mostrarJuego").style.display = "flex";
  
 }

 document.querySelector(".botonAgain").onclick = function() {
 document.querySelector("#tryAgain").style.display = "none";
  empezar();

 }
