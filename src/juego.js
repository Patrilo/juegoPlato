

function Juego(myCanvas){
  this.canvas = document.getElementById(myCanvas);
  this.ctx = this.canvas.getContext("2d");
  this.width = 1000;
  //this.x= 110;
  //this.y= -10;
  //this.height= 200;
  //this.ingredientes = [];


  this.reset()

  }


Juego.prototype.start = function() {
  
  this.interval = setInterval(function() {
    
    
    this.draw();
    this.plato.movePlato();
    this.ctx.drawImage(this.x, this.y, this.width, this.height)
    this.ctx.drawImage(this.getimage, 110, -10,200,100)

    
  }.bind(this), 1000/60);
}

Juego.prototype.reset = function () {
this.background = new Background (this);
this.plato = new Plato (this);
this.getimage = new Image();
this.getimage.src = getimage(ingredientes[3]);

}


Juego.prototype.draw = function() {

    this.background.draw();
    this.plato.draw();


}


