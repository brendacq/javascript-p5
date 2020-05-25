/* 
    This project covers the 5th section - Modularity and Reusability - about Functions,
    and the 6th section - Object-Oriented Programming - about objects.
    Since I'm building Classes, this is when I'm gonna start to use HTML files and execute
    the code directly on browser - I was using a vscode extension called live-p5 by Filipe Sabella
    (still using tbh) to visualize the changes I make right on vscode.
*/

var bubble1;
var bubble2;
var r1;
var r2;

function setup(){
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    r1 = random(255);
    r2 = random(255);
}

function draw(){
    background(0);    
    bubble1.display(r1);
    bubble1.move();
    bubble2.display(r2);
    bubble2.move();
}