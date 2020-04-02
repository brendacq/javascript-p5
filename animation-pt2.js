var x = 300;
var y = 200;
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

    image(extraCanvas, 0, 0);
    extraCanvas.noStroke();
    extraCanvas.fill(180, 210, mouseX);
    extraCanvas.ellipse(mouseX, mouseY, 20, 20);

    fill(230, 90, 210);
    noStroke();
    rect(x, y, 14, 14);
}
