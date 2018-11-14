var a;
var b;
var c;
var value;
//upload two assginments, including html file that gives explanation of the artwork
//1st mouse_left_click - put the eyeball
//rightclick - clear
function preload(){
  a=loadImage('eye.svg');
  b=loadImage('mirror.svg');
  c=loadImage('white.jpg');
  value=0;
}

function setup(){
  createCanvas(1000,1000);
  background(255);
  image(b,-7,24);
}

function draw() {
  
}

function mousePressed(){
  if(mouseButton===LEFT && value===0){
    image(a,0,0);
    value=value+1;
  }
  else if(mouseButton===LEFT && value===1){
    image(b,-7,24);
    value=value-1;
  }
  else if(mouseButton===RIGHT){
  image(c,0,0);
  } 
}
