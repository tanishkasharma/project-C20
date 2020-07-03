var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60,height/2 );
  speed=random(20,40);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed; 
  drawSprites();




}