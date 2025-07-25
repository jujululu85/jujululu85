$(document).ready(function(){
    /* .ctn_biz .biz_list ul li 마우스를 오버하면 다른 li에 있는 active클래스 삭제하고
         현재 마우스를 올린 li에만 active클래스 추가 */
    $('.ctn_biz .biz_list ul li').on('mouseenter', function(){
		$('.ctn_biz .biz_list ul li').removeClass('active');
		$(this).addClass('active');
	});

  $('.house .list ul li').on('click', function(){
		$('.house .list ul li').removeClass('active');
		$(this).addClass('active');
	});

  $('.company .list ul li').on('click', function(){
		$('.company .list ul li').removeClass('active');
		$(this).addClass('active');
	});

  $('.ctn_residential .list ul li').on('click', function(){
		$('.ctn_residential .list ul li').removeClass('active');
		$(this).addClass('active');
	});

  $('.ctn_commercial .list ul li').on('click', function(){
		$('.ctn_residential .list ul li').removeClass('active');
		$(this).addClass('active');
	});

  $('.ctn_accommodation .list ul li').on('click', function(){
		$('.ctn_residential .list ul li').removeClass('active');
		$(this).addClass('active');
	});

     /* 
     .footer .top 클릭하면 상단으로 스크롤됨 
    */
 
  $('footer .top').on('click', function(){
    $('html, body').animate({
            scrollTop : 0
          }, 500);
  });


  $(window).scroll(function(){
    AOS.init({
      offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
      duration: 500, // 애니메이션 효과가 작동되는 시간
      easing: 'ease', // 가속도
    });
  });
})//$(document).ready