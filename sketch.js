var car,wall;
var speed,weight;

function setup() {
 createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);
  car=createSprite(50,200,50,50) ;
  wall=createSprite(1500,200,60,height/2);

  if(isTouching(car,wall)){
    car.shapeColor='random ';
    wall.shapeColor='random';
     
   }
   else{
    car.shapeColor='white';
    gameobj2.shapeColor='white';
  }

  car.velocityX=speed;
  drawSprites();
}