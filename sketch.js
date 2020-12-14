
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas (400,400);  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

  
  
ground = createSprite(400,350,900,10);
  ground.velocityX = -4
ground.x=ground.width/2;

  foodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background("red");
if(keyDown("space")){
  monkey.velocityY=-10;
}

monkey.velocityY = monkey.velocityY+0.8;
if(ground.x<0){
ground.x=ground.width/2;
}
  
monkey.collide(ground);
food();
rock();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" +score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  
  drawSprites();
}
function food(){
  if(frameCount%80===0){
    
  
  banana = createSprite(400,Math.round(random(120,200)),10,10);
    banana.scale=0.1;
  banana.addImage(bananaImage);
  banana.velocityX=-4;
  banana.lifetime=100;
  monkey.depth=banana.depth+1;
  foodGroup.add(banana);
  }
  
}

function rock(){
  if(frameCount%300===0){
    
  
  obstacle = createSprite(370,330,10,10);
    obstacle.scale=0.1;
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-5;
  obstacle.lifetime=80;
  obstacleGroup.add(obstacle);
  }
  
}



