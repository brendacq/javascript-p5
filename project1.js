// This project referrs to the first section of the course: Drawing
// I only used the tools presented in the four videos of the section.

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);

    fill(0);
    strokeWeight(2);
    stroke(255);
    triangle(297, 130, 245, 230, 355, 230);

    line(0, 250, 290, 170);

    // Red line
    stroke(200, 0, 0);
    strokeWeight(4);
    line(317, 160, 600, 220);
    //Orange line
    stroke(270, 100, 0);
    strokeWeight(4);
    line(319, 164, 600, 224);
    //Yellow line
    stroke(255, 200, 0);
    strokeWeight(4);
    line(321, 168, 600, 228);
    //Green line
    stroke(0, 255, 0);
    strokeWeight(3);
    line(322, 170, 600, 231);
    //Blue line
    stroke(0, 0, 255);
    strokeWeight(3);
    line(325, 173, 600, 234);
    // Purple line
    stroke(150, 0, 255);
    strokeWeight(3);
    line(327, 176, 600, 237);
}



  /*********************************  
  Home again
  I like to be here
  When I can
  
  (Pink Floyd)
  *********************************/