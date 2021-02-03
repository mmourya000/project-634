const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg, monster1, monster2;
var ground, hero,fly;
var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var bl1,bl2,bl3,bl4,bl5,bl6;
function preload() {
//preload the images here
backgroundImg= loadImage("images/GamingBackground.png");
monster1= loadImage("images/Monster-01.png");
monster2= loadImage("images/Monster-02.png");
superhero1= loadImage("images/Superhero-01.png");
superhero2= loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground (600,600, 1200,20);
  hero = new Hero (400,400,400);
  
  fly = new Fly (hero.body, {x:500, y:50});
  b1= new Block (1000,560,50,50);
  b2= new Block (1050,560,50,50);
  b3= new Block (1100,560,50,50);
  b4= new Block (1150,560,50,50);

  b5= new Block (1025,530,50,50);
  b6= new Block (1075,530,50,50);
  b7= new Block (1125,530,50,50);

  b8= new Block (1050,500,50,50);
  b9= new Block (1100,500,50,50);
  b10= new Block (1075,470,50,50);

  bl1= new Block (900,560,50,50);
  bl2= new Block (900,530,50,50);
  bl3= new Block (900,500,50,50);

  bl4= new Block (900,470,50,50);
  bl5= new Block (900,440,50,50);
  bl6= new Block (900,410,50,50);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  ground.display();
  hero.display();
  fly.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();
  bl6.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

