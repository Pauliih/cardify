const $ = require('jquery');

$(document).ready(function() {
  $('.containerImg').cardify({});
});

(function($) {
  $.fn.cardify = function() {
    function wrapImgsInFg() {
      // toma las imagenes dentro del contenedor dado y las envuelve en el elemento <figure> 
      $('.containerImg').children('img').wrap('<figure>');
      // DESPUES de cada img inserta un <figcaption> con su atributo alt
      // attr() se suele combinar con la función each() a la hora de recorrer elementos y trabajar con selectores.
      $('div img').each(function() { 
        $(this).after('<figcaption class="d-none title-img">' + $(this).attr('alt') + '</figcaption>');
      });
    };
    wrapImgsInFg();

    function hoverImg() {
      $('figure img').hover(function() {
        $(this).toggleClass('blur');
        $(this).siblings('figcaption').toggleClass('d-none');
      });
    };
    hoverImg();
  };
})($);

let TRANSFORM = {};

TRANSFORM.extension = function(img) {
  const image = $('img');
  // Tomo el valor del src
  const file = $('img').attr('src');
  const eachFile = $(image).each(function() {
    // Devuelve la cadena desde el index del punto hasta el final
    const extensions = file.substring(file.lastIndexOf('.'));
    if (extensions === '.jpg' & extensions === '.png' & extensions === '.gif') {
      console.log('La imagen contiene una extensión válida: ' + extensions);
    } else {
      console.log('La imagen no contiene una extensión válida:' + extensions);
    }
  });
};

TRANSFORM.extension();

module.exports = TRANSFORM;