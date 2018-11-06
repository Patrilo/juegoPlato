function Plato(juego) {
  this.juego = juego;
  this.img = new Image();
  this.img.src = "./images/madera.png";
  this.x = 450;
  this.y = 0;
  this.width = 220;
  this.height = 70;
  

  this.setListeners();
}

Plato.prototype.draw = function() {
  this.juego.ctx.drawImage(this.img, this.x, 80, this.width, this.height);
};

var LEFT_KEY = 37;
var RIGHT_KEY = 39;

Plato.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === LEFT_KEY) {
      this.x -= 10;
    }       
    else if (event.keyCode === RIGHT_KEY) {
      this.x += 10;
    }
  }.bind(this);
  
}



Plato.prototype.movePlato = function() {
  if (this.x <= 0) {
    this.x = 0;
  } else if (this.x >= this.juego.width -100){
      this.x =  this.juego.width - 100;

    }
  }


