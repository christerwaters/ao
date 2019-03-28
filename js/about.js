$(document).bind('mousemove', function(e){
    $('.tail').css({
       left:  e.pageX + Math.floor((Math.random() * 50) + 1),
       top:   e.pageY + Math.floor((Math.random() * 50) + 1)
    });
    $('.tail').css({
       left:  e.pageX + Math.floor((Math.random() * 50) + 1),
       top:   e.pageY + Math.floor((Math.random() * 50) + 1)
    });
});
