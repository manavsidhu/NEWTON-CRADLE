const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var circle,circle2,circle3, circle4,circle5, roof
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new box(width/2,height/4,400,20);

	bobDiameter=10;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	circle=new circle1(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	circle2=new circle1(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	circle3=new circle1(startBobPositionX,startBobPositionY,bobDiameter);
	circle4=new circle1(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	circle5=new circle1(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);




	rope1=new chain(circle.body,roof.body,-bobDiameter*2, 0)
	rope2=new chain(circle2.body,roof.body,-bobDiameter*1, 0)
	rope3=new chain(circle3.body,roof.body,0, 0)
	rope4=new chain(circle4.body,roof.body,bobDiameter*1, 0)
	rope5=new chain(circle5.body,roof.body,bobDiameter*2, 0)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");
  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  circle.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(circle.body,circle.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;

	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}