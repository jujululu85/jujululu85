$(document).ready(function(){
    let scrolling

    scroll_chk() //브라우저가 로딩왰을대 1번
    $(window).scroll(function(){
        //스크롤 할때마다 1번씩
        scroll_chk()
    })

    
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
    }
})//$(document).ready