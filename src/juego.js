function Juego(myCanvas) {
  this.canvas = document.getElementById(myCanvas);
  this.ctx = this.canvas.getContext("2d");
  this.width = 1000;
  this.fps = 60;
  this.ingredienteArr = [];
  this.reset();
  this.ingAcertados = 0;
  this.tries = 3;
  this.counter = 0;
  this.correctIngre = [];
  this.actualY = 10;
}

Juego.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.draw();
      this.plato.movePlato();
      if (this.isCollision()) {
      }
      if (this.correctIngre.length !== 0) {
        this.correctIngre.forEach(
          function(ele) {
            ele.x = this.plato.x + 25;
            ele.draw();
          }.bind(this)
        );
      }
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
  this.hamburguesa = new Hamburguesa(this);
  this.hamburguesa.addIng();
  this.printImgDOM();
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
    function(ingreObj) {
      if (
        ingreObj.w - 20 + (ingreObj.x + 10) >= this.plato.x &&
        ingreObj.x <= this.plato.x + this.plato.width &&
        ingreObj.y + (ingreObj.h - 28) >= this.plato.y &&
        ingreObj.y <= this.plato.y + this.plato.height
      ) {
        this.ingredienteArr.splice(this.ingredienteArr.indexOf(ingreObj), 1);

        if (this.hamburguesa.miHamburguesa.includes(ingreObj.name)) {
          var collisioned = document.getElementsByClassName(ingreObj.name);
          this.ingAcertados++;

         
          collisioned[0].src = "./images/ticVerde.png";

          ingredientes.splice(ingredientes.indexOf(ingreObj.name), 1);
          this.correctIngreItem = new CreateImageHam(
            this,
            ingreObj.name,
            this.plato
          );
          this.correctIngre.push(this.correctIngreItem);
          this.actualY += 10;
          this.correctIngreItem.y -= this.actualY;

          if (ingreObj.name == "panHamburguesa" || ingreObj.name == "carne") {
            this.counter++;
          } else {
            this.counter += 2;
          }
        } else {
          this.tries--;
        }
        this.puntuacion();

        if (this.ingAcertados == this.hamburguesa.miHamburguesa.length) {
          setTimeout(
            function() {
              mcDonald.play()
              swal({
                title: "¡A comer!",
                icon: "success",
                button: "Conseguido!"
              });
             }.bind(this),
            700
          );
        } else {
          if (this.tries == 0) {
            clearInterval(this.interval);
            document.querySelector("#tryAgain").style.display = "block";
            this.DOMremove();
            platosRotos.play()
            setTimeout(
              
              1500
            );
          }
        }
        return true;
      }
    }.bind(this)
  );
};

Juego.prototype.generarIngredientes = function() {
  var randomIng = ingredientes[Math.floor(Math.random() * ingredientes.length)];
  this.ingredienteArr.push(new Ingredient(this, randomIng));
};


Juego.prototype.printImgDOM = function() {
  this.hamburguesa.miHamburguesa.forEach(ingrediente => {
    var imagen = document.createElement("img");
    imagen.src = getimage(ingrediente);
    imagen.className = ingrediente;

    var myDiv = document.getElementById("ingredientes");

    myDiv.appendChild(imagen);
  });
};

Juego.prototype.DOMremove = function() {
  for(var i = 0; i <this.hamburguesa.miHamburguesa.length; i++){
  var imagen = document.querySelector("#ingredientes > img")
  imagen.remove()
  }
};


Juego.prototype.puntuacion = function() {
  document.getElementById("puntuacion").innerHTML = this.counter;
};
