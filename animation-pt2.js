var x = 300;
var y = 200;
let r, b;
let extraCanvas;

function setup(){
    createCanvas(600, 400);
    // The function createGraphics() will create another layer as a canvas
    extraCanvas = createGraphics(600, 400);
    extraCanvas.background(255, 255, 90);
    background(255, 255, 90);
}

function draw(){
    x += random(-3, 3);
    y += random(-3, 3);

    b = map(mouseX, 0, 600, 0, 255);
    r = map(mouseY, 0, 400, 255, 0);
    image(extraCanvas, 0, 0);
    extraCanvas.noStroke();
    extraCanvas.fill(r, 210, b);
    extraCanvas.ellipse(mouseX, mouseY, 20, 20);

    fill(230, 90, 210);
    noStroke();
    rect(x, y, 14, 14);
}
