var car, wall, speed, weight, deformation,small_car,medium_car,large_car;


function preload()

{
  small_car = loadImage("Small car.png");
  medium_car = loadImage("Medium car.png");
  large_car = loadImage("Large car.png")
}

function setup() {
  createCanvas(1600,400);

  speed = random(50,150);
  weight = random(2000,5000);

  car = createSprite(50,200,50,50);

  wall = createSprite(1500,200,60, height/2);

  car.velocityX = speed;
}


function collision()
{
if(wall.x-car.x < (car.width+wall.width)/2)
{
car.velocityX = 0;
deformation  = Math.round(0.5 * weight * speed * speed/22500)

if (deformation<80)
  {
  fill(0,0,0);
  text("Perfect, deformation is "+deformation+"!",800,200);
  }
else if(deformation > 80 && deformation <180)
{
  fill(0,0,0);
  text("Ok, but not that great, deformation is "+deformation+".",800,200);
} 
else if(deformation>180)
{
  fill(0,0,0);
  text("Uh oh! Deformation is "+deformation+"!",800,200);
}
  

}
}

function carSize()
{
  if (weight<3000)
  {
  car.addImage("small",small_car);
  car.scale = 0.4;
  }
  else if (weight > 3000 && weight < 4000)
  {
    car.addImage("medium",medium_car);
    car.scale = 0.5;
  }
  else if (weight>4000)
  {
    car.addImage("large",large_car);
    car.scale = 0.5;
  }
  
}


function draw() {
  background(255,255,255);  
  drawSprites();
  collision();
  carSize();
}