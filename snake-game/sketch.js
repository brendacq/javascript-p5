let snake;
let food;

function setup() {
    createCanvas(600, 400);

    snake = new Snake();
    food = new Food();
}

function draw() {
    background(0);

    food.show();

    snake.display();
    snake.move();
}

class Snake {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.l = 14;
    }

    display() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.l, this.l);
    }

    move() {
        if (key == 'a') {
            this.x += -2;
        } else if (key == 'd') {
            this.x += 2;
        }

        if (key == 'w') {
            this.y += -2;
        } else if (key == 's') {
            this.y += 2;
        }

        // Check if the snake is inside the canvas
        this.isDead();
    }

    isDead(){
        if(this.x <= 8 || this.x >= 592){
            textSize(32);
            text("IS DEAD", 200, 200);
        }

        if(this.y <= 8 || this.y >= 392){
            textSize(32);
            text("IS DEAD", 200, 200);
        }
    }
}

class Food{
    constructor(){
        this.x = random(20, 580);
        this.y = random(20, 380);
        this.l = 5;
    }

    show(){
        fill (255, 50, 50);
        rect(this.x, this.y, this.l, this.l);
    }
}