<h1>Teo ¿Tienes hambre?</h1

<p>Es un juego divertido que consiste en coger todos los ingredientes para preparar una rica hamburguesa. Para ello, tienes que mover el plato y elegir aquellos que vienen en el menú que aparece en la parte derecha.

Para ganar, tienes que conseguir todos los ingredientes. El pan y la carne valen 1 punto. El resto de ingredientes del menú valen 2.

Tendrás 3 intentos para lograrlo.
</p>

## Futuras mejoras:
- Mejorar la calidad de todas las imagenes
- Crear niveles en los que dependa la velocidad de los ingredientes y del plato

## Parte del código que más me ha costado:
La parte de las colisiones y la actualización del menú

``` js


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

         
          );

  ```



## Si volvieras al primer día, ¿Qué harías?

Dedicaria mas tiempo al diseño y a la estetica. Además, me pararia más tiempo a pensar la organización del propio código y de los archivos.





