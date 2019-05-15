
var $el, $ps, $up, totalHeight;

$(".overflow-rm-xs .button, .overflow-rm-sm .button, .overflow-rm-md .button, .overflow-rm-lg .button, .overflow-rm-xl .button ").click(function() {

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
      "height": "auto",
      "max-height": "100%"
    })
    .animate({
      "height": "auto"
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


$(document).ready(function() {
  $(document).on('click', '#about', function() {
    $(document.body).removeClass('home');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).addClass('about');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#work', function() {
    $(document.body).removeClass('home');
    $(document.body).addClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('about');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#contact', function() {
    $(document.body).removeClass('home');
    $(document.body).removeClass('work');
    $(document.body).addClass('contact');
    $(document.body).removeClass('about');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#home', function() {
    $(document.body).addClass('home');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('about');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#marketing', function() {
    $(document.body).removeClass('home');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('about');
    $(document.body).addClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#web', function() {
    $(document.body).removeClass('home');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('about');
    $(document.body).removeClass('marketing');
    $(document.body).addClass('web');
    $(document.body).removeClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#coming', function() {
    $(document.body).removeClass('home');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('about');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).addClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
});

$(document).ready(function() {
  $.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
         return null;
      }
      else{
         return results[1] || 0;
      }
  }
  $.urlParam('page');        // 6

  $(document.body).removeClass('home');
  $(document.body).removeClass('work');
  $(document.body).removeClass('contact');
  $(document.body).removeClass('about');
  $(document.body).removeClass('marketing');
  $(document.body).removeClass('web');
  $(document.body).removeClass('coming');
  $(document.body).removeClass($.urlParam('page');
  window.history.pushState("", "", '/');

});
