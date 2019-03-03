var song;
var button;

function setup() {
	createCanvas(200, 200);
	song = loadSound("audio/demo.mp3", loaded);
	song.setVolume(0.5);
	slider = createSlider(0, 1, 0.5, 0.01);
	button = createButton("play");
	button.mousePressed(togglePlaying);
}

function loaded() {
	console.log("loaded");
}

function togglePlaying() {
	song.play();
}

function draw() {
	background(0);
	song.setVolume(slider.value());
}