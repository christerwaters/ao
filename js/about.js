$(document).bind('mousemove', function(e){
    $('.tail').css({
       left:  e.pageX + Math.floor((Math.random() * 20) + 10),
       top:   e.pageY + Math.floor((Math.random() * 10) + 1)
    });
    $('.tail').css({
       left:  e.pageX + Math.floor((Math.random() * 20) + 10),
       top:   e.pageY + Math.floor((Math.random() * 10) + 1)
    });
});
