
window.onload = function() {
  
  {
    funcion ();
  };


function Juego(){
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.height = this.canvas.height;
  this.width = this.canvas.width;
  this.x = 150;
  this.y = 600;
}

Juego.prototype.drawRoad = function() {

  this.ctx.fillStyle = "#357E1A";
  this.ctx.fillRect(0,0,40,this.height);
}
}
