var song;
var button;

var volHistory = [];

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	song = loadSound("audio/demo.mp3", loaded);
	amp = new p5.Amplitude();
}

function loaded() {
	console.log("loaded");
	song.setVolume(0.5);
	button = createButton('<i class="fas fa-play-circle class="txt-hover-white"" style="font-size:34px !important;"></i><span style="margin-left:10px;font-size:34px !important;font-family: Averta;" class="txt-hover-white">PLAY DEMO</span>');
	button.parent("button-holder");
	button.mousePressed(togglePlaying);
}

function togglePlaying() {
	if (!song.isPlaying()){
		song.play();
		button.html('<i class="fas fa-pause-circle class="txt-hover-white"" style="font-size:34px !important;"></i><span style="margin-left:10px;font-size:34px !important;font-family: Averta;" class="txt-hover-white">PAUSE DEMO</span>');
	} else {
		song.pause();
		button.html('<i class="fas fa-play-circle class="txt-hover-white"" style="font-size:34px !important;"></i><span style="margin-left:10px;font-size:34px !important;font-family: Averta;" class="txt-hover-white">PLAY DEMO</span>');
	}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
	background(255,255,255);
	var vol = amp.getLevel();
	volHistory.push(vol);
	stroke(0);
	noFill();
	beginShape();
		for (var i = 0; i < volHistory.length; i++){
			var y = map(volHistory[i], 0, 1, windowHeight, 0);
			vertex(i, y);
		}
	endShape();
	
	if (volHistory.length>width){
		volHistory.splice(0,10);
	}
}