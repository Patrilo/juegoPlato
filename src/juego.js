function Juego(myCanvas) {
  this.canvas = document.getElementById(myCanvas);
  this.ctx = this.canvas.getContext("2d");
  this.width = 1000;
  this.fps = 60;
  this.ingredienteArr = [];
  this.reset();
}

Juego.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.draw();
      this.plato.movePlato();
      if(this.isCollision()){}
      if (this.contador == 120) {
        this.generarIngredientes();
        this.contador = 0;
      }
      this.contador++;
    }.bind(this),
    1000 / this.fps
  );
};

Juego.prototype.reset = function() {
  this.background = new Background(this);
  this.plato = new Plato(this);
    this.contador = 0;

};

Juego.prototype.draw = function() {
  this.background.draw();
  this.plato.draw();
  for (var i = 0; i < this.ingredienteArr.length; i++) {
    this.ingredienteArr[i].draw();
    this.ingredienteArr[i].y++;
  }
};

Juego.prototype.isCollision = function() {
  return this.ingredienteArr.some(
    function(ing) {
      if (
        ing.w + ing.x >= this.plato.x &&
        ing.x <= this.plato.x + this.plato.width &&
        ing.y + ing.h >= this.plato.y &&
        ing.y <= this.plato.y + this.plato.height
      ) {
        console.log(this.ingredienteArr.indexOf(ing))
        this.ingredienteArr.splice(this.ingredienteArr.indexOf(ing),1)

        console.log("isCollision")
        //ing.y = -20;



        return true;
      }
    }.bind(this)
  );
};

Juego.prototype.generarIngredientes = function() {
  var randomIng = ingredientes[Math.floor(Math.random() * ingredientes.length)];
  this.ingredienteArr.push(new Ingredient(this, randomIng));
};
