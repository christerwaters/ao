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
  var teller = $.getUrlVar('page');
  if (teller == null){
    $(document.body).addClass('home');
    window.history.pushState("", "", '/');
  }else{
    $($(document.body)).attr('class', '');
    $(document.body).addClass(teller);
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    window.history.pushState("", "", '/' + teller);
  }
});

// on click do not forward to other url but change the URL dynamically and load other content. Very lazy version.. Needs to be reworked.

$(document).on('click', 'a', function() {
  if ($(this).attr("id") == "work") {
    console.log('going to work page');
  } else {
    event.preventDefault();
    var teller = $(this).attr("id");
    $($(document.body)).attr('class', '');
    $(document.body).addClass(teller);
    if(teller=='home'){
      window.history.pushState("", "", '/');
    }else if(teller==null){
      window.history.pushState("", "", '/');
    }else{
      window.history.pushState("", "", '/' + teller);
    }
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }
});

$(document).bind('mousemove', function(e){
    $('.personimg').css({
       top:   e.pageY + Math.floor((Math.random() * 5) + 1)-200
    });
    //$('.tail').css({
    //   left:  e.pageX + Math.floor((Math.random() * 5) + 1),
    //   top:   e.pageY + Math.floor((Math.random() * 5) + 1)
    //});
});
