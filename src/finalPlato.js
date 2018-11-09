function Hamburguesa(juego) {
  this.juego = juego;
  this.miHamburguesa = ["panHamburguesa", "carne"];
}


Hamburguesa.prototype.addIng = function() {
  for (var i = 0; i < 4; i++) {
    var randomIng =
      ingredientes[Math.floor(Math.random() * ingredientes.length)];

    if (!this.miHamburguesa.includes(randomIng)) {
      this.miHamburguesa.push(randomIng);
    }else{
      i--
    }

  }
};

