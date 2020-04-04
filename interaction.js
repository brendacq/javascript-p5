let x = 0, y;
let speed = 3;

function setup(){
    createCanvas(600, 400);
    y = height/2;
}

function draw(){
    background(255, 180, 200);

    fill(250, 240, 75);
    ellipse(x, y, 20, 20);

    // The value for the x coordinate of the ball will increase according to the speed value
    x += speed;
    
    // Once the ball reaches one of the edges of the canvas, the speed value will change so the ball will move in the opposite 
    // direction.
    if(x==0 || x==width){
        speed *= -1;
    }
}