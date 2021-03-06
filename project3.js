var ball = {
    x: 0,
    y: 0,
    xSpeed: 3,
    ySpeed: 3,
    r: 100,
    g: 230,
    b: 200
}

function setup(){
    createCanvas(600, 400);
    ball.x = random(width);
    ball.y = random(height);
}

function draw(){
    background(255, 100, 100);

    fill(ball.r, ball.g, ball.b);
    ellipse(ball.x, ball.y, 25, 25);

    if(ball.x>=width){
        ball.xSpeed *= -1;
        ball.r = 100;
        ball.g = 230; 
        ball.b = 200;
    } else if (ball.x<=0){
        ball.xSpeed *= -1;
        ball.r = 180;
        ball.g = 20; 
        ball.b = 140;
    }

    if (ball.y>=height){
        ball.ySpeed *= -1;
        ball.r = 120;
        ball.g = 120; 
        ball.b = 200;
    } else if (ball.y<=0){
        ball.ySpeed *= -1;
        ball.r = 210;
        ball.g = 170; 
        ball.b = 12;
    }

    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
}