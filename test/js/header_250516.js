$(document).ready(function(){
    
    /*
        header에 fixed 클래스를 주는것....
        1. 브라우저가 조금이라도 스크롤이 되면 header에 fixed 클래스를 추가
            스크롤값이 0보다 크면 (0포함 안함)
        2. 다시 브라우저 맨 위로 스크롤이 되면 header에 fixed 클래스를 삭제
            스크롤 값이 0이거나 그보다 작으면

        클래스를 주는 명령

        브라우저가 스크롤되는 것을 체크할 수 있는 명령을 알아야함
    */ 

    //$('header').addClass('abcd')
    //$('header').removeClass('abcd')


    //html이 로딩된 이후 단 1번만 실행
   let scrolling = $(window).scrollTop()
   console.log(scrolling)

   if(scrolling > 0){ //스크롤 된 값이 0보다 크면
    $('header').addClass('fixed')
}else{ //그외 나머지 전부 (0이거나 0보다 작으면)
    $('header').removeClass('fixed')
}


function scroll_chk(){
    //함수 선언 (scroll_chk라는 이름의 함수가 있어요!!! )
    scrolling = $(window).scrollTop()
    console.log(scrolling)

    if(scrolling > 0){ //스크롤 된 값이 0보다 크면
        $('header').addClass('fixed')
    }else{ //그외 나머지 전부 (0이거나 0보다 작으면)
        $('header').removeClass('fixed')
    }
}


   $(window).scroll(function(){
    //스크롤 할때마다 1번씩 실행 (스크롤을 안하면 실행XXXXX)
    scroll_chk()
   })

})//$(document).ready