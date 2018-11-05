function Plato (juego) {

this.juego = juego;
this.img = new Image ();
this.img.src = "./images/platoBlanco.png";
this.x = 0;
this.y = 0;
this.width = 320;
this.height = 80;
this.vy = 20;
this.vx = 10;

this.setListeners();

}


Plato.prototype.draw = function () {
  this.juego.ctx.drawImage (this.img, 450, 80, this.width, this.height);
    };



var LEFT_KEY = 37;
var RIGHT_KEY = 39;

Plato.prototype.setListeners = function () {
  document.onkeyleft = function (e) {
    if(event.keyCode === LEFT_KEY && this.y == this.y0) {
      this.y -= 5;
      this.vy -= 10;
  }



}.bind(this);
};
  
Plato.prototype.move = function (){
  var gravity = 0.4;
  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }
};



