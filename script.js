$(function() {
  // Handler for .ready() called.

  //eliminar tweet
$('#timeline').on('click','.eliminar', function(){
	 	console.log($(this).parent().remove());
})

 $('#writer').on('submit', function(event){
	    var text= $("#textotw").val();
	  	event.preventDefault();

	  	$('#timeline').prepend(
	  	'<div class="tweetposted container">'
       + '<img src="img/3.jpg" alt="Avatar" style="width:25px">'
       +'<p>' + text + '</p>'
       +'<a class="eliminar" href="#"><i class="fas fa-trash"></i></a>'
       +'<a class="like" href="#">'
         +'<i class="ico fas fa-thumbs-up">0</i>'
         +'</div>')
	  	});






$('#timeline').on('click','.ico', function(){
$(this).css('color','blue');
var contador= $(this).text();
contador= parseInt(contador);
contador= contador+1;
console.log(contador);

$(this).html ('<i>'+contador+'</i>');




});


$("#image").on("change", function(e){
$(".crearperfil img").attr("src", "img/" + $(this).val());
});


});

