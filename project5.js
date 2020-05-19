// This project was made based on the Nested Loops video from the 4th section of the p5.js course: Interaction.
// The idea is to make a matrix with different elements depending on their position.

function setup() {
    createCanvas(400, 400);
    background(200, 255, 190);
}

function draw() {
    strokeWeight(0.1);
    for (var i = 0; i <= width; i += 30) {
        for (var j = 0; j <= height; j += 30) {
            if (i == j) {
                fill(200, 210, 110);
                rectMode(CENTER);
                rect(i, j, 13, 13);
            } else if (i > j) {
                fill(240, 190, 172);
                ellipse(i, j, 13, 13);
            } else {
                fill(160, 190, 248);
                ellipse(i, j, 13, 13);
            }
        }
    }
}