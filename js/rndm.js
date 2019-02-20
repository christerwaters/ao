
for(var i = 0; i < randomize.length; i++){
    var target = Math.floor(Math.random() * randomize.length -1) + 1;
    var target2 = Math.floor(Math.random() * randomize.length -1) +1;
    randomize.eq(target).before(randomize.eq(target2));
}