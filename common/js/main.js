$(document).ready(function(){

    $(".header .nav > ul > li, .nav_bg").off( 'mouseover mouseout' );

	$(".header .nav > ul > li, .nav_bg").on('mouseover mouseout',function(ev){

		// if( $(".navbar-toggle").is(':visible') == false ){
			
			// if( $(".navbar-sub").is(':animated') ) return;
			// $(".header .nav").stop();
			// $(".nav_bg").stop();

			if( ev.type =="mouseover"){
				try{
					clearTimeout( gnb_ani_timer );
				}catch(e){}

				// $(".navbar-sub").fadeIn();
				$(".nav_bg").show();


			}else{

				gnb_ani_timer = setTimeout(function(){
					// $(".navbar-sub").fadeOut('',function(){
					// 	$(this).removeAttr('style');
					// });
					$(".nav_bg").hide();
				},50);
			}
		// }else{
		// 	// $(".navbar-sub").hide();
		// }

	});

	// 햄버거 메뉴
	$('.header .ham_menu').on('click', function(){
		$(this).prev().toggleClass('on');
		$('.wrap').toggleClass('on');
	});

	// 헤더 고정
	var menu = $(".header").offset().top;
	$(window).scroll(function() {
		var sct = $(this).scrollTop();

		if(menu <= sct) {
			$(".header").addClass("alt");
		} else {
			$(".header").removeClass("alt");
		}

	});

	// 햄버거 메뉴 클릭
	$('.search').on('click',function(){
		$('.search_bg').show();
		$('.search_bg_in').show();
		$('.top_slider').hide();
	});

	$('.search_close div:nth-child(2)').on('click',function(){
		$('.top_slider').show();
		$('.search_bg').hide();
		$('.search_bg_in').hide();
	});
});