var backgroundImage;
var iss, spacecraft;
var issImage;
var hasDocked = false;
var spacecraftImage;
var point, pointImage;
var  leftImage, rightImage, bothImage;

function preload(){
backgroundImage = loadImage("spacebg.jpg");
issImage = loadImage("iss.png");
spacecraftImage = loadImage("spacecraft1.png");
leftImage = loadImage("spacecraft3.png");
rightImage = loadImage("spacecraft4.png");
bothImage = loadImage("spacecraft2.png");
pointImage = loadImage("point.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight-111);
  iss = createSprite(900, 250, 50, 50);
  iss.addImage(issImage);
  iss.scale = 0.9;

    spacecraft = createSprite(random(200,900),550,20,20);
    spacecraft.addImage(spacecraftImage);
    spacecraft.scale = 0.3;

    point = createSprite(845,276,5);
    point.addImage(pointImage);
    point.scale=0.02;
}


function draw() {
  background(backgroundImage);  

  if(!hasDocked){

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(leftImage);
      spacecraft.scale = 0.3;
      spacecraft.x = spacecraft.x-2;
    }


    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(rightImage);
      spacecraft.scale = 0.3;
      spacecraft.x = spacecraft.x+2
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(bothImage);
      spacecraft.scale = 0.3;
      //no movement
    }

    if(keyDown(UP_ARROW)){
      spacecraft.addImage(bothImage);
      spacecraft.scale = 0.3;
      spacecraft.y = spacecraft.y-2;
    }

  }


  if(spacecraft.isTouching(point)){
    textSize(40);
    text("Docking Successful!!",550,600);

    hasDocked = true;
  }


  drawSprites();
}