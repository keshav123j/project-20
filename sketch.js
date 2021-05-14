var car,wall,wall2,wall3,wall4;
var car2,car3,car4;


var weight,speed;

var damage;


function setup() {
  createCanvas(1600,600);

 

  speed = random(30,103);
  speed2 = random(30,103);
  speed3 = random(30,103);
  speed4 = random(30,103);
  weight = random(400,1500);

  car =  createSprite(50, 200, 50, 50);
car.shapeColor = "white"
  car.velocityX = speed;


 
 
  wall = createSprite(1200,200,60,100);
 


}
function draw() {
console.log(damage);

console.log(car.x)
  background(0,255,0);
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0
     var damage = 0.5*speed*speed*weight/22500
     if(damage>180){
       car.shapeColor = "red"
     }
     if(damage<180 && damage<100){
      car.shapeColor = "yellow"
    }
    if(damage<100){
      car.shapeColor = "green"
    }
  }
    drawSprites();
  }
