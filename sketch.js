var paper, box1, box2, box3;
var dustbin,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	box1 = createSprite(width,20 ,height-100);
	box2 = createSprite(width,20 ,height-100);
	box3 = createSprite(width,100 ,height-20);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(  100, 100, 20, 100, {isStatic:true});
	 box2 = Bodies.rectangle(  100, 100, 20, 100, {isStatic:true});
	 box3 = Bodies.rectangle(  200, 100, 100, 20, {isStatic:true});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  
  drawSprites();

  
 
}



