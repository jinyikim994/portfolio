/*slick slider*/
$(document).ready(function(){
	$('.main-slide').slick({
		slidesToShow: 1,
		autoplay: true,
		arrows:true,
		autoplaySpeed: 5000,
		dots:true,
		swipe:false,
		infinite: true,
		pauseOnHover:false,
		pauseOnFocus: false,
		fade:true,
	 });
});


/*scroll header */
   $(window).scroll(function(){
    var height = $(document).scrollTop();
    if(height > 0){
      $('.navbar-list').show();
      $('.navbar').addClass('navbar-active');
    }else if(height == 0){
      $('.navbar-list').show();
      $('.navbar').removeClass('navbar-active');
    }

	/* 스크롤시 cirecle */
	var scroll = $(this).scrollTop(),
		$item1 = $('#item01'),
		$item2 = $('#item02');

	$item1.css({
	  'transform': 'translate3d(' + 0 + 'px, ' + scroll * 0.95+ 'px, ' + 0 + 'px )'
	});
	$item2.css({
	  'transform': 'translate3d(' + 0 + 'px, ' + scroll * 0.95+ 'px, ' + 0 + 'px )'
	});
 	});



	$(window).ready(function(){
	/* category */
	 $('.menu').click (function(){
		$(this).toggleClass('open');
		$('.all-category').toggleClass('open');
		$('.open-menu img').toggleClass('none');
	});


	/* work tabs */
	$('.tab-a').click(function(){
		  $(".tab").removeClass('tab-active');
		  $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
		  $(".tab-a").removeClass('active-a');
		  $(this).parent().find(".tab-a").addClass('active-a');
	});

	 AOS.init();

	
	/* to top */
	$("#top_btn").on("click", function() {
		$("html, body").animate({scrollTop:0}, '500');
		return false;
	});

	//$("#footer .ft-wr").hide(); 

 });

 $(window).scroll(function() {
    var footerHei = $('#footer').outerHeight();
    if($(window).scrollTop() + $(window).height() > $(document).height() - footerHei) {
        $('.quick-tel').addClass('on');
    }else 
        $('.quick-tel').removeClass('on');
    }); 


