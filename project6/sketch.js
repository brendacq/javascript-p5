/* 
    This project covers the 5th section - Modularity and Reusability - about Functions,
    and the 6th section - Object-Oriented Programming - about objects.
    Since I'm building Classes, this is when I'm gonna start to use HTML files and execute
    the code directly on browser - I was using a vscode extension called live-p5 by Filipe Sabella
    (still using tbh) to visualize the changes I make right on vscode.
*/

var bubble = [];

function setup(){
    createCanvas(600, 400);
    
    for (var i=0; i<10; i++){
        bubble[i] = new Bubble();
    }
}

function draw(){
    background(0);    

    for(var i=0; i<10; i++){
        bubble[i].display();        
    }
    
    for(var i=0; i<10; i++){
        bubble[i].move(); 
    }
}