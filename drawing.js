
function setup (){
    createCanvas(400, 400);
}

function draw(){
    background(0,142, 34);

    // The first two numbers are coordinates of the top left point of the rectangle
    // To start drawing the rectangle from the center, we can use the function:
    // rectMode(CENTER);
    rect(30, 30, 50, 100);

    // The numbers are coordinate of the two points of a line
    line(0, 199, 399, 199);

    // Each pair of numbers define the x and y coordinates of the three points
    // x1 and y1 are the top point; x2 and y2 the bottom left point; x3 and y3, the bottom right
    triangle(248, 200, 200, 300, 300, 300);
}