// Original P5:
//https://editor.p5js.org/ShellyXuan/sketches/kIwwsXAiW

//reference:
//Leaves shape:
//https://editor.p5js.org/Zoe/sketches/SkBQYKdVW
//Amazing ripple:
//https://editor.p5js.org/codingtrain/sketches/tYXtzNSl
let bg;
let beat;
let ripples;
let wind;
let things = [];
let bird;
let bi;



function preload() {
  beat = loadSound("assets/Bubbles.mp3");
  bg = loadImage("assets/Jungle.jpg");
  bi=loadImage("assets/bird.gif")
}

function setup() {
  let cnv=createCanvas(480, 420);
  cnv.parent("canvasContainer")
  wind = new Wind();
  ripples=new Ripple()
  bird = new Bird();
  things[0] = new Thing(width / 10, (height / 10) * 9);
}

function draw() {
  background(220);
  tint(80, 100, 100, 150);
  background(bg, 20);

  //structure
  line(width / 3, 0, 0, (height / 3) * 2);
  line(width / 3, 0, width, (height / 3) * 2);
  line(width / 3, height, width, (height / 3) * 2);
  line(width, (height / 3) * 2, 0, (height / 3) * 2);
  line(width / 6, height / 3, (width / 3) * 2, height / 3);
  line(width / 4, (height / 3) * 2, width / 4, height);

  things[0].display();

  //structure!!!
  let h = height;
  let w = width;
  let x = (mouseX / w) * 3;
  let y = (mouseY / h) * 3;

  if (2 * x + y - 2 <= 0) {
    //左上
    fill(100, 250, 250);
  } else if (x - y - 1 >= 0) {
    //右上
    fill(250, 250, 250);
  } else if (0.5 * x + y - 3.5 <= 0 && y >= 2 && x > width / 4) {
    //中下
    fill(100, 100, 250);
  } else if (0.5 * x + y - 3.5 > 0) {
    //右下
    fill(250, 100, 250);
  } else if (2 * x + y - 2 > 0 && x - y - 1 <= 0 && y <= 1) {
    //中上
    fill(250, 100, 100);
  } else if (2 * x + y - 2 > 0 && x - y - 1 < 0 && y < 2 && y > 1) {
    //中中
    fill(200, 250, 250);
  }
  circle(mouseX, mouseY, 10);

  //
}

function mousePressed() {
  beat.play();
}
function mouseDragged() {
  things[0].update();
}

class Thing {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  display() {
    push();
    translate(this.x, this.y);

    // if (this.y > (height / 3) * 2) {
    //   circle(0, 0, 50);
    // } else {
    //   wind.display();
    //   wind.move();
    // }

    //structure!!!
    let h = height;
    let w = width;
    let x = (this.x / w) * 3;
    let y = (this.y / h) * 3;

    if (2 * x + y - 2 <= 0) {
      //左上--wind
      wind.display();
      wind.move();
    } else if (x - y - 1 >= 0) {
      //右上
      wind.display();
      wind.move();
    } else if (0.5 * x + y - 3.5 <= 0 && y >= 2 && x > 0.75) {
      //中下--water
      ripples.display();
      ripples.move();
    } else if (x <= 1 && y > 2) {
      circle(0, 0, 50);
    } else if (0.5 * x + y - 3.5 > 0) {
      //右下--
      bird.display();
      bird.move();   
    } else if (2 * x + y - 2 > 0 && x - y - 1 <= 0 && y <= 1) {
      //中上
      fill(250, 100, 100);
      ripples.display();
      ripples.move();
    } else if (2 * x + y - 2 > 0 && x - y - 1 < 0 && y < 2 && y > 1) {
      //中中
      bird.display();
      bird.move();    
    }
    pop();
  }
  update() {
    //drag the wind
    let dis = dist(mouseX, mouseY, this.x, this.y);
    if (dis < 50) {
      this.x = mouseX;
      this.y = mouseY;
    }
     
   } 
  checkArea(){
    
  }
  
}

class Bird {
  constructor() {
    this.speed = 2;
    this.deg=0
  }

  display() {
    push();
    let ra=radians(this.deg)
    tint(255,240)
    image(bi,-60+sin(ra)*20,-40+cos(ra)*20,120,70)
    pop();
  }

  move() {
 
    this.deg+=this.speed

  }
}

class Ripple {
  constructor() {
    // this.lx = [];
    // this.ly = [];
    this.speed = 0.5;
    this.blue = [];
    this.rad = [];
    this.weight=[]
    this.width=10
    
    for(let i=0;i<4;i++){
      this.rad[i]=10*i
      this.weight[i]=abs((i+1)/2)
    }
   
  }

  display() {
    push();
    noFill();
    circle(0, 0, 60);
    //leaves
    for (let i = 0; i < 4; i++) {
      push();
      stroke(255)
      strokeWeight(this.weight[i])
      circle(0,0,this.rad[i])
//       translate(this.lx[i], this.ly[i]);
      
      
      pop();
    }
    pop();
  }

  move() {
    //water visualization
    for (let i = 0; i < 4; i++) {
     this.rad[i]+=this.speed
      this.weight[i]=abs(i-this.weight[i])
      if(this.rad[i]>90){
        this.rad[i]=0
        this.speed-=0.1
      if(this.speed<=0.2){
      this.speed=0.5
      }
      }
    }

  }
}

class Wind {
  constructor() {
    this.lx = [];
    this.ly = [];
    this.speed = [];
    this.green = [];
    this.deg = [];

    //defalt leaves' positions
    for (let i = 0; i < 2; i++) {
      this.lx[i] = random(16, 45);
      this.ly[i] = random(-20, 20);
      this.speed[i] = random(0.6);
      this.green[i] = random(235, 255);
      this.deg[i] = random(0.1, 2);
    }
    for (let i = 2; i < 4; i++) {
      this.lx[i] = random(-45, -16);
      this.ly[i] = random(-20, 20);
      this.speed[i] = random(0.6);
      this.green[i] = random(220, 255);
      this.deg[i] = random(0.1, 2);
    }
  }

  display() {
    push();
    noFill();
    circle(0, 0, 60);
    //leaves
    for (let i = 0; i < 4; i++) {
      // console.log(this.ly[1]);
      push();

      translate(this.lx[i], this.ly[i] - 25);

      if (i >= 2) {
        scale([-i / 10 - 0.2, i / 10 + 0.1]);
        rotate(this.deg[i]);
      } else {
        scale([0.7 - i / 10]);
        rotate(this.deg[i]);
      }

      stroke(220, this.green[i], 220);
      strokeWeight(2);
      arc(50, 60, 40, 40, 0, PI, OPEN);
      noFill();
      arc(65, 60, 40, 80, PI / 1.5, (3 * PI) / 2, OPEN); //leaf vein
      arc(65, 60, 70, 80, PI, (3 * PI) / 2, OPEN);
      arc(70, 20, 10, 80, PI / 2, PI, OPEN);
      fill(230, this.green[i], 230);
      strokeWeight(1);
      triangle(46, 75, 69, 62, 44, 68);
      triangle(44, 68, 32, 60, 46, 75);
      triangle(45, 60, 65, 44, 45, 51);
      triangle(45, 60, 33, 44, 45, 51);
      triangle(49, 36, 43, 30, 47, 40);
      triangle(49, 36, 65, 31, 47, 40);
      noFill();
      pop();
    }

    pop();
  }
  //flatting
  move() {
    //wind visualization
    for (let i = 0; i < 4; i++) {
      this.ly[i] += this.speed[i];
      this.lx[i] += random(-0.3, 0.3);
      if (this.ly[i] < -25 || this.ly[i] > 25) {
        this.speed[i] = -this.speed[i];
        // console.log(this.ly[i])
      }
    }
  }
}
