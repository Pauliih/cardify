// assert es la libreria que nos permite verificar cosas
const assert = require('assert');
// instanciamos el codifo de nuestra libreria
// const mylib = require('../lib')
const mylib = require('../assets/js/index.js');
 
// describe es la forma en la que describimos que pasará
describe('mylib', function() {
  describe('#hello()', function() {
    it('debería devolver un string representando un saludo', function() {
      assert.equal(mylib.hello(), "Hello!")
    })
  })
})