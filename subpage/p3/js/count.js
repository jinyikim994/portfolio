//count//    
setInterval(displayNow, 1000);

function displayNow() {

    var now = new Date();
    var days = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.querySelector(".days").innerHTML = (days < 10 ? '0' : '') + (days);
    document.querySelector(".hours").innerHTML = (hours < 10 ? '0' : '') + (hours);
    document.querySelector(".minutes").innerHTML = (minutes < 10 ? '0' : '') + (minutes);
    document.querySelector(".seconds").innerHTML = (seconds < 10 ? '0' : '') + (seconds);

}

//count 서서히 나타났다가 옆으로 에니메이션효과//

//$(document).ready(function () {
//    $(".t_wrap").hide();
 //   $(".t_wrap").fadeIn(1000);
 //   $(".t_wrap").animate({
  //      "margin-left": "5px"
  //  }, 500);

//});

//버튼클릭시 최상단으로 이동//
function scrollToTop() {
    window.scrollTo(0, 0);

}

 //prev and next button//
$(function(){
  $(".pre").click(function(){
  	$(".wrap_box > div:last").prependTo(".wrap_box");
  	$(".wrap_box").css("marginLeft","-390px");
  	$(".wrap_box").animate({marginLeft:0});
  });

  $(".next").click(function(){
  	$(".wrap_box").animate({marginLeft:"-=390px"}, function(){
  		$(".wrap_box> div:first").appendTo(".wrap_box");
  		$(".wrap_box").css({marginLeft:0});
  	});

  });
});