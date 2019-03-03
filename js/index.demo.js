var song;
var button;

function setup() {
	var canvas = createCanvas(200, 200);
	canvas.parent('sketch-holder');
	song = loadSound("audio/demo.mp3", loaded);
	amp = new p5.Amplitude();
}

function changeBG() {
	background(song.currentTime() * random(),song.currentTime() * vol,song.currentTime() * random());
}

function loaded() {
	console.log("loaded");
	song.setVolume(0.5);
	button = createButton("play");
	button.mousePressed(togglePlaying);
}

function togglePlaying() {
	if (!song.isPlaying()){
		song.play();
		button.html('<i class="fas fa-pause-circle"></i>');
	} else {
		song.pause();
		button.html('<i class="fas fa-play-circle"></i>');
	}
}

function draw() {
	background(song.currentTime() * 10,0,233);
	vol = amp.getLevel();
	diam = map(vol,0,0.5,0,1)
	fill(255,0,0);
	ellipse(width/2, height/2,width*diam,height*diam);
	fill(0,255,0);
	ellipse(width/2, height/2,width*diam*0.8,height*diam*0.8);
	fill(0,0,255);
	ellipse(width/2, height/2,width*diam*0.5,height*diam*0.5);
}