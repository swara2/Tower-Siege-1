const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var ball, chain;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,240,200,20);
    ground = new Ground(1000,380,200,20);

    box1 = new Box(530,235,30,40);
    box2 = new Box(560,235,30,40);
    box3 = new Box(590,235,30,40);
    box4 = new Box(620,235,30,40);
    box5 = new Box(650,235,30,40);
    box6 = new Box(560,120,30,40);
    box7 = new Box(590,120,30,40);
    box8 = new Box(620,120,30,40);
    box9 = new Box(590,80,30,40);
    
    box10 = new Box(930,378,30,40);
    box11 = new Box(960,378,30,40);
    box12 = new Box(990,378,30,40);
    box13 = new Box(1020,378,30,40);
    box14 = new Box(1050,378,30,40);
    box15 = new Box(960,360,30,40);
    box16 = new Box(990,365,30,40);
    box17 = new Box(1020,365,30,40);
    box18 = new Box(990,340,30,40);
    
    ball = new Ball(100,100);

   // log6 = new Log(230,180,80, PI/2);
    chain = new Chain(ball.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ball.display();
   // log6.display();
    chain.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}