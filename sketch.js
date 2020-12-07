var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1300, 400);
 
  thickness = random(22, 83);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "grey";
 
  speed = random(223, 321);
  weight = random(30, 52);
  
  bullet = createSprite(200, 200, 100, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10) {
      wall.shapeColor = color(255, 0, 0)
    }

    if(damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
 }
 
function hasCollided(object1, object2) {
  bulletRightEdge = bullet.x + bullet.width;

  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
} 


