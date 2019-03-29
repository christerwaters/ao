$(document).bind('mousemove', function(e){
    $('.tail').css({
       top:   e.pageY + Math.floor((Math.random() * 5) + 1)-200
    });
    //$('.tail').css({
    //   left:  e.pageX + Math.floor((Math.random() * 5) + 1),
    //   top:   e.pageY + Math.floor((Math.random() * 5) + 1)
    //});
});
