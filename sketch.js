var monkey , monkey_running
var banana ,bananaImage,obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var place,position;
var rock;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
createCanvas(400,400);  
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);  
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
}

function fruit(){
  if(frameCount%80==0){
    place=Math.round(random(120,200));
    banana=createSprite(400,place,10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=150;
    banana.scale=0.1;
  }
}

function obstacle(){
  if(frameCount%300==0){  
  rock=createSprite(400,330,20,20);
  rock.addImage(obstaceImage);
  rock.velocityX=-6;
    rock.scale=0.1;
}
}
function draw() {
background("white");  
  
drawSprites();
  
console.log(ground.x);  

if(keyDown("space")&&monkey.y>120){
  monkey.velocityY=-4;
}  
monkey.velocityY=monkey.velocityY+0.4;
  
if(monkey.y<120){
  monkey.velocityY=4;
}  
  
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivaltime=Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivaltime,100,50);  
  
monkey.collide(ground);  
  
if(ground.x>65){
  ground.x=400
}
 fruit(); 
 obstacle(); 
}