// Declaring my own variables
var circleWidth;
var circleHeight;

function setup(){
    createCanvas(600, 400);
    // Having the background() function in the setup block, it'll be drawn once.
    // Different than putting this function in the draw block, which would paint the background over and over again.
    background(255, 60, 125);
}

function draw(){
    // Initializing my variables with the value of the mouseX or mouseY coordinates minus some number.
    // At each time the function draw is executed, the circle width and height will vary according to the mouse coordinates.
    circleWidth = mouseX - 30;
    circleHeight = mouseY - 50;
    // The position of the ellipse will be the same coordinates of the mouse, both on the x-axis and the y-axis.
    fill(100, 200, 100);
    ellipse(mouseX, mouseY, circleWidth, circleHeight);
}

// This function works as an event.
// Once the user presses the mouse, the background will be drawn again, so the screen will be "clear" again.
function mousePressed(){
    background(255, 60, 125);
}