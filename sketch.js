
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload() {

}
var stone1, ground1, rubber1, ball1, ball2, ball3, hammer1;

function setup() {
	createCanvas(700, 600);

	engine = Engine.create();
	world = engine.world;

	stone1 = new stone(100, 100, 120)
	ground1 = new Ground(350, 580, 1700, 20)
	rubber1 = new rubber(500, 100, 100)
	ball1 = new ball(400, 100, 20)
	ball2 = new ball(420, 100, 20)
	ball3 = new ball(440, 100, 20)
	hammer1 = new hammer(350,350,30,50) 
	//Create the Bodies Here.


	//Engine.run(engine);

}


function draw() {
	background(0);

	Engine.update(engine)

	
	ground1.display();
	stone1.display();
	rubber1.display();
	ball1.display();
	ball2.display();
	ball3.display();
	hammer1.display()

}



