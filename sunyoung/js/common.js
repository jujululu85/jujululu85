$(document).ready(function(){
	/*header .util .hamburger .hamburger_open를 클릭하면 fullscreen_menu에 open클래스를 줌
    .fullscreen_menu .menu_close를 클릭하면 fullscreen_menu가 open클래스 삭제  */

    $('header .util .hamburger .hamburger_open').on('click', function(){
		$('.fullscreen_menu').addClass('open');
	});
    $('.fullscreen_menu .menu_close').on('click', function(){
		$('.fullscreen_menu').removeClass('open');
	});

    /* .fullscreen_menu .menu_wrap ul.depth1 > li > span를 클릭했을때
        1. 상위 li에 open클래스가 있는경우 open클래스를 삭제
        2. 상위 li에 open클래스가 없는경우 open클래스를 줌 */
    $('.fullscreen_menu .menu_wrap ul.depth1 > li > span').on('click', function(){
        if($(this).parent().hasClass('open') == true){
            //console.log('열림')
            $(this).parent().removeClass('open');
        }else{
            //console.log('닫혀있음')
            $(this).parent().addClass('open');
        }
    });


    /* 
    header .gnb .gnb_wrap ul.depth1 > li 
        마우스를 오버하면 active 클래스를 줌
        마우스를 벚어나면 active 클래스를 삭제 
    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        //console.log('오버했다')
        ($(this).addClass('active'))
    });
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        //console.log('오버아웃')
        ($(this).removeClass('active'))
    });

    /*
    .quick .detail ul li.top button 클릭하면 상단으로 스크롤됨 
    */
    $('.quick .detail ul li.top button').on('click', function(){
		$('html, body').animate({
            scrollTop : 0
          }, 500);
	});
});//$(document).ready