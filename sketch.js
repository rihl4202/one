
function setup() {
  createCanvas(650,580);
  box=createSprite(340,250,20,20)
}

function draw() 
{
  background("black");
if(keyDown("left")){
  box.velocityX = -5
}

if(keyDown("right")){
  box.velocityX = 5
}

if(keyDown("up")){
  box.velocityY = -5
}

if(keyDown("down")){
  box.velocityY = 5
}
  drawSprites()
}




