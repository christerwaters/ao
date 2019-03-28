$(document).bind('mousemove', function(e){
    $('.tail').css({
       left:  e.pageX + Math.floor((Math.random() * 40) + 20),
       top:   e.pageY + Math.floor((Math.random() * 20) + 1)
    });
    $('.tail').css({
       left:  e.pageX + Math.floor((Math.random() * 40) + 20),
       top:   e.pageY + Math.floor((Math.random() * 20) + 1)
    });
});
