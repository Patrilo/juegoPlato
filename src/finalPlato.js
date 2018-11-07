function Hamburguesa (juego) {
  this.juego = juego;
  this.miHamburguesa = ["panHamburguesa", "carne"]
  }
  
  Hamburguesa.prototype.addIng= function () {

    for ( var i = 0; i<4; i++){
      this.miHamburguesa.push(ingredientes[Math.floor(Math.random() * ingredientes.length)]);

    
  }
  }