$(document).ready(function(){
	/* 
    header .gnb .gnb_wrap ul.depth1 > li 마우스를 오버했을때
    오버한 li에만 active 클래스가 들어가야함
    */
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
		$(this).addClass('active');	
	});
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
		$(this).removeClass('active');	
	});

  $('.quick .detail ul li.top button').on('click', function(){
    //console.log('top버튼 눌렀다!!!')
    $('html, body').animate({
        scrollTop: 0
    }, 500)
})
});