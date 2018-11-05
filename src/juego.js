

function Juego(myCanvas){
  this.canvas = document.getElementById(myCanvas);
  this.ctx = this.canvas.getContext("2d");
  
  this.reset()

  }


Juego.prototype.start = function() {
  
  this.interval = setInterval(function() {
    
    
    this.draw();
    
  }.bind(this), 1000/60);
}

Juego.prototype.reset = function () {
this.background = new Background (this);

}


Juego.prototype.draw = function() {

    this.background.draw();

}
/*
Juego.prototype.drawRoad = function() {

  this.ctx.fillStyle = "#357E1A";
  this.ctx.fillRect(0,0,40,this.height);
}

*/

/*
Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
  this.score = 0;
};

*/