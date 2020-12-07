var fixedRect, movingRect;

var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,100,50,50);
  car.shapeColor = "pink";
  car.velocityX=3;
  //movingRect.debug = true;

 wall = createSprite(400,100,20,50);
  wall.shapeColor = "white";
 // movingRect.debug = true;


}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,wall)){
    //movingRect.shapeColor="white";
    //car.velocityX=0;
    textSize(40);
    text("touched",100,100);
  }
 collide(car,wall);
  

  drawSprites();
}
