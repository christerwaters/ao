
var $el, $ps, $up, totalHeight;

$(".overflow-rm-30 .button").click(function() {

  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");

  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });

  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });

  // fade out read-more
  $p.fadeOut();

  // prevent jump-down
  return false;

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
