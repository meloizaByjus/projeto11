var sea, ship;
var seaImg, shipImg;
function preload(){
   seaImg = loadImage("sea.png");
   shipImg = loadImage("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");




}

function setup(){
  createCanvas(400,400);
  background("blue");
  // mar
  sea = createSprite(400, 200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;
  // barco
  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

  ship.scale = 0.25;

}

function draw() {
  background("blue");
    drawSprites();
    sea.velocityX = -3;
    if(sea.x  < 1 ) {
      sea.x = 400
      sea.velocityX = -3

    }

 
}
