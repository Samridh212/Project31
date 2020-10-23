const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(250, 780, 500, 20);

  for (var k = 0; k <= width; k += 80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight-30));
  }

  for (let j = 75; j <= width - 20; j += 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (let j = 50; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (let j = 75; j <= width - 20; j += 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (let j = 50; j <= width - 10; j+=50) {
    plinkos.push(new Plinko(j, 375));
  }
 
}

function draw() {
  background(0);
  Engine.update(engine);
 

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10,10));
  }
  for (let j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ground.display();

  drawSprites();
}