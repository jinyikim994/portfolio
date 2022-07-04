//prev/next//

$(function(){
  $(".pre").click(function(){
  	$(".text_box > div:last").prependTo(".text_box");
  	$(".text_box").css("marginLeft","-390px");
  	$(".text_box").animate({marginLeft:0});
  });

  $(".next").click(function(){
  	$(".text_box").animate({marginLeft:"-=390px"}, function(){
  		$(".text_box > div:first").appendTo(".text_box");
  		$(".text_box").css({marginLeft:0});
  	});

  });
});

//tbox호버시 span 나타났다가 사라졌다가 깜빡임//

$(function(){
  $('.t_box_1').hover(function(){

  	$('.t_box_1 span').fadeIn('slow');

  },function(){

  	$('.t_box_1 span').fadeOut('slow');

  });
 });

