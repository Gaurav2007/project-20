var car, wall,line;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

line1 = createSprite(800,115,1600,10);
line1 = createSprite(800,205,1600,10);
line1 = createSprite(800,295,1600,10);
line1 = createSprite(800,385,1600,10);
line1 = createSprite(1590,200,10,400);

  wall1 = createSprite(1580, 70, 20, 70);
  wall2 = createSprite(1580,160,20,70);
  wall3 = createSprite(1580,250,20,70);
  wall4 = createSprite(1580,340,20,70);

car1= createSprite(100,50,50,40);
car1.veloityX = speed;

car2= createSprite(100,150,50,40);
car2.veloityX = speed;

car3= createSprite(100,250,50,40);
car3.veloityX = speed;

car4= createSprite(100,350,50,40);
car4.veloityX = speed;

}

function draw() {
  background(0);  

car1.shapeColor=color('red');
car2.shapeColor=color('green');
car3.shapeColor=color('blue');
car4.shapeColor=color('yellow');
  drawSprites();
}