
$(document).ready(function(){
	$("#menu").click(function(){
		$("#nav").css("width","250px");
		$("#main").css("marginLeft","250px");
		$("body").css("backgroundColor","rgba(0,0,0,0.4)");
		$("#menu").hide(500);
	});
	$(".close").click(function(){
		$("#nav").css("width","0");
		$("#main").css("marginLeft","0");
		$("body").css("backgroundColor","rgb(250, 250, 250,1)");
		$("#menu").show(500);
	});

	$("#titulo-noticia").click(function(){
		$("#article-content").slideToggle("slow");
	});

	$("#titulo-noticia2").click(function(){
		$("#article-content2").slideToggle("slow");
	});

	$("#titulo-noticia3").click(function(){
		$("#article-content3").slideToggle("slow");
	});


})

