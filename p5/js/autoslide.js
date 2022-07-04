    function slide1() {
            $('.wavy').stop().animate({
                marginLeft: 0
            }, 800, function() {
                $('.wavy li:first').appendTo('.wavy');

                $('.wavy').css({
                    marginLeft: 0
                }, 'slow');
            });
        }
        setInterval(slide1, 2000);