
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new dustbin(400,640,200,20); 
	box2 = new dustbin(290,600,20,100);
	box3 = new dustbin(500,600,20,100);
	paper = new Paper(200,300,20);
	ground = Bodies.rectangle(width/2, 680, 800, 10 , {isStatic:true} );
	World.add(world,ground)
	Engine.run(engine);
  
}

function keyPressed(){
if (keyCode=== UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})

}



}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
 
}



