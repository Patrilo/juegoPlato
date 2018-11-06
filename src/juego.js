

function Juego(myCanvas){
  this.canvas = document.getElementById(myCanvas);
  this.ctx = this.canvas.getContext("2d");
  this.width = 1000;
 
  
  this.ingrediente=[];
  this.widthIngre = 180;
  this.heightIngre = 30;
  this.xIngre = [Math.floor(Math.random() * this.width)];
  this.yIngre = -10;

  this.reset()

  }


Juego.prototype.start = function() {
  
  this.interval = setInterval(function() {
    
    
    this.draw();
    this.plato.movePlato();
    this.ctx.drawImage(this.getimage, this.xIngre, this.yIngre,this.widthIngre,this.heightIngre)
    this.yIngre += 1;
    


  }.bind(this), 1000/60);
}

Juego.prototype.reset = function () {
this.background = new Background (this);
this.plato = new Plato (this);
this.getimage = new Image();
this.getimage.src = getimage(ingredientes[Math.floor(Math.random() * ingredientes.length)]);


}


Juego.prototype.draw = function() {

    this.background.draw();
    this.plato.draw();


}

Juego.prototype.isCollision = function() {

return this.ingredientes.some(function(ing) {

}

}

/*

Juego.prototype.isCollision = function() {
  // colisiones genéricas 
  // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  return this.obstacles.some(function(obstacle) {
    return (
      ((this.player.x + this.player.w) >= obstacle.x &&
       this.player.x < (obstacle.x + obstacle.w) &&
       this.player.y + (this.player.h - 20) >= obstacle.y)
    );
  }.bind(this));
};

*/