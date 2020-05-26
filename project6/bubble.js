class Bubble{
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.r = random(10, 50);
        this.redColor = random(255);
        this.greenColor = random(255);
    }

    display(){
        strokeWeight(2);
        stroke(this.redColor, this.greenColor, 100);
        noFill();
        ellipse(this.x, this.y, this.r, this.r);
    }

    move(){
        this.x += random(-2, 2);
        this.y += random(-2, 2);
    }

}