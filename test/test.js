const chai = require('chai');
const jsdom = require('jsdom');
// assert es la libreria que nos permite verificar cosas
// const assert = require('assert');

const { JSDOM } = jsdom;
let dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Cardify</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <h1 class="text-center">Cardify</h1>

    <div class="container">
      <div class="row">
        <div class="containerImg col-md-4">
          <img class="" src="assets/images/movieposter.jpg" alt="I Origins">
          <img class="" src="assets/images/el_secreto_de_sus_ojos-862971973-large.jpg" alt="El secreto de sus ojos">
        </div>
        <div class="containerImg col-md-4">
          <img class="" src="assets/images/jeux_d_enfants-854462488-large.jpg" alt="Quiereme si te atreves">
          <img class="" src="assets/images/wallstreet.jpg" alt="El lobo de wall street">
        </div>
        <div class="containerImg col-md-4">
          <img class="" src="assets/images/BrokenCircle.jpg" alt="The broken circle breakdown">
          <img class="" src="assets/images/Million-dollar-baby.jpg" alt="Million Dollar Baby">
        </div>
      </div>
    </div>
  
  <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>  
  <script src="lib/main.js"></script>
 </body>
</html>`);
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

var $ = require('jquery');

// instanciamos el codigo de la librería
const TRANSFORM = require('../src/cardify');

var expect = require('chai').expect;

// describe es la forma en la que describimos que pasará
describe('Comprobar la extensión de la imagen', () => {
  it('Debería devolver true para archivos con extensión .jpg, .gif, o .png', () => {
    expect(TRANSFORM.extension(), true);
  });
  it('Debería devolver false para archivos con extensión distinta de .jpg, .png o .gif', () => {
    expect(TRANSFORM.extension(), false);
  });
  it('Debería devolver true para archivos con extensión .jpg, .gif, o .png', () => {
    var endsImg = $('figure').children('img').attr('src');
    expect(endsImg.endsWith('.jpg'), true);
  });
  it('Debería devolver false para archivos con extensión distinta de .jpg, .gif, o .png', () => {
    var endsImg = $('figure').children('img').attr('src');
    expect(endsImg.endsWith('.doc'), false);
  });
});

describe('Comprobar si el atributo alt de la imagen dentro de figure está vacío', () => {
  it('El atributo alt no está vacío', () => {
    var lengthAlt = ($('figure').children('img').attr('alt').length);
    expect($('figure').children('img').attr('alt')).to.have.length(lengthAlt);
  });
});

describe('Comprobar que el container tenga la clase containerImg', () => {
  it('Debería devolver true para contenedor con clase containerImg', () => {
    expect($('img').parent().hasClass('containerImg'), true);
  });
  it('Debería devolver false para contenedor con clase vacía', () => {
    expect($('img').parent().hasClass(''), false);
  });
});