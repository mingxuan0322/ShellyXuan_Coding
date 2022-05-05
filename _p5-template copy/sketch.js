let mySound;

function preload() {
  mySound = loadSound("assets/beat.mp3");
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
}

function draw() {
  background(220);
  text("Click here to play", 10, 20);
}

function mousePressed() {
  mySound.play();
}