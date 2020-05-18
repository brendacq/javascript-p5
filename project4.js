let extraCanvas;
let x, y;

var night = true;
var day = false;

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

    // Sun / Moon
    fill(250, 250, 110);
    circle(85, 80, 70, 70);
    
    // Stars
    if (night){
        extraCanvas.fill(255, 255, 255, 200);
        extraCanvas.noStroke();
        extraCanvas.ellipse(x, y, 10, 10);
    }

    if(!day){
        // Blue Sky
        extraCanvas.background(180, 220, 255);
        // Clouds
        extraCanvas.fill(255);
        extraCanvas.ellipse(400, 100, 300, 50);
        extraCanvas.ellipse(270, 85, 40, 40);
        extraCanvas.ellipse(300, 80, 50, 50);
        extraCanvas.ellipse(350, 70, 70, 70);
        extraCanvas.ellipse(400, 80, 80, 70);
        extraCanvas.ellipse(460, 80, 80, 60);
        extraCanvas.ellipse(510, 90, 70, 50);
    }

}

function mousePressed(){
    day = !day;

    if(day){
        extraCanvas.background(20);
    }
}