
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide, rightSide;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(200,300,20,ball_options);
  	World.add(world,ball);

	groundObj = new Ground(width/2,470,width,20);
	leftSide = new Ground(1050,400,20,120);
	rightSide = new Ground(1200,400,20,120);

	Engine.run(engine);
}


function draw() {
  background("white");

  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0.5});
	}
}