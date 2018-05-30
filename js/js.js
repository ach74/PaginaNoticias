
var contadorNoticias = 1;
var demo = 4;
$(document).ready(function(){
	//Transición carousel
	$('.carousel').carousel({
		interval:5000
	});

	//Animacion del Scroll
	
	$("html, body").animate({
		scrollTop: 100
	}, 2000);

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
});

function cargarNoticias(){
	if (contadorNoticias < 4) {

		//Coger Json del Servidos
		$.getJSON("https://rawgit.com/ach74/PaginaNoticias/master/json/" + contadorNoticias + ".json", function (a) {
			//Logo cargando
			$("#cargar").fadeIn(500);

			//Añadir nuevo contenido
			$("#contenedorNoticias").append('<div class="row"></div>');
			//Añadir columnas
			$.each(a, function (i, item) {
				$(".row:last").append(

					'<div class="col-sm-4 col-md-4">'+
					'<div class="thumbnail" id="cont'+demo+'" style="display:none;">' +

					'<a href="#" class="navOpcion">' +
					'<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
					'<img src="' + item.imgmid + '" class="img-rounded" alt="..." />' +
					'</a>' +

					'<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
					'<button type="button" class="btn btn-default" data-toggle="collapse" data-target="#demo'+demo+'">Info</button>'+
					'<div id="demo'+demo+'" class="collapse">'+ 
					'<hr>'+
					'<div>'+
					'<div class="media">'+
					'<div class="media-left">'+
					'<img src="img/img_avatar1.png" class="media-object" style="width:45px">'+
					'</div>'+ 
					'<div class="media-body">'+
					'<h4 class="media-heading">'+ item.autor + '<br><small><i>Posted on '+ item.fecha.month+' '+item.fecha.day+',' +item.fecha.year+'</i></small></h4>'+
					'<button type="button" class="btn btn-warning btn-sm btn-ac">Acción</button><button type="button" class="btn btn-danger btn-sm">Aventura</button>'+
					'</div>'+ 
					'</div>'+ 
					'</div>'+ 
					'</div>'+
					'</div>'+
					'</div>'+
					'</div>');
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
			});
			$("#cargar").fadeOut(500);
		});
		contadorNoticias++;
	} else {
		$('#mas').css("display","none");
		$(".alert-danger").css("display","block");
	}
}
