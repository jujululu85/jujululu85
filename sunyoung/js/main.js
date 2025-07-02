$(function(){
  let $visual = $("#visual");
  let autoplay = $visual.data("autoplay"),
      autoplaySpeed = $visual.data("autoplaySpeed"),
      infinite = $visual.data("infinite"),
      speed = $visual.data("speed");


  $($visual_slider).slick({
    dots: false,
    arrows: false,
    fade: true,
    // autoplay : autoplay,
    autoplaySpeed : autoplaySpeed,
    infinite : infinite,
    speed : speed,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    asNavFor: "#visual",
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true
        }
      }
    ]
  }).on("beforeChange", function(event, slick, currentSlide, nextSlide){
    $(".main-visual__dots-item").removeClass("active").eq(nextSlide).addClass("active");
  });
	
})//$(document).ready