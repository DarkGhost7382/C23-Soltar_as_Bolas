
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var angle1=60, angle2=60, angle3=60;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options ={
		isStatic: true
	  };

	plane = Bodies.rectangle(300,590,600,20, plane_options);
    World.add(world,plane);
	rectMode(CENTER);

	block1 = Bodies.rectangle(150,400,150,20, plane_options);
    World.add(world,block1);
	rectMode(CENTER);

	block2 = Bodies.rectangle(450,400,150,20, plane_options);
    World.add(world,block2);
	rectMode(CENTER);

	var particle_options ={
		restitutiion:0.4,
		friction:0.0001
	}

	particle1 = Bodies.circle(300,20,10, particle_options);
    World.add(world,particle1);
	ellipseMode(RADIUS);
	
	particle2 = Bodies.circle(300,20,10, particle_options);
    World.add(world,particle2);
	ellipseMode(RADIUS);

	particle3 = Bodies.circle(300,20,10, particle_options);
    World.add(world,particle3);
	ellipseMode(RADIUS);

	particle4 = Bodies.circle(300,20,10, particle_options);
    World.add(world,particle4);
	ellipseMode(RADIUS);

	particle5 = Bodies.circle(300,20,10, particle_options);
    World.add(world,particle5);
	ellipseMode(RADIUS);

	var rotator_options ={
		isStatic: true
	};

	rotator1 = Bodies.rectangle(300,225,200,20, rotator_options);
    World.add(world,rotator1);
	rectMode(CENTER);

	rotator2 = Bodies.rectangle(300,225,200,20, rotator_options);
    World.add(world,rotator2);
	rectMode(CENTER);

	rotator3 = Bodies.rectangle(300,225,200,20, rotator_options);
    World.add(world,rotator3);
	rectMode(CENTER);
}


function draw() {
  background("lightgreen");
  Engine.update(engine);
  
  fill(121, 3, 3);
  push();
  
  rect(plane.position.x, plane.position.y, 600, 20);
  rect(block1.position.x, block1.position.y, 150, 20);
  rect(block2.position.x, block2.position.y, 150, 20);
  
  pop();

  push();

  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);

  Matter.Body.rotate(rotator1, angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect (0,0,200,20);
  pop();
  angle1 +=5;

  Matter.Body.rotate(rotator2, angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect (0,0,200,20);
  pop();
  angle2 +=15;

  Matter.Body.rotate(rotator3, angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect (0,0,200,20);
  pop();
  angle3 +=10;
}