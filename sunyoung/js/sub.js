$(document).ready(function(){
    /* .ctn_biz .biz_list ul li 마우스를 오버하면 다른 li에 있는 active클래스 삭제하고
         */
    $('.ctn_biz .biz_list ul li').on('mouseenter', function(){
		$('.ctn_biz .biz_list ul li').removeClass('active');
		$(this).addClass('active');
	});

     /* 
     .ctn_design .top 클릭하면 상단으로 스크롤됨 
    */
    $('.ctn_design .top').on('click', function(){
		$('html, body').animate({
            scrollTop : 0
          }, 500);
	});
})//$(document).ready