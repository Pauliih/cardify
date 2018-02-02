# Cardify

Cardify es una librería de JS que busca todas las imágenes dentro de un contenedor y que al encontrarlas las envuelve en un elemento *figure*. Además agrega un elemento *figcaption* con el texto del atributo (alt) de cada imagen y lo muestra sobre ella al pasar el cursor (hover), además de darle un estilo a la imagen.

![IMAGE](https://github.com/carocelis/cardify/blob/ravel/assets/images/cardify1.png)

![IMAGE](https://github.com/carocelis/cardify/blob/ravel/assets/images/cardify2.png)


Proyecto desarrollado por Paula Campos y Carolina Celis.

***


## Herramientas:

- Proyecto realizado con las siguientes dependencias de desarrollo:
  - npm jquery ~v.3.2.1
  - npm popper ~v.1.0.1
  - npm mocha ~v.3.0.0
  - npm chai ~v.4.1.2
  - npm jsdom ~v.10
  - npm nodejs ~v.9.4.0
  - npm eslint ~v.4.15.0
  - npm browserify ~v.15.2.0

- Proyecto realizado con las siguientes dependencias de producción:
  - Sublime Text 3.0
  - npm bootstrap ~v.4.0.0

## Modo de uso:

```
<!--Insertar al final de la etiqueta body-->
<script src="lib/main.js"></script>
```


```
//`.containerImg` es la clase que se inserta en el contenedor donde se buscarán todas las imágenes a ser procesadas.
$('.containerImg').cardify({});
```
