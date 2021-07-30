const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,stone,rubber,hammer

function setup() {
	 var canvas = createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;


  plane1=new Plane(600,height,1200,20);
  hammer1=new Hammer(10,180);
  iron1=new Iron(300,560);
  rubber1=new Rubber(500,570);
  sand1=new Sand(700,580);
  sand2=new Sand(750,580);
  
}


function draw() {
  background(0,255,0);
  Engine.update(engine);
  
plane1.display();
hammer1.display();
iron1.display();
rubber1.display();
sand1.display();
sand2.display();


 
 
}
