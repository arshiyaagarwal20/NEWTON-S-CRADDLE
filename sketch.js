
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

console.log(width);
console.log(height);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 

	bob1= new bob(250,480,50)
	bob2=new bob(400,480,50)
	bob3=new bob(580,480,50)
	bob4=new bob(750,480,50)
	bob5=new bob(870,480,50)
	groundObj=new ground(800,30,730,30)
	rope1=new Chain(bob1.body,groundObj.body,-bobDiameter*2,0)
	rope2=new Chain(bob2.body,groundObj.body,-bobDiameter*2,0)
	rope3=new Chain(bob3.body,groundObj.body,-bobDiameter*2,0)
	rope4=new Chain(bob4.body,groundObj.body,-bobDiameter*2,0)
	rope5=new Chain(bob5.body,groundObj.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  groundObj.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



