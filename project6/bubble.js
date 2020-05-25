class Bubble{
    constructor(){
        this.x = random(width);
        this.y = random(height);
    }

    display(r){
        strokeWeight(2);
        stroke(r, 44, 100);
        noFill();
        ellipse(this.x, this.y, 30, 30);
    }

    move(){
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

}