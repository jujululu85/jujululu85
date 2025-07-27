(function( $ ){
    $(document).ready(function () {
        let counted = false;
        let target = $('.counter').first(); // 첫 번째 counter를 기준으로 감지

        if (target.length) {
            let waypoint = new Waypoint({
            element: target[0],
            handler: function () {
                if (!counted) {
                $('.counter').each(function () {
                    const $this = $(this);
                    const countTo = $this.attr('data-count');
                    $this.prop('Counter', 0).animate(
                    {
                        Counter: countTo,
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                        $this.text(Math.ceil(now));
                        },
                    }
                    );
                });
                counted = true;
                }
                this.destroy(); // 1회만 실행
            },
            offset: '80%', // 스크롤 위치 조절
            });
        }
    });
})( jQuery );