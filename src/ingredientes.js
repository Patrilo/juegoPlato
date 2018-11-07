
function Ingredient (juego, ing) {
  this.juego=juego;
  this.name  = ing;
  this.img = new Image();
  this.img.src = getimage(this.name);
  this.x = Math.floor(Math.random() * this.juego.width);
  this.y = 10;
  this.w = 180;
  this.h = 30;
}


Ingredient.prototype.draw = function () {
   this.juego.ctx.drawImage(this.img, this.x, this.y,this.w,this.h)
}