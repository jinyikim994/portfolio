$(function(){
count=1;

 var img=['img/a.jpg','img/b.jpg','img/c.jpg','img/a.jpg','img/b.jpg','img/c.jpg'];


 setInterval(function(){
 	$('#slider').css({'background-image':'url('+img[count++]+')','transition':'1s'});
 	if(count==img.length){ count=0; }
 },3000);

});
