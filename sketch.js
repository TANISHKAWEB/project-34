const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ball = new Ball(50,50)
    box1 = new Box(600,100,50,50)
    box2 = new Box(600,100,50,50)
    box3 = new Box(600,100,50,50)
    box4 = new Box(600,100,50,50)
    box5= new Box(600,100,50,50)
    box6 = new Box(800,100,50,50)
    box7 = new Box(800,100,50,50)
    box8 = new Box(800,100,50,50)
    box9 = new Box(800,100,50,50)
    box10 = new Box(800,100,50,50)
     
    rope1=new Rope(ball.body,{x:500,y:50})
    

}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   box7.display();
    box8.display();
    box9.display();
    box10.display();
    rope1.display();
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,x:mouseY})


}