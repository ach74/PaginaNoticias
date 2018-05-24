var contadorRetweet = false;
var contadorLikes = false;
var moreNew = 1;
var demo = 4;
$(document).ready(function(){
	$('.carousel').carousel({
		interval:5000
	});



	$(window).scroll(function () {
		if ($(window).height() + $(window).scrollTop() == $(document).height()) {
			giveMeMore();
		}
	});
});


function giveMeMore() {

//alert("The paragraph was clicked." + moreNew);

if (moreNew < 4) {
	

	$.getJSON("https://cdn.rawgit.com/ach74/PaginaNoticias/3597b3c4/json/" + moreNew + ".json", function (a) {
		$("#cargar").fadeIn(1000);
		addNew(a);
		$("#cargar").fadeOut(1000);
	}); moreNew++;

} else {
	$('#mas').css("display","none");
	$(".alert-danger").css("display","block");
}
};

function addNew(json) {
	$("#aaaaa").append('<div class="row"></div>');
	$.each(json, function (i, item) {
		$(".row:last").append(

			'<div class="col-sm-4 col-md-4">'+
			'<div class="thumbnail">' +

			'<a href="#" class="navOpcion">' +
			'<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
			'<img src="' + item.img + '" class="img-rounded" alt="..." />' +
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
			'</div>');
		demo++;
	})
};