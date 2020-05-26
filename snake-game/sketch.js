let snake;

function setup() {
    createCanvas(600, 400);

    snake = new Snake();
}

function draw() {
    background(0);

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
    }
}