
$(document).ready(function(){
	$("#menu").click(function(){
		$("#nav").css("width","250px");
		$("#main").css("marginLeft","250px");
		$("body").css("backgroundColor","rgba(0,0,0,0.4)");
		$("#menu").hide(500);
	})
	$(".close").click(function(){
		$("#nav").css("width","0");
		$("#main").css("marginLeft","0");
		$("body").css("backgroundColor","rgb(250, 250, 250,1)");
		$("#menu").show(500);
	})

})

