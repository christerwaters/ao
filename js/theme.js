
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
    $(document.body).className = '';
    $(document.body).addClass('about');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#work', function() {
    $(document.body).className = '';
    $(document.body).addClass('work');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#contact', function() {
    $(document.body).className = '';
    $(document.body).addClass('contact');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#home', function() {
    $(document.body).className = '';
    $(document.body).addClass('home');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#marketing', function() {
    $(document.body).className = '';
    $(document.body).addClass('marketing');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#web', function() {
    $(document.body).className = '';
    $(document.body).addClass('web');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
  $(document).on('click', '#coming', function() {
    $(document.body).className = '';
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
  });
});
