var contadorRetweet = false;
var contadorLikes = false;
var moreNew = 1;
$(document).ready(function(){
	$('.carousel').carousel({
		interval:5000
	});
	$(".glyphicon-heart").click(function(){
		if (contadorLikes==false) {
			$(this).css("-webkit-text-fill-color", " rgba(255, 100, 100,0.8)");
			contadorLikes = true;

		}else{
			$(this).css("-webkit-text-fill-color", " #e3e3e300");
			contadorLikes = false;
		}
	});

	$(".glyphicon-retweet").click(function(){
		if (contadorRetweet==false) {
			$(this).css("-webkit-text-fill-color", " rgba(132, 255, 132, 0.6)");
			window.open('https://twitter.com/', '_blank');
			contadorRetweet = true;
		}else{
			$(this).css("-webkit-text-fill-color", " #e3e3e300");
			contadorRetweet = false;
		}
	});
});
function giveMeMore() {

//alert("The paragraph was clicked." + moreNew);

if (moreNew < 4) {
	$.getJSON("https://cdn.rawgit.com/ach74/PaginaNoticias/62ee09bc/json/" + moreNew + ".json", function (a) {
		addNew(a);
	}); moreNew++;
} else {
	$('#mas').text('No hay más noticias');
}
};

function addNew(json) {
	var demo = 4;
	$("#aaaaa").append('<div class="row"></div>');
	$.each(json, function (i, item) {
		$(".row:last").append(

		'<div class="col-sm-4 col-md-4">'+
			'<div class="thumbnail">' +

					'<a href="#" class="navOpcion">' +
						'<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
						'<img src="' + item.img + 'class="img-rounded" " alt="..." />' +
					'</a>' +

				'<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
						'<button type="button" class="btn btn-default" data-toggle="collapse" data-target="#demo'+demo+'">Info</button>'+
					'<div id="demo'+demo+'" class="collapse">'+ 
		 				'<hr>'+
						'<div class="container">'+
							'<div class="media">'+
								'<div class="media-left">'+
									'<img src="img/img_avatar1.png" class="media-object" style="width:45px">'+
								'</div>'+ 
								'<div class="media-body">'+
									'<h4 class="media-heading">'+ item.autor + '<br><small><i>Posted on '+ item.fecha.month+' '+item.fecha.day+',' +item.fecha.year+'</i></small></h4>'+
									'<button type="button" class="btn btn-warning btn-sm">Acción</button><button type="button" class="btn btn-danger btn-sm">Aventura</button>'+
								'</div>'+ 
							'</div>'+ 
						'</div>'+ 
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'

			/*
			'<div class="col-sm-4 col-md-4">' +
			'<div class="thumbnail">' +
			'<a href="#" class="navOpcion">' +
			'<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
			'<img src="' + item.imgmid + '" alt="..." />' +
			'</a>' +
			'<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
			'<div class="container-fluid">' +

			'<button type="button" class="btn btn-default" data-toggle="collapse" data-target="#demo1">'+Info+'</button>'+
			'<div class="glyphicon glyphicon-heart">'+'</div>'+
			'<div class="glyphicon glyphicon-retweet">'+'</div>'+
			'</div>'+
			'<div id="demo1" class="collapse">'+ 
			'<hr>' +
			'<div class="container">'+
			'<div class="media">'+
			'<div class="media-left">'+
			'<img src="img/img_avatar1.png" class="media-object" style="width:45px">' + 
			'</div>' +
			'<div class="media-body">'+
			'<h4 class="media-heading">'+'Rick Jam' +'<br>'+'<small>'+'<i>'+ 'Posted on' + item.fecha.month + ' ' + item.fecha.day + ' ' + item.fecha.year+'</i>'+'</small>'+'</h4>'+
			'<button type="button" class="btn btn-warning btn-sm">'+ 'Animation'+'</button>'+
			'<button type="button" class="btn btn-info btn-sm">'+'Comedy'+'</button>'+
		 	'<button type="button" class="btn btn-danger btn-sm">'+'Adventure'+'</button>'+
		 	'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'
		 	*/);
		demo++;
	})
};