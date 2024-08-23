function mostrarOcultarTexto(idElemento) {
  let elementoHTML = document.getElementById(idElemento);

  if (elementoHTML.style.display == "none") { //si ¿el elemento no es visible?
    elementoHTML.style.display = "block"; //si es verdadero asigno el valor de block a la propiedad display
  }
  else {
    elementoHTML.style.display = "none"; //si es falso ejecuta asigar valor de none
  }


}

