let catVersion=true
let keycounter=0
let d=1
let pKeyWasPress=true
let song;

function preload() {
  // we have included both an .ogg file and an .mp3 file
  soundFormats('mp3');
  song = loadSound('kiyomi.mp3');

}

function setup() {
  let cnv= createCanvas(450, 450);
  cnv.parent("canvasContainer")
  
  background(255);
}

function draw() {
  textSize(12);
  textStyle(ITALIC);
  fill(255)
  text(" To play with the cat:",14,16)
  text("1. Press a-z, press/double press your mouse/simply draw",14,29)
  text("2. Press 1-9 to change the weight of your pen and snow spots",14,42)
  text("3. Erase the screen with your mouse or click the 'CLEAN'",14,55)
 //the cat
   background(mouseX/2+150,160+mouseX/2-mouseY/2,mouseY/2+150,2);
   fill(160,140,140)
    if(catVersion==true){  
      fill(160+mouseX/2-mouseY/2,mouseY/2+150,mouseX/2+150,5)
      noStroke()
      ellipse(202,405,410,250)
      stroke(160,140,140)
      strokeWeight(40)
      noFill()
      bezier(20,410,30,397,68,360,118,450)
      strokeWeight(1)
      stroke(0)
      
      fill(160,140,140)
      // background(mouseX/2+150,160+mouseX/2-mouseY/2,mouseY/2+150,2);
      triangle(70,380,185,347,130,420)
      triangle(width-70,380,width-185,347,width-130,420)
      
    }else{
      fill(mouseY/2+150,160+mouseX/2-mouseY/2,mouseX/2+150,5)
      noStroke()
      ellipse(202,405,410,250)
      stroke(160,140,140)
      strokeWeight(40)
      noFill()
      bezier(20,380,30,450,120,460,136,445)
      strokeWeight(1)
      stroke(0)
      
      fill(160,140,140)
      // background(mouseX/2+150,160+mouseX/2-mouseY/2,mouseY/2+150,2);
      triangle(114,310,195,345,130,420)
      triangle(width-114,310,width-195,345,width-130,420)
    }
  
  fill(160,140,140)
  if(keyIsPressed==true && (keyCode>=65&&keyCode<=90 && pKeyWasPressed==false) ){
    catVersion=!catVersion
    keycounter=keycounter+1
      stroke(180,160)
      strokeWeight(40)
      noFill()
      bezier(20,410,30,397,68,360,118,450)
      bezier(20,380,30,450,120,460,136,445)
      strokeWeight(1)

      fill(180,160)
      // background(mouseX/2+150,160+mouseX/2-mouseY/2,mouseY/2+150,8);
      triangle(70,380,185,347,130,420)
      triangle(width-70,380,width-185,347,width-130,420)
      triangle(114,310,195,345,130,420)
      triangle(width-114,310,width-195,345,width-130,420)
      stroke(0)
      fill(160,140,140)
  }
  if(keyIsPressed==true){
    pKeyWasPressed=true
  }else{
    pKeyWasPressed= false
  }
  //eyes
  ellipse(width/2,height-20,200,180)
  fill(240)
  ellipse(width/2-48,height-60,56,60)
  ellipse(width/2+48,height-60,56,60)
  fill(40,260)
  ellipse(width/2-48,height-60,30,40)
  ellipse(width/2+48,height-60,30,40)
  fill(200,230,255,250)
  ellipse(width/2-48,height-60,24,34)
  ellipse(width/2+48,height-60,24,34)
  //mouth
  fill(240,170,180)
  if(catVersion==false){  
      triangle(width/2-18,400,width/2-5,444,width/2+21,406)
    }else{
      triangle(width/2-18,390,width/2+5,430,width/2+18,388)
    }
  fill(160,140,140)
  
//lines
  if(mouseIsPressed){
    strokeWeight(3)
      //change the weight of lines
      if(keyCode>=49 && keyCode<=57){
         d=keyCode-48
        strokeWeight(d)
      }
     //there is a easier way to fullfil it
     //but the strokeWeight will be return to 1 
     //if I press another non-nember key --> d=key
    
      //change the color of the lines
    stroke(mouseX/2+30,mouseY/2+30,abs(mouseX/2-mouseY/2))
      //draw the line  
    line(mouseX,mouseY,pmouseX,pmouseY)
    stroke(0)
    strokeWeight(2)
      //drawing lines and playing with the cat
      if(mouseX>=width/5*2 &&mouseX<=width/5*3 ){
         fill(240)
        ellipse(width/2-48,height-60,56,60)
        ellipse(width/2+48,height-60,56,60)
        fill(40,260)
        ellipse(width/2-44,height-70,30,40)
        ellipse(width/2+44,height-70,30,40)
        fill(200,220,255,230)
        ellipse(width/2-44,height-70,26,36)
        ellipse(width/2+44,height-70,26,36)
      }else if(mouseX<width/5*2 &&mouseY>height/5 && mouseY<height*4/5){
         fill(240)
        ellipse(width/2-48,height-60,56,60)
        ellipse(width/2+48,height-60,56,60)
        fill(40,260)
        ellipse(width/2-56,height-68,30,40)
        ellipse(width/2+40,height-68,30,40)
        fill(200,220,255,230)
        ellipse(width/2-56,height-68,24,34)
        ellipse(width/2+40,height-68,24,34)
      }else if(mouseX>width/5*3 &&mouseY>height/5 && mouseY<height*4/5){
         fill(240)
        ellipse(width/2-48,height-60,56,60)
        ellipse(width/2+48,height-60,56,60)
        fill(40,260)
        ellipse(width/2-40,height-68,30,40)
        ellipse(width/2+56,height-68,30,40)
        fill(200,220,255,230)
        ellipse(width/2-40,height-68,24,34)
        ellipse(width/2+56,height-68,24,34)
      }else if(mouseX>width/5*3 && mouseY>=height*4/5){
        fill(240)
        ellipse(width/2-48,height-60,56,60)
        ellipse(width/2+48,height-60,56,60)
        fill(40,260)
        ellipse(width/2-36,height-60,30,40)
        ellipse(width/2+60,height-60,30,40)
        fill(200,230,255,250)
        ellipse(width/2-35,height-60,24,34)
        ellipse(width/2+61,height-60,24,34)
      }else if(mouseX<width/5*2 && mouseY>=height*4/5){
        fill(240)
        ellipse(width/2-48,height-60,56,60)
        ellipse(width/2+48,height-60,56,60)
        fill(40,260)
        ellipse(width/2-60,height-60,30,40)
        ellipse(width/2+36,height-60,30,40)
        fill(200,230,255,250)
        ellipse(width/2-61,height-60,24,34)
        ellipse(width/2+35,height-60,24,34)
      }
  }
     fill(160,140,140)
  
  //click the corner of the tail to clean the board
  if(mouseX<80 && mouseY>410 && mouseIsPressed){
    background(mouseX/2+150,160+mouseX/2-mouseY/2,mouseY/2+150);
    //the cat
     fill(160,140,140)
      if(catVersion==true){  
        stroke(160,140,140)
        strokeWeight(40)
        noFill()
        bezier(20,410,30,397,68,360,118,450)
        strokeWeight(1)
        stroke(0)
        fill(160,140,140)
        // background(mouseX/2+150,160+mouseX/2-mouseY/2,mouseY/2+150,8);
        triangle(70,380,185,347,130,420)
        triangle(width-70,380,width-185,347,width-130,420)
      }else{
        stroke(160,140,140)
        strokeWeight(40)
        noFill()
        bezier(20,380,30,450,120,460,136,445)
        strokeWeight(1)
        stroke(0)
        fill(160,140,140)
        triangle(114,310,195,345,130,420)
        triangle(width-114,310,width-195,345,width-130,420)
      }
    //eyes
    ellipse(width/2,height-20,200,180)
    fill(240)
    ellipse(width/2-48,height-60,56,60)
    ellipse(width/2+48,height-60,56,60)
    fill(40,260)
    ellipse(width/2-48,height-60,30,40)
    ellipse(width/2+48,height-60,30,40)
    fill(200,230,255,250)
    ellipse(width/2-48,height-60,24,34)
    ellipse(width/2+48,height-60,24,34)
    //mouth
    fill(240,170,180)
    if(catVersion==false){  
        triangle(width/2-18,400,width/2-5,444,width/2+21,406)
      }else{
        triangle(width/2-18,390,width/2+5,430,width/2+18,388)
      }
  }
textSize(22)
  fill(200,220,220)
text("CLEAN",10,height-10)  
  //the bottom of music
if (song.isPlaying()==false) {
      rect(width-30,height-30,30,30,10,10,10,10)
      strokeWeight(2)
      line(width-21,height-23,width-6,height-23)  
      line(width-20,height-18,width-5,height-18)  
      line(width-21,height-23,width-19,height-10)  
      line(width-6,height-23,width-4,height-10)
      fill(0)
      ellipse(width-23,height-9,8,7)
      ellipse(width-8,height-9,8,7)
  
}else {strokeWeight(2)
      rect(width-30,height-30,30,30,10,10,10,10)
      noFill()
      stroke(80,100)
      strokeWeight(2)
      rect(width-31,height-29,29,29,8,8,8,8)
      strokeWeight(2)
      stroke(0)
      line(width-21,height-23,width-6,height-23)  
      line(width-20,height-18,width-5,height-18)  
      line(width-21,height-23,width-19,height-10)  
      line(width-6,height-23,width-4,height-10)
      fill(0)
      ellipse(width-23,height-9,8,7)
      ellipse(width-8,height-9,8,7)
     }


console.log(mouseX,mouseY,keycounter,key,keyCode,d)
}

function doubleClicked() {
  let x1=mouseX
  let y1=mouseY
  fill(255)
  noStroke()
  ellipse(x1,y1,d*8)
}

function mousePressed() {
  if(mouseX>width-30 && mouseY>height-30 ){
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      rect(width-30,height-30,30,30,10,10,10,10)
      strokeWeight(2)
      line(width-21,height-23,width-6,height-23)  
      line(width-20,height-18,width-5,height-18)  
      line(width-21,height-23,width-19,height-10)  
      line(width-6,height-23,width-4,height-10)
      fill(0)
      ellipse(width-23,height-9,8,7)
      ellipse(width-8,height-9,8,7)

    } else {
      song.play();
   
     
    }
  }
}
