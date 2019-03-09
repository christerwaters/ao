
$(document).ready(function(){
  $(".portfolio-item").click(function(){
    $(".overlay").addClass("overlay-active");
    $(".overlay--x").addClass("overlay-active");
    $("body").addClass("overlay-active");
  });
    $(".overlay-x").click(function(){
      $(".overlay").removeClass("overlay-active");
      $(".overlay--x").removeClass("overlay-active");
      $("body").removeClass("overlay-active");
    });
});
lastScroll = 0;
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $("header").addClass("s--up");
    } else {
        $("header").removeClass("s--up");
    }
    lastScroll = scroll;

    $(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
            $('header').removeClass('s--up');
        }
    })

});
