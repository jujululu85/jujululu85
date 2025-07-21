$(document).ready(function(){
    /* .ctn_biz .biz_list ul li 마우스를 오버하면 다른 li에 있는 active클래스 삭제하고
         */
    $('.ctn_biz .biz_list ul li').on('mouseenter', function(){
		$('.ctn_biz .biz_list ul li').removeClass('active');
		$(this).addClass('active');
	});
})//$(document).ready