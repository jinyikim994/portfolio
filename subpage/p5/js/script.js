//slide toggle//
$(function () {
    $('.a').click(function () {
        $('.c').stop().slideToggle('fast');

    })
});


$(window).resize(function () {
    if (window.innerWidth <= 599) {
        $('.c').hide();
    }
    if (window.innerWidth <= 600) {
        $('.c').hide();
    }
    if (window.innerWidth <= 1100) {
        $('.c').hide();
    }
});

//header fixed//

var currentScrollTop = 0;
$(document).ready(function () {
    scrollController();
    $(window).scroll(function () {
        scrollController();
    });
});

//pop up//
function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 200) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
}

$(document).ready(function () {
    $(".close_box").click(function () {
        $(".banner").remove();
    });
});

//auto slide//
function slide1() {
    $('.wavy').stop().animate({
        marginLeft: 0
    }, 800, function () {
        $('.wavy li:first').appendTo('.wavy');

        $('.wavy').css({
            marginLeft: 0
        }, 'slow');
    });
}
setInterval(slide1, 2000);

//img change//
$(function(){
count=1;

 var img=['img/img3.jpg','img/test.jpg'];


 setInterval(function(){
 	$('.identification .imgbox').css({'background-image':'url('+img[count++]+')','transition':'1s'});
 	if(count==img.length){ count=0; }
 },2000);

});

//on load fade in//
////$(document).ready(function() {
  //  /* 1 */
  //  $(window).scroll( function(){
  //      /* 2 */
  //      $('.box').each( function(i){
  //          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  //          var bottom_of_window = $(window).scrollTop() + $(window).height();
  //          /* 3 */
  //          if( bottom_of_window > bottom_of_object/2 ){
  //              $(this).animate({'opacity':'1'},100);
  //          }
  //      }); 
  //  });
//});

//scroll bar//
        $(window).scroll(function(){
          if($(this).scrollTop()>800){
            $("#scroll_bar").css("opacity","1");
          }else{
            $("#scroll_bar").css("opacity","0");
          }
        });
        $("#scroll_bar").click(function(){
          $("html,body").animate({scrollTop:0},400);
          return false;
        });


