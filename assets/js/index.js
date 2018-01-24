
$(document).ready(() => {
  var containerImg = $('div');
  transImgsInFg(containerImg);
});

function transImgsInFg(containerImg) {
  // toma las imagenes dentro del contenedor dado y las envuelve en el elemento <figure> 
  $(containerImg).children('img').wrap('<figure>');
  // DESPUES de cada img inserta un <figcaption> con su atributo alt
  // attr() se suele combinar con la función each() a la hora de recorrer elementos y trabajar con selectores.
  $('div img').each(function() { 
    $(this).after('<figcaption class="d-none titleImg">' + $(this).attr('alt') + '</figcaption>');
  });
  // Al hacer hover a la imagen que muestre el figcaption y desenfoque la imagen
  $('figure img').hover(function() {
    $(this).toggleClass('blur');
    $(this).siblings('figcaption').toggleClass('d-none');
  });
}

// module.exports = {
//   hello() {
//     return 'Hello!';
//   }
// };