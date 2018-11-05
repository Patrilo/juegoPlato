

function Juego(myCanvas){
  this.canvas = document.getElementById(myCanvas);
  this.ctx = this.canvas.getContext("2d");
  
  this.reset()

  }


Juego.prototype.start = function() {
  
  this.interval = setInterval(function() {
    
    
    this.draw();
    this.plato.move();
    
  }.bind(this), 1000/60);
}

Juego.prototype.reset = function () {
this.background = new Background (this);
this.plato = new Plato (this);

}


Juego.prototype.draw = function() {

    this.background.draw();
    this.plato.draw();

}



/*
Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
  this.score = 0;
};

*/