//slider이미지 순서대로 나타났다가 사라짐 반복 //
$(function () {
    var i = 0;

    function slide() {
        i++;

        if (i > $("#slider li:last").index()) {
            i = 0;
        }

        $("#slider li").eq(i).stop().fadeIn("slow");
        $("#slider li").eq(i - 1).stop().fadeOut("slow");

    }
    setInterval(slide, 5000);
});



//헤더 토글//
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



//스크롤시 헤더 고정//
var currentScrollTop = 0;
$(document).ready(function () {
    scrollController();
    $(window).scroll(function () {
        scrollController();
    });
});

function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 200) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
}





//이미지 박스 첫번째이미지에 마우스 호버시 텍스트가 서서히 나타남//    
//$(document).ready(function () {
//    $(".imgbox").mouseover(function () {
//        $(".food_name").fadeIn(1000)
//      $(".food_demo").fadeIn(1000);
//    });
    //이미지 박스에 마우스가 벗어났을때 텍스트가 서서히 사라짐//      
//    $(".imgbox").mouseleave(function () {
//        $(".food_name").fadeOut();
//        $(".food_demo").fadeOut(1000);
//    });
//});