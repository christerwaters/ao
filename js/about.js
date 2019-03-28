$(document).bind('mousemove', function(e){
    $('#tail').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});
