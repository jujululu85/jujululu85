
$(document).ready(function(){
 
    /**************************** header 와 메뉴 : 시작 *************************
     *  pc인지 모바일인지 구분 - 브라우저 넓이로..
     *  스크롤값 계산
     *  공통사항 : 브라우저가 스크롤되면 OR header에 오버하면 header에 fixed 클래스를 추가
     *  pc일때 : 마우스를 오버한 li에만 over 클래스 추가 
     *  모바일일때 : 메뉴열기를 클릭하면 header에 menu_open 클래스 추가
     *              1차메뉴를 클릭하면 (하위메뉴가 있는 1차메뉴만) 클릭한 li에 open 클래스 추가 
     * *****/

    let device_status //모바일인지 pc인지
    let scrolling //스크롤한 값
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈

    scroll_chk() //함수실행 (처음에 문서가 로딩되었을때 1번)
    resize_chk() //함수실행
    $(window).resize(function(){ //브라우저가 리사이즈될때마다 1번씩 실행
        resize_chk() //함수실행
    })
    $(window).scroll(function(){ //브라우저가 스크롤 할때마다 1번씩 실행
        scroll_chk() //함수실행
    })

    function scroll_chk(){
        //console.log('스크롤했다!!!!!!!!!')
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    function resize_chk(){
        window_w = $(wind).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }


    /**************************** header 와 메뉴 : 종료 ******************************/

    /**************************** visual swiper : 시작 ******************************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },

    });
    
    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop(); /* 일시정지 기능 */
        $(this).hide() //정지버튼 자신은 숨김
        $('.visual .btn_wrap button.btn_play').show() // 재생 나타남
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        //console.log('재생 버튼 클릭')
        visual_swiper.autoplay.start(); /* 재생 기능 */
        $(this).hide() //재생버튼 자신은 숨김
        $('.visual .btn_wrap button.btn_stop').show() //정지버튼이 나타남
    })
    /**************************** visual swiper : 끝 ****************************/


})//$(document).ready