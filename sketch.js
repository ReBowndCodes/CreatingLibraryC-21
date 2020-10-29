var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1=createSprite(200,200,20,20);
  o1.shapeColor = "yellow";

  o2=createSprite(300,200,20,20);
  o2.shapeColor = "yellow";

  o3=createSprite(400,200,20,20);
  o3.shapeColor = "yellow";

  o4=createSprite(500,200,20,20);
  o4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(IsTouching(o1,movingRect)){
    o1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
   o1.shapeColor = "green";
  }
  drawSprites();
}

