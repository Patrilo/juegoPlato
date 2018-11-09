function CreateImageHam(juego, nameImg, plato) {
  this.juego = juego;
  this.img = new Image();
  this.img.src = getimage(nameImg);

  this.y = 120;
  this.w = 150;
  this.h = 25;
  this.x = plato.x;
  
}

CreateImageHam.prototype.draw = function() {
  
  this.juego.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};


