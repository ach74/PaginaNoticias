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
	
	if (moreNew < 6) {
		$.getJSON("https://github.com/ach74/PaginaNoticias/tree/master/json/" + moreNew + ".json", function (jsonObject) {
			addrow(jsonObject);
		}); moreNew++;
	} else {
		$('#mas').text('No hay más noticias');
	}
};

function addrow(json) {
	$.each(json, function (i, item) {
		$(".noticias").append('<div class="col-sm-4 col-md-4">' +
			'<div class="thumbnail">' +
			'<div class="caption">' + '<h3 class="text-justify">' + item.titulo + "</h3>" + "</div>" +
			'<img src="' + item.imgmid + '" alt="..." />' +
			'<div class="caption">' + '<p class="text-justify">' + item.descripcion + "</p>" +
			'<p class="text-right">' + "<em>" + item.fecha + "</em>" + "</p>" + "</div>" + "</div>" + "</div>");
	})
};