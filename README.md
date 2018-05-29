# Practicas_Bootstrap

## Mi pagina web: https://rawgit.com/ach74/PaginaNoticias/master/index.html

### Pagina de noticias hechas por Achraf El Ouakili:

En este proyacto he tenido que realizar una pagina web en la cual tengamos una noticia en una posicion especificada por el cliente y que ademas la pagina web carge noticias de unos archivos Json. Para ello primero hemos tenido que diseñar la pagina web tanto para pantallas de ordenador como para moviles.

Para empezar he hecho el diseño de la pagina web, el diseño de la pagina web es el siguiente:
![Diseño pagina web](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/dise%C3%B1oPc.jpg "Diseño 01")

La pagina con el menu abierto se deberia de ver algo asi:
![Diseño pagina web menu abierto](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/dise%C3%B1oPc2.jpg "Diseño 02")

Para movil lo he distribuido de la siguiente manera:
![Diseño pagina web para movil](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/dise%C3%B1oMovil.jpg "Diseño movil")

Lo primero que hice a la hora de hacer el proyecto fue la barra lateral, ya que hay muchos estilo de menu lateral, prove algunos y al final me quede con el que se activa al pasar por encima. Mediante la la orden ":hover" se activa ademas de dar algun que otro efecto al menu. El resultado final es el siguiente:

![Menu lateral](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/cap01.png "Menu lateral")

En html pertenece a esta seccion de codigo:

<div class="left">
		<a href="#" class="navOpcion">
			<div class="item icon">
				<span class="glyphicon"></span>A7SERIES
			</div>
		</a>
		<a href="index.html" class="navOpcion">
			<div class="item icon active">
				<span class="glyphicon glyphicon-home"></span>Home
			</div>
		</a>
		<a href="#" class="navOpcion">
			<div class="item icon">
				<div class="glyphicon glyphicon-cloud"></div>Save
			</div> 
		</a>
		<a href="#" class="navOpcion">
			<div class="item icon">
				<span class="glyphicon glyphicon-pencil"></span>Edit
			</div>
		</a>
		<a href="#" class="navOpcion">
			<div class="item icon">
				<span class="glyphicon glyphicon-user"></span>Sign Up
			</div>
		</a>
		<a href="javascript:window.close();" class="navOpcion">
			<div class="item icon">
				<span class="glyphicon glyphicon-remove"></span>Exit
			</div>     
		</a>
	</div>