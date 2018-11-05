
function Background (juego) {

  this.juego = juego;

this.img = new Image ();
this.img.src = "./images/fondoDifuminado.jpg";
this.x = 0;
this.y = 0;
}

Background.prototype.draw = function() {
  this.juego.ctx.drawImage(this.img, this.x, this.y, this.juego.canvas.width, this.juego.canvas.height)

}


/*



<a href="https://www.freepik.es/fotos-vectores-gratis/vintage">Foto de vintage creado por kjpargeter - www.freepik.es</a>

*/