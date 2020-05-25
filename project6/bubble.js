class Bubble{
    constructor(){
        this.x = random(width);
        this.y = random(height);
    }

    display(){
        strokeWeight(2);
        stroke(213, 44, 100);
        noFill();
        ellipse(this.x, this.y, 30, 30);
    }

    move(){
        this.x += random(-2, 2);
        this.y += random(-2, 2);
    }

}