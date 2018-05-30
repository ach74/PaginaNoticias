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

### Menu
Lo primero que hice a la hora de hacer el proyecto fue la barra lateral, ya que hay muchos estilo de menu lateral, prove algunos y al final me quede con el que se activa al pasar por encima. Mediante la la orden ":hover" se activa ademas de dar algun que otro efecto al menu. El resultado final es el siguiente:

![Menu lateral](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/cap01.png "Menu lateral")

En html pertenece a esta seccion de codigo:

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

Y la parte de codigo con el nombre de class **left** pertenece solo al menu, po lo tanto la parte de codigo con el nombre de class **right** pertenece al resto del body.

### Corousel

* En el right tenemos al principo de todo un **carousel** que nos muestra las imagenes pasar, hace la funcion de banner. El tiempo que hay entre transicion y transicion esta alterado mediante jQuery

```
	$('.carousel').carousel({
		interval:5000
	});
```

Esta **carousel** es responsive y el tamaño depende de la pantalla en la que se visualiza.

### Publicidad y Redes

* En el lateral derecho tenemos colocado la publicidad, para ello he creado un div donde he metido la **publicidad** y un **widget** de intagram. 
	* La publicidad es un gif cuadrado, que cuando pasamos a la version movil cambia a un imagen con otro tipo de publicidad rectangular. Ademas de que la posicion cambia. En la version de escritorio esta en un lateral en la version para movil debajo del **Corousel**. A medida que vamos reducion la resolucion la publi se va haciendo mas pequeña.

	* Tambien tenemos un widget de Instagram con las ultmias fotos subidas, para crear este widget he usado una [pagina externa](https://snapwidget.com/) que despues de vincular una cuenta de instagram te proporciona el siguiente codigo:

	```
		<iframe src="https://snapwidget.com/embed/549773" class="snapwidget-widget" id="widgetInstagram"></iframe>
	```

	Luego mediante CSS le he modificado un para de fomatos de estilo y le he añadido un poco de decoracion para que de el pego de pertenecer a instagram. Ademas de que en la version movil este widget no aparece:

	El resultado de la publicidad y el widget:

![Publicidad y el widget](https://github.com/ach74/PaginaNoticias/blob/master/img/dise%C3%B1o/cap02.png "Publicidad y el widget")	

### Noticias

 * La distribucion de la pagina web es al principio una noticia grande que ocupa todo el contenedo diponible y debajo pequeñas noticias de tres en tras. Esta ditribucion esta hecha con bootstrap

 * Cada noticia tiene un boton de informacion donde nos dice quein lo ha publicado y cuando ha sido publicada, ademas de como es catalogada la serie.

 * Todas las noticias tiene un ":hover" que les da una animacion al pasar por encima de ella.

 * Las tres primeras noticias nos lleva a una pagina distinta donde se nos habla de esta de forma indibidual. Esta pagina se abre al clicar o en la foto o el titulo de la noticia.

 	* Estas noticias tiene el mismo aspecto que la pagina principal, pero en vez de tener muchas noticias solo tenemos una con toda la informacion de esta.

### Cargar mas noticias

* Las quatro primeras noticias estan encritas en el html de la pagina principal, el resto son cargadas desde un Json y añadidas mediante jQuery.

* Estas noticias se añaden o bien cuando hacemos **scroll** hacia abajo de la pagina o cuando le damos al boton de "Give me more", ambas usan el mismo metodo de carga solo que cada uno lo acctiva de una forma u otra.

Codigo:

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
* Las noticias son cargadas con un efecto piano, este efecto lo he realizacon con JQuery:

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

* Una vez ya no se pueden cargar mas noticias nos sale un mensaje abajo de la pagina que nos informa de que no hay mas noticias, este mensaje esta ya en el htlm solo que esta inactivado el trozo de codigo que lo habilita es el siguinete:

```
	} else {
		$('#mas').css("display","none");
		$(".alert-danger").css("display","block");
	}
```

