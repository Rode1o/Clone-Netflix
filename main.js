window.addEventListener("load", function () {
  console.log("the content has been charge!");
  var imagenes = [];

  imagenes[0] = "images/covers/flux.png";
  imagenes[1] = "images/covers/aeon.png";
  imagenes[2] = "images/covers/black.png";
  imagenes[3] = "images/covers/nina.png";

  var indiceImagenes = 0;
  function cambiarImagenes() {
    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < 3) {
      indiceImagenes++;
    } else {
      indiceImagenes = 0;
    }
  }
  setInterval(cambiarImagenes, 1000);
});
