
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
// on forward set url to what is behind "?page="
$(document).ready(function() {
  $.extend({
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function(name){
      return $.getUrlVars()[name];
    }
  });
  $(document.body).addClass($.getUrlVar('page'));
  var urlWithVar = $.getUrlVar('page');
  window.history.pushState("", "", '/' + urlWithVar + '/');
});



$(document).ready(function() {

  $(document).on('click', '#about', function() {
    $(document.body).addClass('about');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('home');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    window.history.pushState("", "", '/about/');
  });
  $(document).on('click', '#work', function() {
    $(document.body).addClass('work');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('about');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('home');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    window.history.pushState("", "", '/work/');
  });
  $(document).on('click', '#contact', function() {
    $(document.body).addClass('contact');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('about');
    $(document.body).removeClass('work');
    $(document.body).removeClass('home');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    window.history.pushState("", "", '/contact/');
  });
  $(document).on('click', '#home', function() {
    $(document.body).addClass('home');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('about');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    window.history.pushState("", "", '/');
  });
  $(document).on('click', '#marketing', function() {
    $(document.body).addClass('marketing');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('about');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('home');
    $(document.body).removeClass('web');
    $(document.body).removeClass('coming');
    window.history.pushState("", "", '/marketing/');
  });
  $(document).on('click', '#web', function() {
    $(document.body).addClass('web');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('about');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('home');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('coming');
    window.history.pushState("", "", '/web/');
  });
  $(document).on('click', '#coming', function() {
    $(document.body).addClass('coming');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $(document.body).removeClass('about');
    $(document.body).removeClass('work');
    $(document.body).removeClass('contact');
    $(document.body).removeClass('home');
    $(document.body).removeClass('marketing');
    $(document.body).removeClass('web');
    window.history.pushState("", "", '/coming/');
  });
});
