let img;
let numLight=10
let lights=[]

function preload(){
  img=loadImage("assets/light.png")
}


function setup() {
  let cnv=createCanvas(windowWidth, windowHeight);
  cnv.parent("canvasContainer")
  frameRate(80)
  for(let i=0;i<numLight;i++){
    lights.push(new Light(random(width),random(height),img))
  }

}

function draw() {
  background(220);
  for(let i=0;i<lights.length;i++){
    lights[i].update()
    lights[i].display()
  }
}

class Light{
constructor(startX,startY,srcImg){
  this.x=startX
  this.y=startY
  this.img=srcImg
  this.xx=0
  this.yy=0
}

update(){
this.yy=sin(frameCount*10)*20
this.xx=cos(frameCount*10)*20
}

display(){
  push();
  translate(this.x,this.y);
  scale(0.4)
  image(this.img,this.xx,this.yy,200,200)

  pop();
}

}