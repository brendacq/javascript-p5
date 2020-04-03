let extraCanvas;
let x, y;
let lightness;

function setup(){
    createCanvas(600, 400);
    background(20);
    extraCanvas = createGraphics(600, 400);

    extraCanvas.background(20);
}

function draw(){
    x = random(0, width);
    y = random(0, height);

    image(extraCanvas, 0, 0);

    fill(250, 250, 110);
    circle(85, 80, 70, 70);
    
    extraCanvas.fill(255, 255, 255, 200);
    extraCanvas.noStroke();
    extraCanvas.ellipse(x, y, 10, 10);

}

function mousePressed(){
    extraCanvas.background(20);
}