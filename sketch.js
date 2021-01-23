var jerry,tom;

function preload() {
    //load the images 
}

function setup(){
    //create a canvas
    createCanvas(500,500);

    //create sprite
    jerry = createSprite(100,250,20,20);
    tom = createSprite(400,250,50,50)

    //give them velocity
    tom.velocityX = -5;
    tom.velocityY = 0;
    
}

function draw() {
    //create background
    background("black");
    
    //make the collision
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.velocityY = 0;
    }

    drawSprites();
}



