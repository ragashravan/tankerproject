var engine;
var tanker;
var shootball;
var ground;
var canonball;
var ball;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
engine = Matter.engine;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
Createcanvas(400,400);
ground = new Ground(400,100,20,200);
tanker = new Tanker(400,150,200,200);
shootball = constraint.create();
canonball = new Canonball(x,y,30,30);
ball = new Ball(x,y,20,20);

bodyA = canonball.body;
pointB = tanker.body;
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Matter.engine = Engine.update();
}


function keyReleased() {
   if(keyDown_SPACE){
       shootball.release
}
else{
    shootball = null;
}
}