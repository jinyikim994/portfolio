$(function(){
count=1;

 var img=['img/10.jpg','img/5.jpg','img/8.jpg','img/7.jpg','img/10.jpg'];


 setInterval(function(){
 	$('#slider').css({'background-image':'url('+img[count++]+')','transition':'1s'});
 	if(count==img.length){ count=0; }
 },3000);

});
