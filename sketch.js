const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var plr

function preload() {
bg = loadImage("https://static.vecteezy.com/system/resources/thumbnails/000/234/128/small/soccer-field-background.jpg")
plrUp = loadAnimation("player/tile000.png","player/tile001.png","player/tile002.png")
plrRight = loadAnimation("player/tile003.png","player/tile004.png","player/tile005.png")
plrDown = loadAnimation("player/tile006.png","player/tile007.png","player/tile008.png")
plrLeft = loadAnimation("player/tile009.png","player/tile010.png","player/tile011.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  eng = Engine.create();
  world = eng.world;

  plr = new Player()
  wall1 = new Wall(100,50,1240,3)
  wall2 = new Wall(100,height-55, 1240, 3)
  wall3 = new Wall(110,50,3,300)
  wall4 = new Wall(110,445, 3,300)
  wall5 = new Wall(1330,50,3,300)
  wall6 = new Wall(1330,445, 3,300)
}
function draw() {
  background(bg);
  // image(bgImage,250,200,width, height)
  Engine.update(eng);
  plr.display()
 wall1.display()
 wall2.display()
 wall3.display()
 wall4.display()
 wall5.display()
 wall6.display()
}

function keyPressed(){
if(keyCode==32){
Matter.Body.setStatic(plr.player, false)
}  
}


