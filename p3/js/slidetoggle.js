$(function(){
$('.a').click(function(){
$('.c').stop().slideToggle('fast');

})
});


$(window).resize(function(){
if(window.innerWidth<=599){
$('.c').hide();
}
if(window.innerWidth<=600){
$('.c').hide();
}
if(window.innerWidth<=1100){
$('.c').hide();
}
});