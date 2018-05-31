# Practicas_Bootstrap

## Mi pagina web : 
https://rawgit.com/ach74/PaginaNoticias/master/index.html

## Mi pagina web minificada : 
https://rawgit.com/ach74/PaginaNoticias/minifyFull/index.html

### Pagina de noticias hechas por Achraf El Ouakili:

En este proyecto he tenido que realizar una pagina web en la cual tengamos una noticia en una posición especificada por el cliente y que además la pagina web cargué noticias de unos archivos Json. Para ello primero hemos tenido que diseñar la pagina web tanto para pantallas de ordenador como para móviles.

Para empezar he hecho el diseño de la pagina web, el diseño de la pagina web es el siguiente:
![Diseño pagina web](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/dise%C3%B1oPc.jpg "Diseño 01")

La pagina con el menú abierto se debería de ver algo así:
![Diseño pagina web menú abierto](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/dise%C3%B1oPc2.jpg "Diseño 02")

Para móvil lo he distribuido de la siguiente manera:
![Diseño pagina web para movil](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/dise%C3%B1oMovil.jpg "Diseño movil")

### Menú
Lo primero que hice a la hora de hacer el proyecto fue la barra lateral, ya que hay muchos estilo de menú lateral, provee algunos y al final me quede con el que se activa al pasar por encima. Mediante la la orden ":hover" se activa además de dar algún que otro efecto al menú. El resultado final es el siguiente:

![Menu lateral](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/cap01.png "Menu lateral")

En html pertenece a esta sección de código:

```
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
```

Y la parte de código con el nombre de class **left** pertenece solo al menú, por lo tanto la parte de código con el nombre de class **right** pertenece al resto del body.

### Corousel

* En el right tenemos al principio de todo un **carousel** que nos muestra las imágenes pasar, hace la función de banner. El tiempo que hay entre transición y transición esta alterado mediante jQuery

```
	$('.carousel').carousel({
		interval:5000
	});
```

Esta **carousel** es responsive y el tamaño depende de la pantalla en la que se visualiza.

### Publicidad y Redes

* En el lateral derecho tenemos colocado la publicidad, para ello he creado un div donde he metido la **publicidad** y un **widget** de intagram. 
	* La publicidad es un gif cuadrado, que cuando pasamos a la versión móvil cambia a un imagen con otro tipo de publicidad rectangular. Ademas de que la posición cambia. En la versión de escritorio esta en un lateral en la versión para móvil debajo del **Corousel**. A medida que vamos reducir la resolución la publicidad se va haciendo mas pequeña.

	* También tenemos un widget de Instagram con las ultimas fotos subidas, para crear este widget he usado una [pagina externa](https://snapwidget.com/) que después de vincular una cuenta de instagram te proporciona el siguiente código:

	```
		<iframe src="https://snapwidget.com/embed/549773" class="snapwidget-widget" id="widgetInstagram"></iframe>
	```

	Luego mediante CSS le he modificado un para de formatos de estilo y le he añadido un poco de decoración para que de el pego de pertenecer a instagram. Ademas de que en la versión móvil este widget no aparece:

	El resultado de la publicidad y el widget:

![Publicidad y el widget](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/cap02.png "Publicidad y el widget")	

### Noticias

 * La distribución de la pagina web es al principio una noticia grande que ocupa todo el contenedor disponible y debajo pequeñas noticias de tres en tras. Esta distribución esta hecha con Bootstrap.

 * Cada noticia tiene un botón de informacion donde nos dice quien lo ha publicado y cuando ha sido publicada, ademas de como es catalogada la serie.

 * Todas las noticias tiene un ":hover" que les da una animación al pasar por encima de ella.

 * Las tres primeras noticias nos lleva a una pagina distinta donde se nos habla de esta de forma individual. Esta pagina se abre al pulsar o en la foto o el titulo de la noticia.

 	* Estas noticias tiene el mismo aspecto que la pagina principal, pero en vez de tener muchas noticias solo tenemos una con toda la informacion de esta.

### Cargar mas noticias

* Las cuatro primeras noticias están escritas en el html de la pagina principal, el resto son cargadas desde un Json y añadidas mediante jQuery.

* Estas noticias se añaden o bien cuando hacemos **scroll** hacia abajo de la pagina o cuando le damos al botón de "Give me more", ambas usan el mismo método de carga solo que cada uno lo activa de una forma u otra.

Código:


```
	//Cargar por el scroll
	$(window).scroll(function () {
		if ($(window).height() + $(window).scrollTop() == $(document).height()) {
			cargarNoticias();
		}
	});
	//Cargar por el boton
	$("#mas").click(function(){
		cargarNoticias();
	});

```
* Las noticias son cargadas con un efecto piano, este efecto lo he realizadon con JQuery:

```
				//Efecto de carga
				//----------------------//
				if (demo == 4 || demo == 7 || demo == 10) {
					$("#cont"+demo).delay("125").fadeIn();
				}
				else if (demo == 5 || demo == 8 || demo == 11) {
					$("#cont"+demo).delay("250").fadeIn();
				}
				else{
					$("#cont"+demo).delay("500").fadeIn();
				}
				demo++;
```

* Una vez ya no se pueden cargar mas noticias nos sale un mensaje abajo de la pagina que nos informa de que no hay mas noticias, este mensaje esta ya en el html solo que esta in-activado el trozo de código que lo habilita es el siguiente:

```
	} else {
		$('#mas').css("display","none");
		$(".alert-danger").css("display","block");
	}
```

### Añadido

* Al iniciar la pagina se activa una animación que nos sitúa al principio. Es la siguiente sección de código:

```
	//Animación del Scroll
	
	$("html, body").animate({
		scrollTop: 100
	}, 2000);

```

* Al cargar una nueva noticia nos sale un gif de login.
