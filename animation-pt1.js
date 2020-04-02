// Creating an object. An object is very useful for us to assemble the attributes of an element at one place.
var crcl = {
    Width: 0,
    Height: 0,
    r: 0,
    g: 200,
    b: 0
}

var bgColor = {
    r: 255,
    g: 60,
    b: 125
}

function setup(){
    createCanvas(600, 400);
    // Having the background() function in the setup block, it'll be drawn once.
    // Different than putting this function in the draw block, which would paint the background over and over again.
    background(bgColor.r, bgColor.g, bgColor.b);
}

function draw(){
    // Initializing my variables with the value of the mouseX or mouseY coordinates minus some number.
    // At each time the function draw is executed, the circle width and height will vary according to the mouse coordinates.
    crcl.Width = mouseX - 30;
    crcl.Height = mouseY - 50;

    // The map function will 
    crcl.r = map(mouseX, 0, 600, 0, 255);
    crcl.b = map(mouseY, 0, 400, 255, 0);

    // The position of the ellipse will be the same coordinates of the mouse, both on the x-axis and the y-axis.
    fill(crcl.r, crcl.g, crcl.b);
    ellipse(mouseX, mouseY, crcl.Width, crcl.Height);
}

// This function works as an event.
// Once the user presses the mouse, the background will be drawn again, so the screen will be "clear" again.
function mousePressed(){
    background(255, 60, 125);
}