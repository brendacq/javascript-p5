// Defining an array of words: 
var words = ["rainbow", "purple", "heart", "friendship", "unicorn"];

// Declaring an array with arbitrary number
var nums = [100, 52, 55, 22];

// Variable to change the array index as the mouse is pressed
var index = 0;


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    fill(255);
    textSize(32);
    text(words[index], 30, 200);

    // Using loops to draw lots of the same shape on the canvas
    for (var i = 0; i < 4; i++) {
        stroke(255);
        fill(244, 100, 170);
        ellipse(i * 130 + 100, 320, nums[i], nums[i]);
    }
}

function mousePressed() {
    // Everytime the mouse is pressed, the index must increment and the next word will be shown
    index++;

    // When the index reaches the end of the array, it comes back to 0
    if (index == 5) {
        index = 0;
    }
}