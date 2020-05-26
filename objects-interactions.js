let bubbles = [];

class Bubble {
    constructor() {
        this.x = random(600);
        this.y = random(400);
        this.r = random(10, 50);
        this.redColor = random(255);
        this.greenColor = random(255);
        this.b = 0;
    }

    display() {
        strokeWeight(2);
        stroke(this.redColor, this.greenColor, 100);
        fill(100, 100, this.b, 100);
        ellipse(this.x, this.y, this.r, this.r);
    }

    clicked(_x, _y) {
        let d = dist(_x, _y, this.x, this.y);
        if (d < this.r) {
            this.b = 255;
        }
    }

    move() {
        this.x += random(-2, 2);
        this.y += random(-2, 2);
    }

}

function setup() {
    createCanvas(600, 400);

    for (var i = 0; i < 10; i++) {
        bubbles[i] = new Bubble();
    }
}

function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }
}

function mousePressed() {
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}
