var box;

//upload the images
function preload(){

  //sprite_img = loadImage("image1.png")
 
}

//create the sprites 

function setup(){
  createCanvas(600,600);

  box  = createSprite(100,100,50,50);
  box.shapeColor = "red";

}


//give instruction while the code is running
function draw(){
  background("lightblue");

  if(keyDown("left")){
    box.x -= 2;
  }

  if(keyDown("right")){
    box.x +=2;

  }

  if(keyDown("up")){
    box.y -=2;

  }

if(keyDown("down")){
  box.y +=2;
}

drawSprites();
}